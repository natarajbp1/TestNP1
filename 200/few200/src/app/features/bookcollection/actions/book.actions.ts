import { Action } from '@ngrx/store';
import { BookItem } from '../model';

let maxId = 999;
export const BOOK_ADDED = '[book] book added';
export class AddedBook implements Action {
  readonly type = BOOK_ADDED;
  id: string;
  constructor(public bookItem: BookItem) {
    this.id = 'ISBN0000' + (maxId++).toString();
  }
}
export type All = AddedBook;
