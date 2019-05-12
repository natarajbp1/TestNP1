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
    console.log(title.value);
    console.log(author.value);
    console.log(format.value);
    let bookItem: BookItem;
    bookItem.title = title.value;
    bookItem.author = author.value;
    bookItem.format = format.value;
    this.store.dispatch(new AddedBook(bookItem));
    title.value = '';
    title.focus();
    author.value = '';
    format.value = '';

  }

}
