import React from 'react';
import ReactDOM from 'react-dom';
import ExteriorBoxCon from './containers/exterior-box-container';
import './index.css';


const App = () =>
  <div>
    <ExteriorBoxCon></ExteriorBoxCon>
  </div>


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
