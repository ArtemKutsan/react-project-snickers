import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ProductsProvider from './components/ProductsProvider';
import App from './App';
import './index.css';
import './tailwind.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3B3C3D',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
          },
          '&:focus': {
            boxShadow: 'none',
          },
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </ThemeProvider>
  </BrowserRouter>,
);
