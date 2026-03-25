import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#232425',
        color: '#fff',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Контакты
            </Typography>
            <Typography color="rgba(255, 255, 255, 0.5)">8 800 000 00 00</Typography>
            <Typography color="rgba(255, 255, 255, 0.5)">emailexample@email.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton sx={{ color: '#fff' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: '#fff' }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: '#fff' }}>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pt: 3,
          }}
        >
          <Typography color="rgba(255, 255, 255, 0.5)">
            2026 Сникер-магазин. Все права защищены.
          </Typography>
          <InputBase
            placeholder="Введите свой email:"
            sx={{
              minWidth: 288,
              color: '#fff',
              borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
