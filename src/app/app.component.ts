import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from './theme.service';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngClass


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule]  // Import RouterLink and RouterLinkActive here
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  isNavVisible = false; // Controls the visibility of the nav
  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) {}

    // Method to toggle nav visibility
    toggleNav() {
      this.isNavVisible = !this.isNavVisible;
    }
  

 ngOnInit(): void {
    // Bij het laden van de applicatie controleren we het thema
    const currentTheme = localStorage.getItem('theme') || 'light';
    this.isDarkMode = currentTheme === 'dark';
    document.body.classList.add(currentTheme);
  }

  // Functie om te schakelen tussen dark en light mode
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }
}
