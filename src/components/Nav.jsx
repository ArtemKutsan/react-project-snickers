// src/components/Nav.jsx
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const navLinks = [
  { title: 'Главная', path: '/' },
  { title: 'Корзина', path: '/cart' },
  { title: 'Контакты', path: '/contacts' },
];

function Nav() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {navLinks.map((item) => (
        <Button
          key={item.title}
          component={NavLink}
          to={item.path}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 3,
            px: 2,
            color: 'rgba(255, 255, 255, 0.5)',
            '&.active': {
              color: '#fff',
            },
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          {item.title}
        </Button>
      ))}
    </Box>
  );
}

export default Nav;
