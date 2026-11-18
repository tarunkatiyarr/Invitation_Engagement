import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  isMenuOpen: boolean = false;
  isDarkMode: boolean = true;

  constructor() {
    this.isDarkMode =
      localStorage.getItem('theme') !== 'light';

    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;

    localStorage.setItem(
      'theme',
      this.isDarkMode ? 'dark' : 'light'
    );

    this.applyTheme();
  }

  applyTheme() {
    document.documentElement.classList.toggle(
      'dark',
      this.isDarkMode
    );
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
