import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for createRoot
import App from './App';
import UserStore from './store/UserStore';
import ProductStore from './store/ProductStore';

export const Context = createContext(null);
console.log(process.env.REACT_APP_API_URL)

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    product: new ProductStore(),
  }}>
    <App />
  </Context.Provider>
);
