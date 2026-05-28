import { Component, signal } from '@angular/core';
import { Invitation } from './pages/invitation/invitation';

@Component({
  selector: 'app-root',
  imports: [Invitation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('engagement-invitation');
}
