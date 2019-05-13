import { Action } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as actions from '../actions/book.actions';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}

export interface State extends EntityState<BookEntity> {

}

const initialState: State = {
  ids: ['1'],
  entities: {
    1: {
      id: '1', title: 'Lean from the trenches', author: 'Henrik Kniberg', format: 'HardCover'
    }
  }
};
export const adapters = createEntityAdapter<BookEntity>();

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.BOOK_ADDED: {
      // tslint:disable-next-line: max-line-length
      const bookToAdd: BookEntity = { id: action.id, title: action.bookItem.title, author: action.bookItem.author, format: action.bookItem.format };

      return adapters.addOne(bookToAdd, state);
    }
    default: {
      return state;
    }
  }
}
