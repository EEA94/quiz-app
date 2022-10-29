import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter basename='/quiz-app'>
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
  </BrowserRouter>
  
)
