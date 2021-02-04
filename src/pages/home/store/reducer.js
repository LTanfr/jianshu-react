import { fromJS } from 'immutable';

const defaultState = fromJS({

});

export const homeReducer = (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}