import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';

const App = () => {
  return (<BrowserRouter>
  <Home />
  </BrowserRouter>)
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement
);root.render(<App/>);

reportWebVitals();
