import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { AddedBook } from '../../actions/book.actions';
import { BookItem } from '../../model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }
  add(title: HTMLInputElement, author: HTMLInputElement, format: HTMLSelectElement) {
    const bookItem: BookItem = {
      id: '',
      title: title.value,
      author: author.value,
      format: format.value
    };
    console.log(bookItem);
    this.store.dispatch(new AddedBook(bookItem));
    title.value = '';
    title.focus();
    author.value = '';
    format.value = '';

  }

}
