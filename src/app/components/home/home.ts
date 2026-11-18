import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faCode, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  imports: [RouterLink, FontAwesomeModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit, OnDestroy {
  faArrowRight = faArrowRight;
  faCode = faCode;
  faEnvelope = faEnvelope;
  faDownload = faDownload;

  faGithub = faGithub;
  faLinkedin = faLinkedin;

  name: string = 'Tarun Katiyar';
  role: string = 'Full Stack Developer';
  description: string = "I build modern, scalable and responsive web applications using Angular, React, Node.js and ASP.NET Core. I enjoy transforming ideas into powerful digital experiences.";

  roles: string[] = [
    'Full Stack Developer',
    'Angular Developer',
    'Frontend Developer',
    'Software Engineer'
  ];

  typedRole = signal('');

  private roleIndex = 0;
  private isDeleting = false;
  private typingTimer?: ReturnType<typeof setTimeout>;

  constructor() {

  }

  ngOnInit(): void {
    this.typeEffect();
  }

  typeEffect(): void {

    const currentRole = this.roles[this.roleIndex];
    const currentText = this.typedRole();

    if (!this.isDeleting) {

      this.typedRole.set(
        currentRole.substring(0, currentText.length + 1)
      );

      if (this.typedRole() === currentRole) {

        this.isDeleting = true;

        this.typingTimer = setTimeout(
          () => this.typeEffect(),
          1500
        );

        return;
      }

    } else {

      this.typedRole.set(
        currentRole.substring(0, currentText.length - 1)
      );

      if (this.typedRole() === '') {

        this.isDeleting = false;

        this.roleIndex =
          (this.roleIndex + 1) % this.roles.length;
      }
    }

    this.typingTimer = setTimeout(
      () => this.typeEffect(),
      this.isDeleting ? 50 : 100
    );
  }
  ngOnDestroy(): void {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
  }

}
