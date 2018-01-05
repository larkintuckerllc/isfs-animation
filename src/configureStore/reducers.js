import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authenticated from '../ducks/authenticated';
import channel from '../ducks/channel';
import connected from '../ducks/connected';
import countrySlide1 from '../ducks/countrySlide1';
import slide from '../ducks/slide';

const reducers = {
  authenticated,
  channel,
  connected,
  countrySlide1,
  form,
  slide,
};
export default combineReducers(reducers);
