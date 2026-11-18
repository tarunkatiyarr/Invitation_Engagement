
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faBriefcase,
  faCalendarDays,
  faLocationDot,
  faCode
} from '@fortawesome/free-solid-svg-icons';

interface ExperienceItem {
  jobTitle: string;
  company: string;
  project?: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  imports: [FontAwesomeModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  faBriefcase = faBriefcase;
  faCalendarDays = faCalendarDays;
  faLocationDot = faLocationDot;
  faCode = faCode;

  experiences: ExperienceItem[] = [
    {
      jobTitle: 'Full Stack Developer',
      company: 'Ohara IT Solutions',
      duration: 'April 2024 - Present',
      location: 'Remote',
      current: true,
      description:
        'Developing modern and scalable web applications using Angular and backend technologies, with a focus on reusable components, application architecture and performance.',
      responsibilities: [
        'Developing applications using Angular 16 and Angular 19 with RxJS.',
        'Using RxJS operators to manage asynchronous data streams and handle reactive programming.',
        'Designing and implementing custom Angular pipes, services and directives.',
        'Working with Nx workspace and Microfrontend architecture.',
        'Integrating interactive charts using D3.js and ngx-charts.',
        'Integrating third-party libraries and APIs into Angular applications.',
        'Developing backend services using .NET Core and REST APIs.',
        'Working with Microservices architecture to build modular backend services.'
      ],
      technologies: [
        'Angular 16',
        'Angular 19',
        'RxJS',
        'Nx',
        'Microfrontend',
        'D3.js',
        'ngx-charts',
        '.NET Core',
        'REST APIs',
        'Microservices'
      ]
    },
    {
      jobTitle: 'Frontend Developer',
      company: 'Awake Infotech',
      project: 'Maggieplus.com',
      duration: 'May 2023 - April 2024',
      location: 'Noida, Uttar Pradesh',
      description:
        'Developed and enhanced frontend application features, focusing on performance optimization, data import functionality and report generation.',
      responsibilities: [
        'Optimized application performance through code refactoring and lazy loading modules.',
        'Followed Angular development best practices to improve application performance and maintainability.',
        'Integrated third-party libraries to read Excel spreadsheets and import client data into the system.',
        'Implemented dynamic PDF report generation and download functionality.',
        'Improved user experience by enabling convenient report sharing and data access.'
      ],
      technologies: [
        'Angular 14',
        'TypeScript',
        'CSS3',
        'Bootstrap',
        'Excel Integration',
        'PDF Generation'
      ]
    },
    {
      jobTitle: 'Software Engineer',
      company: 'Orbiqe Technologies',
      project: 'Salesoptima.com',
      duration: 'June 2022 - May 2023',
      location: 'Noida, Uttar Pradesh',
      description:
        'Worked on Angular-based web applications, implementing data visualization components and secure API access.',
      responsibilities: [
        'Implemented Kendo UI components, including Grids and Charts, for better data presentation and visualization.',
        'Developed interactive and user-friendly application interfaces.',
        'Implemented authentication and authorization mechanisms to secure API endpoints.',
        'Worked on integrating frontend components with backend APIs.'
      ],
      technologies: [
        'Angular 12',
        'TypeScript',
        'Kendo UI',
        'Angular Grid',
        'Kendo Charts',
        'REST APIs'
      ]
    },
    {
      jobTitle: 'Angular Developer',
      company: 'Irasys Softtech',
      project: 'Childsown.com',
      duration: 'April 2021 - May 2022',
      location: 'Noida, Uttar Pradesh',
      description:
        'Developed dynamic and data-driven user interfaces using Angular, with an emphasis on form validation and user experience.',
      responsibilities: [
        'Implemented reactive forms in Angular applications to create dynamic and data-driven user interfaces.',
        'Integrated Angular form controls with built-in validators and custom validators.',
        'Enforced data integrity through form validation.',
        'Improved user experience by creating structured and user-friendly forms.'
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'Reactive Forms',
        'Custom Validators',
        'CSS3',
        'Bootstrap'
      ]
    }
  ];

  summaryStats = [
    {
      value: '5+',
      label: 'Years of Experience'
    },
    {
      value: '4',
      label: 'Companies Worked'
    },
    {
      value: 'Full Stack',
      label: 'Development Focus'
    },
    {
      value: 'Angular',
      label: 'Core Technology'
    }
  ];

  professionalSummary =
    'Full Stack Developer with 5+ years of experience building responsive, scalable and user-friendly web applications. Experienced in Angular, RxJS, frontend architecture, REST APIs and .NET Core, with hands-on exposure to Microfrontend and Microservices architecture.';

}
