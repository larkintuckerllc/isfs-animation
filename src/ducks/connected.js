import { combineReducers } from 'redux';
import { combineActions, createAction, handleActions } from 'redux-actions';
import * as fromThr0w from '../apis/thr0w';
import * as fromChannel from './channel';

const setConnectedRequest = createAction('SET_CONNECTED_REQUEST');
const setConnectedSuccess = createAction('SET_CONNECTED_SUCCESS');
const setConnectedError = createAction('SET_CONNECTED_ERROR');
export const connect = () => (dispatch, getState) => {
  dispatch(setConnectedRequest(true));
  return fromThr0w.connect(fromChannel.getChannel(getState()), () => {})
    .then(
      () => dispatch(setConnectedSuccess(true)),
      () => {
        dispatch(setConnectedError());
        throw new Error();
      },
    );
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
