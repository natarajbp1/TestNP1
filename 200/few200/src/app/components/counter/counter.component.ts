import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../../reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;
  count = 0;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.count$ = this.store.select(s => s.counter.count);
  }
  increment() {
    this.store.dispatch({ type: 'increment' });
  }
  decrement() {
    this.store.dispatch({ type: 'decrement' });
  }

}
