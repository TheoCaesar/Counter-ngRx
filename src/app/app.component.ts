import { Store } from '@ngrx/store';
import { selectCount } from './states/counter/counter.selector';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from './states/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$!:Observable<number>
  title = 'ngrx-counter';

  constructor(private store: Store<AppState>){
    this.count$ = this.store.select(selectCount)
  }
}
