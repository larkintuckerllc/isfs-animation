import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authenticated from '../ducks/authenticated';
import slide from '../ducks/slide';

const reducers = {
  authenticated,
  form,
  slide,
};
export default combineReducers(reducers);
