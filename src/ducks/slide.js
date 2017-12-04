import { createAction, handleActions } from 'redux-actions';

export const setSlide = createAction('SET_SLIDE');
export default handleActions({
  [setSlide](_, action) {
    return action.payload;
  },
}, 0);
export const getSlide = state => state.slide;
