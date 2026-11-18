import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faCode,
  faLaptopCode,
  faLightbulb,
  faRocket,
  faDownload
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  faCode = faCode;
  faLaptopCode = faLaptopCode;
  faLightbulb = faLightbulb;
  faRocket = faRocket;
  faDownload = faDownload;

  name = 'Tarun Katiyar';

  introduction = `I am a Full Stack Developer passionate about building modern,
  scalable and user-friendly web applications.`;

  description = `I enjoy working across frontend and backend technologies,
  developing responsive user interfaces, building REST APIs,
  and designing efficient database solutions.`;

  interests = [
    'Frontend Development',
    'Backend Development',
    'REST API Development',
    'Database Design',
    'Problem Solving'
  ];

}