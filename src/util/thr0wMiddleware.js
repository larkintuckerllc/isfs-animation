import { getChannel, onMessage, offMessage, thr0w } from '../apis/thr0w';
import { getConnected } from '../ducks/connected';

export default (actionTypes, channels) => {
  const actionTypesLookup = {};
  for (let i = 0; i < actionTypes.length; i += 1) {
    actionTypesLookup[actionTypes[i]] = true;
  }
  return (store) => {
    function handleMessage(data) {
      if (data.source === getChannel()) return;
      store.dispatch(data.message);
    }
    return next => (
      (action) => {
        if (action.type === 'SET_CONNECTED_SUCCESS' && action.payload) {
          onMessage(handleMessage);
        }
        if (action.type === 'SET_CONNECTED_REQUEST' && !action.payload) {
          offMessage(handleMessage);
        }
        if (
          getConnected(store.getState()) &&
          !action.thr0w &&
          actionTypesLookup[action.type] !== undefined
        ) {
          const newAction = { ...action, thr0w: true };
          thr0w(channels, newAction);
        }
        return next(action);
      }
    );
  };
};
