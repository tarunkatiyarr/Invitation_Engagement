
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faEnvelope,
  faLocationDot,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  faEnvelope = faEnvelope;
  faLocationDot = faLocationDot;
  faPaperPlane = faPaperPlane;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  // Replace this with your actual email address
  email = 'tarunkatiyar777@gmail.com';

  linkedinUrl = 'https://www.linkedin.com/in/katiyartarun';

  // Replace with your actual GitHub profile
  githubUrl = 'https://github.com/tarunkatiyarr';

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitForm(): void {
    const subject = encodeURIComponent(this.contactForm.subject);

    const body = encodeURIComponent(
      `Name: ${this.contactForm.name}\n` +
      `Email: ${this.contactForm.email}\n\n` +
      `Message:\n${this.contactForm.message}`
    );

    const mailtoUrl =
      `mailto:${this.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
  }
}
