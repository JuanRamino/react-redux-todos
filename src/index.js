import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';

const persistedState = {
  todos: [{
    id: '0',
    text: 'Welcome back',
    completed: false,
  }],
};
const store = createStore(
  todoApp,
  persistedState
);
// Lo stato impostato da createStore sovrascrive quello impostato dai singoli reducers.
// In questo caso, avendo impostato solo quello dell'oggetto todos
// lo stato del visibilityFilter è preso dal suo reducer ('SHOW_ALL')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
