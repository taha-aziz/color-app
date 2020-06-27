import React from 'react';
import ReactDOM from 'react-dom';
import InteriorBoxCon from './containers/interior-box-container';
import MiddleBoxCon from './containers/middle-box-container';
import ExteriorBoxCon from './containers/exterior-box-container';
import './index.css';


const App = () =>
  <div>
    <ExteriorBoxCon></ExteriorBoxCon>
    <MiddleBoxCon></MiddleBoxCon>
    <InteriorBoxCon></InteriorBoxCon>
  </div>


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
