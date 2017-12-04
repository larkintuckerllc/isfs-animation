import { combineReducers } from 'redux';
import { combineActions, createAction, handleActions } from 'redux-actions';
import getQueryString from '../util/getQueryString';
import * as fromThr0w from '../apis/thr0w';

const initialValue = getQueryString('wall') === null ? false : fromThr0w.authenticated();
const setAuthenticatedRequest = createAction('SET_AUTHENTICATED_REQUEST');
const setAuthenticatedSuccess = createAction('SET_AUTHENTICATED_SUCCESS');
const setAuthenticatedError = createAction('SET_AUTHENTICATED_ERROR');
export const login = () => (dispatch) => {
  // TODO: ACTUALLY IMPLEMENT
  dispatch(setAuthenticatedRequest(true));
  dispatch(setAuthenticatedSuccess(true));
  return Promise.resolve(true);
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
