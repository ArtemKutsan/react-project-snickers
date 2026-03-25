// src/pages/home/index.jsx
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Meta from '../../components/Meta';

function HomePage() {
  return (
    <>
      <Meta title="Главная" />

      <Box component="main">
        <Container maxWidth="md">
          <Typography variant="h1">React Project Snickers</Typography>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;
