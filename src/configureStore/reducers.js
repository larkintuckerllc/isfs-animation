import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authenticated from '../ducks/authenticated';
import channel from '../ducks/channel';
import connected from '../ducks/connected';
import slide from '../ducks/slide';

const reducers = {
  authenticated,
  channel,
  connected,
  form,
  slide,
};
export default combineReducers(reducers);
