import { combineReducers } from 'redux';
import { combineActions, createAction, handleActions } from 'redux-actions';

const setAuthenticatedRequest = createAction('SET_AUTHENTICATED_REQUEST');
const setAuthenticatedSuccess = createAction('SET_AUTHENTICATED_SUCCESS');
const setAuthenticatedError = createAction('SET_AUTHENTICATED_ERROR');
export const login = () => (dispatch) => {
  dispatch(setAuthenticatedRequest(true));
  // TODO: ACTUALLY IMPLEMENT
  dispatch(setAuthenticatedSuccess(true));
};
export const logout = () => (dispatch) => {
  dispatch(setAuthenticatedRequest(false));
  // TODO: ACTUALLY IMPLEMENT
  dispatch(setAuthenticatedSuccess(false));
};
// TODO: NEED TO PULL DEFAULT FROM THR0W
const value = handleActions({
  [setAuthenticatedSuccess](_, action) {
    return action.payload;
  },
}, false);
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
