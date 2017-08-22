import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import todoApp from './reducers';

const thunk = (store) => (next) => (action) => // eslint-disable-line no-confusing-arrow
  typeof action === 'function' ?
    action(store.dispatch) :
    next(action);

const configureStore = () => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    // sostituisco la funzione dispatch di redux con questa che aggiunge i logs
    middlewares.push(createLogger);
  }

  return createStore(
    todoApp,
    applyMiddleware(...middlewares) // very last argument, pesisted state should be passed before
  );
};

export default configureStore;
