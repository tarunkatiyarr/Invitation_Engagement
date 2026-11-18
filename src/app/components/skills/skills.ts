
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faCode,
  faServer,
  faDatabase,
  faTools
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  imports: [FontAwesomeModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  faCode = faCode;
  faServer = faServer;
  faDatabase = faDatabase;
  faTools = faTools;

  skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces.',
      icon: faCode,
      skills: [
        'Angular',
        'React',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Bootstrap'
      ]
    },
    {
      title: 'Backend Development',
      description: 'Developing APIs and server-side applications.',
      icon: faServer,
      skills: [
        'Node.js',
        'Express.js',
        'ASP.NET Core',
        'C#',
        'REST API',
        'JWT Authentication'
      ]
    },
    {
      title: 'Database',
      description: 'Working with relational and NoSQL databases.',
      icon: faDatabase,
      skills: [
        'SQL Server',
        'MongoDB',
        'Mongoose',
        'Entity Framework Core'
      ]
    },
    {
      title: 'Tools & Technologies',
      description: 'Development tools and version control.',
      icon: faTools,
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Postman',
        'Visual Studio',
      ]
    }
  ];

}
