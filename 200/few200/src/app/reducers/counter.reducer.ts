import { Action } from '@ngrx/store';

export interface State {
  count: number;
}

const initialState: State = {
  count: 0
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'increment': {
      return {
        count: state.count + 1
      };
    }
    case 'decrement': {
      return {
        count: state.count - 1
      };
    }
    default: {
      return state;
    }
  }
}

