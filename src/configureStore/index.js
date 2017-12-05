import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { CHANNELS } from '../config';
import thr0wMiddleware from '../util/thr0wMiddleware';
import reducers from './reducers';

export default () => {
  const middlewares = [
    thunk,
    thr0wMiddleware(['SET_SLIDE'], CHANNELS),
  ];
  return createStore(
    reducers,
    compose(
      applyMiddleware(...middlewares),
      process.env.NODE_ENV !== 'production' && window.devToolsExtension ?
        window.devToolsExtension() : f => f,
    ),
  );
};
