import { combineReducers } from 'redux';
import { combineActions, createAction, handleActions } from 'redux-actions';
import getQueryString from '../util/getQueryString';
import * as fromThr0w from '../apis/thr0w';

const initialValue = getQueryString('wall') === null ? false : fromThr0w.authenticated();
const setAuthenticatedRequest = createAction('SET_AUTHENTICATED_REQUEST');
const setAuthenticatedSuccess = createAction('SET_AUTHENTICATED_SUCCESS');
const setAuthenticatedError = createAction('SET_AUTHENTICATED_ERROR');
export const login = (username, password) => (dispatch) => {
  dispatch(setAuthenticatedRequest(true));
  return fromThr0w.login(username, password)
    .then(
      () => dispatch(setAuthenticatedSuccess(true)),
      () => {
        dispatch(setAuthenticatedError());
        throw new Error();
      },
    );
};
export const logout = () => (dispatch) => {
  dispatch(setAuthenticatedRequest(false));
  fromThr0w.logout();
  dispatch(setAuthenticatedSuccess(false));
};
const value = handleActions({
  [setAuthenticatedSuccess](_, action) {
    return action.payload;
  },
}, initialValue);
const isSetting = handleActions({
  [setAuthenticatedRequest]() {
    return true;
  },
  [combineActions(
    setAuthenticatedSuccess,
    setAuthenticatedError,
  )]() {
    return false;
  },
}, false);
const settingErrorMessage = handleActions({
  [setAuthenticatedError]() {
    return true;
  },
  [combineActions(
    setAuthenticatedRequest,
    setAuthenticatedSuccess,
  )]() {
    return false;
  },
}, false);
export default combineReducers({
  value,
  isSetting,
  settingErrorMessage,
});
export const getAuthenticated = state => state.authenticated.value;
