import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './assets/styles/index.css';

import App from './App';
import { AppProvider } from './context/appContext';

const container = document.getElementById('root') ?? document.body;
const root = createRoot(container);

root.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
