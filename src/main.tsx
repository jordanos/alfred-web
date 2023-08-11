import { CssBaseline } from '@mui/material';
import App from 'app';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store';
import 'styles/font.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <Router>
          <CssBaseline />
          <App />
        </Router>
      </Provider>
    </StrictMode>
  );
}
