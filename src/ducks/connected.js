import { combineReducers } from 'redux';
import { combineActions, createAction, handleActions } from 'redux-actions';
import * as fromThr0w from '../apis/thr0w';

const setConnectedRequest = createAction('SET_CONNECTED_REQUEST');
const setConnectedSuccess = createAction('SET_CONNECTED_SUCCESS');
const setConnectedError = createAction('SET_CONNECTED_ERROR');
export const connect = () => (dispatch) => {
  // TODO: IMPLEMENT
  dispatch(setConnectedRequest(true));
  dispatch(setConnectedSuccess(true));
  return Promise.resolve(true);
};
export const disconnect = () => (dispatch) => {
  dispatch(setConnectedRequest(false));
  fromThr0w.disconnect();
  dispatch(setConnectedSuccess(false));
};
const value = handleActions({
  [setConnectedSuccess](_, action) {
    return action.payload;
  },
}, false);
const isSetting = handleActions({
  [setConnectedRequest]() {
    return true;
  },
  [combineActions(
    setConnectedSuccess,
    setConnectedError,
  )]() {
    return false;
  },
}, false);
const settingErrorMessage = handleActions({
  [setConnectedError]() {
    return true;
  },
  [combineActions(
    setConnectedRequest,
    setConnectedSuccess,
  )]() {
    return false;
  },
}, false);
export default combineReducers({
  value,
  isSetting,
  settingErrorMessage,
});
export const getConnected = state => state.connected.value;
