import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ChangeDivColor from './components/change-div-color';

import ChangeBorderRadius from './components/change-border-radius';
import ChangeText from './components/firstname-lastname-age';
import ChangeText1 from './components/text-uppercase-length';
import MyComponent from './components/change-inputs-texts';
import Button from './components/count-button-clicks';
import Toggle from './components/toggled-text';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toggle/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
