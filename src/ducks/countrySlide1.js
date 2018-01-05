import { createAction, handleActions } from 'redux-actions';

export const setCountrySlide1 = createAction('SET_COUNTRY_SLIDE_1');
export default handleActions({
  [setCountrySlide1](_, action) {
    return action.payload;
  },
}, null);
export const getCountrySlide1 = state => state.countrySlide1;
