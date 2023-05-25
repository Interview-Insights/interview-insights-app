import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './assets/styles/index.css';

import App from './App';

const container = document.getElementById('root') ?? document.body;
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
