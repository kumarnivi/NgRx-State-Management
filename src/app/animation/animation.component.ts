import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  // animations:[
  // trigger("Slider",[
  //   transition("")
  // ])
  // ]
})
export class AnimationComponent {
title = 'angular-animation-lab'
IsOpen :boolean = false

toggle( ) {
  this.IsOpen = !this.IsOpen
}

}
