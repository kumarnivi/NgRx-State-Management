import { Component } from '@angular/core';

import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { CommonModule } from '@angular/common';
import { AnimationComponent } from './animation/animation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 standalone: true,
 imports: [CounterOutputComponent, CounterControlsComponent,AnimationComponent],
})
export class AppComponent {}
