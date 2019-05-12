import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookItem } from './model';
import { State, selectAllBookItems } from './reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-bookcollection',
  templateUrl: './bookcollection.component.html',
  styleUrls: ['./bookcollection.component.css']
})
export class BookcollectionComponent implements OnInit {
  bookItem$: Observable<BookItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.bookItem$ = this.store.select(selectAllBookItems);
  }

}
