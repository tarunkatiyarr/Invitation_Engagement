
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faArrowUpRightFromSquare,
  faCode
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  imports: [FontAwesomeModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  faExternalLink = faArrowUpRightFromSquare;
  faCode = faCode;
  faGithub = faGithub;

  projects = [
    {
      title: 'Google Drive Application',
      category: 'Full Stack Development',
      description:
        'A web application built to manage Google Drive folders through an Angular interface and ASP.NET Core backend.',
      technologies: [
        'Angular',
        'TypeScript',
        'ASP.NET Core',
        'Google Drive API'
      ],
      icon: 'drive',
      githubUrl: '',
      liveUrl: ''
    },
    {
      title: 'Product Management API',
      category: 'Backend Development',
      description:
        'A RESTful API for managing products with CRUD operations, pagination and database integration.',
      technologies: [
        'ASP.NET Core',
        'C#',
        'Entity Framework Core',
        'SQL Server'
      ],
      icon: 'api',
      githubUrl: '',
      liveUrl: ''
    },
    {
      title: 'User Authentication API',
      category: 'Backend Development',
      description:
        'An authentication system featuring user registration, login, password hashing and JWT-based authentication.',
      technologies: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
        'Zod'
      ],
      icon: 'auth',
      githubUrl: '',
      liveUrl: ''
    }
  ];

}
