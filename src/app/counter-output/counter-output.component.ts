// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Subscription,Observable } from 'rxjs';
// import { Store} from '@ngrx/store'
// import { AsyncPipe } from '@angular/common';

// @Component({
//   selector: 'app-counter-output',
//   templateUrl: './counter-output.component.html',
//   styleUrls: ['./counter-output.component.css'],
//   standalone: true,
//   imports:[AsyncPipe] //** if have a standalone component must import the asyncPipe */
// })
// export class CounterOutputComponent  {
//   // counter = 0;
//   // counterServiceSub?: Subscription;

//   // count$ !:Observable<number>
//   // constructor(private store: Store<{counter:number}>) {
//   //   this.count$ = store.select('counter');
   
//   // }


//   // ngOnInit(): void {
//   //   this.counterServiceSub = this.counterService.counterChanged.subscribe(
//   //     (newVal) => (this.counter = newVal)
//   //   );
//   // }

//   // ngOnDestroy(): void {
//   //   if (this.counterServiceSub) {
//   //     this.counterServiceSub.unsubscribe();
//   //   }
//   // }
// }


import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

import { selectCount, selectDoubleCount } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [AsyncPipe]
})
export class CounterOutputComponent {
  count$: Observable<number>;
  doubleCount$: Observable<number>;

  constructor(private store: Store<{counter: number}>) {
    this.count$ = store.select(selectCount);
    this.doubleCount$ = store.select(selectDoubleCount);
  }
}
