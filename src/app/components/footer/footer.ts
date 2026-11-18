
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  faArrowUp = faArrowUp;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  currentYear = new Date().getFullYear();

  name = 'Tarun Katiyar';
  role = 'Full Stack Developer';

  linkedinUrl = 'https://www.linkedin.com/in/katiyartarun';
  githubUrl = 'https://github.com/tarunkatiyarr';

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
