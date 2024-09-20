import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: string = 'light';

  constructor() {
    if (this.isBrowser()) {
      const savedTheme = localStorage.getItem('theme') || 'light';
      this.setTheme(savedTheme);
    }
  }

  setTheme(theme: string) {
    this.currentTheme = theme;

    if (this.isBrowser()) {
      localStorage.setItem('theme', theme);
      document.body.className = theme;  // Applies theme to the entire body
    }
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  getTheme() {
    return this.currentTheme;
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
