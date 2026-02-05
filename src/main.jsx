import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx'; 
import {Provider} from "react-redux";
import {store} from "./store/store.js";

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Provider store={store}> 
      <RouterProvider router={router} />
      </Provider>
    </StrictMode>
  );
} else {
  console.error("Elemento root non trovato!");
}


