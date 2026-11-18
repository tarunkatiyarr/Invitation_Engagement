
import { Component, effect, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private router = inject(Router);
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updatePageSEO();
      });
  }

  updatePageSEO(): void {
    const route = this.router.url.split('?')[0];

    const seoData: Record<string, { title: string; description: string }> = {
      '/home': {
        title: 'Tarun Katiyar | Full Stack Developer',
        description: 'Full Stack Developer specializing in Angular, React and .NET Core.'
      },
      '/about': {
        title: 'About Me | Tarun Katiyar',
        description: 'Learn about Tarun Katiyar, a Full Stack Developer and his development journey.'
      },
      '/skills': {
        title: 'Technical Skills | Tarun Katiyar',
        description: 'Explore my technical skills in Angular, RxJS, TypeScript, .NET Core and more.'
      },
      '/projects': {
        title: 'Projects | Tarun Katiyar',
        description: 'Explore web development projects and applications built using modern technologies.'
      },
      '/experience': {
        title: 'Professional Experience | Tarun Katiyar',
        description: 'Explore my professional experience as a Full Stack and Angular Developer.'
      },
      '/contact': {
        title: 'Contact Me | Tarun Katiyar',
        description: 'Get in touch with Tarun Katiyar for development opportunities and collaborations.'
      }
    };

    const currentPage = seoData[route] ?? seoData['/home'];

    this.title.setTitle(currentPage.title);

    this.meta.updateTag({
      name: 'description',
      content: currentPage.description
    });

    this.meta.updateTag({
      property: 'og:title',
      content: currentPage.title
    });

    this.meta.updateTag({
      property: 'og:description',
      content: currentPage.description
    });
  }
}
