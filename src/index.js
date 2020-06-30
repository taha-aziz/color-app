import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/main';
import ExteriorBoxCon from './containers/exterior-box-container';
import './index.css';

let store = createStore(reducers, applyMiddleware(thunk));


const App = () =>
  <div>
    <ExteriorBoxCon></ExteriorBoxCon>
  </div>


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
