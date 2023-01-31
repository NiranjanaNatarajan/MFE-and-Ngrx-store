import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styles: [
  ]
})
export class CounterOutputComponent implements OnInit {
  counter: any;

  constructor(private store: Store<{counter: {counter: number}}>) { }

  ngOnInit(): void {
    console.log(this.counter, '11');
    this.store.select('counter').subscribe((data) => {
      this.counter = data.counter;
    console.log(this.counter, data,'1122');

    })
  }

}
