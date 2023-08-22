import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription,Observable } from 'rxjs';
import { Store} from '@ngrx/store'
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports:[AsyncPipe] //** if have a standalone component must import the asyncPipe */
})
export class CounterOutputComponent  {
  // counter = 0;
  // counterServiceSub?: Subscription;

  count$ !:Observable<number>
  constructor(private store: Store<{counter:number}>) {
    this.count$ = store.select('counter');
   
  }


  // ngOnInit(): void {
  //   this.counterServiceSub = this.counterService.counterChanged.subscribe(
  //     (newVal) => (this.counter = newVal)
  //   );
  // }

  // ngOnDestroy(): void {
  //   if (this.counterServiceSub) {
  //     this.counterServiceSub.unsubscribe();
  //   }
  // }
}
