import { decrement, increment, reset } from './../states/counter/counter.actions';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { selectCount, selectCounterState } from '../states/counter/counter.selector';
import { Observable } from 'rxjs';
import { initialCounterState } from '../states/counter/counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$!:Observable<number>

  constructor(private store:Store<AppState>) {
    this.count$ = this.store.select(selectCount)
}

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
