import { createAction, handleActions } from 'redux-actions';
import getQueryString from '../util/getQueryString';
import * as fromThr0w from '../apis/thr0w';

const initialValue = getQueryString('wall') === null ? null : fromThr0w.getChannel();
export const setChannel = createAction('SET_CHANNEL');
export default handleActions({
  [setChannel](_, action) {
    return action.payload;
  },
}, initialValue);
export const getChannel = state => state.channel;
