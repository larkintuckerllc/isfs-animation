import { combineReducers } from 'redux';
import authenticated from '../ducks/authenticated';
import slide from '../ducks/slide';

const reducers = {
  authenticated,
  slide,
};
export default combineReducers(reducers);
