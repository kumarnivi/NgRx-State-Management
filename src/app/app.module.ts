import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { AnimationComponent } from './animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterControlsComponent,
    CounterOutputComponent,
    AnimationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
