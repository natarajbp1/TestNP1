import * as fromBooks from './book.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookItem } from '../model';

export interface State {
  books: fromBooks.State;
}
export const reducers = {
  books: fromBooks.reducer
};

// 1. Feature Selector
const selectFeature = createFeatureSelector<State>('bookFeature');

// 2. A Selector for each "branch" of that feature.
const selectBookBranch = createSelector(selectFeature, f => f.books);
// 3. "Helpers"

const { selectAll: selectAllBookEntities } = fromBooks.adapters.getSelectors(selectBookBranch);

// 4. Component Selector

// TodoItem[] (list component)

export const selectAllBookItems = createSelector(selectAllBookEntities, t => t as BookItem[]);
