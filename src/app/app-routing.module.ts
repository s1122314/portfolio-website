import { Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'work', component: WorkComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/work', pathMatch: 'full' },  // Default route
  { path: '**', redirectTo: '/work', pathMatch: 'full' }  // Wildcard route for handling 404s
];