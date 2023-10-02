import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import 'raf/polyfill';
import forecast from './data/forecast.json';
//  import { createRoot } from 'react-dom/client';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App location={forecast.location} forecasts={forecast.forecasts}/>
  </React.StrictMode>
);

 