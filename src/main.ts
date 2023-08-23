// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

import { AppComponent } from './app/app.component';
import { counterReducer } from './app/store/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { CounterEffects } from './app/store/counter.effects';

// platformBrowserDynamic().bootstrapModule(AppComponent)
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ counter: counterReducer }),
    provideEffects([CounterEffects]),
  ] /** this is the global store */ /** this is the global store */,
});
