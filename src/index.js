import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const contentDiv = document.getElementById("root");
const gridProps = window.gridProps || {};
ReactDOM.render(React.createElement(App, gridProps), contentDiv);
