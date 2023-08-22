// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

import { AppComponent } from './app/app.component';

// platformBrowserDynamic().bootstrapModule(AppComponent)
//   .catch(err => console.error(err));

 bootstrapApplication(AppComponent, {
  providers:[provideStore()]
 }) 