import './index.css';
import './tailwind.css';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ProductsProvider from './components/ProductsProvider';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </BrowserRouter>,
);
