import { Component, OnInit, ViewEncapsulation  } from '@angular/core';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  
})
export class AboutComponent implements OnInit {

  ngOnInit(): void {
    // Apply the current theme to the component's host element (optional)
    const currentTheme = localStorage.getItem('theme') || 'light';
    const rootElement = document.querySelector('app-root');

    if (rootElement) {
      rootElement.classList.add(currentTheme);  // Apply the dark or light class to the app-root
    }
  }
}