import Meta from '../../components/Meta';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SnapchatIcon from '@mui/icons-material/Chat';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

function ContactsPage() {
  return (
    <>
      <Meta title="Контакты" />

      <Typography variant="h4" sx={{ pb: 2, mb: 4, borderBottom: '1px solid lightgray' }}>
        Контакты
      </Typography>

      <Box sx={{ mt: 8 }}>
        <Typography color="text.secondary" gutterBottom>
          8 800 000 00 00
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          emailexample@email.com
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 4, mt: 6 }}>
        <Box sx={{ flex: 2 }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              fullWidth
              placeholder="Ваш email"
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: '#FAFAFA',
                  borderRadius: 3,
                  maxHeight: 40,
                },
              }}
            />
            <TextField
              fullWidth
              placeholder="Ваше имя"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: '#FAFAFA',
                  borderRadius: 3,
                  maxHeight: 40,
                },
              }}
            />
          </Box>

          <TextField
            fullWidth
            placeholder="Введите сообщение"
            multiline
            rows={4}
            sx={{
              '& .MuiOutlinedInput-root': {
                bgcolor: '#FAFAFA',
                borderRadius: 3,
              },
            }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            bgcolor: '#FAFAFA',
            borderRadius: 6,
            p: 4,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography color="text.secondary" gutterBottom>
            Найдите нас:
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
            <IconButton
              sx={{ bgcolor: '#FFFC00', color: '#000', '&:hover': { bgcolor: '#FFFC00' } }}
            >
              <SnapchatIcon />
            </IconButton>

            <IconButton
              sx={{ bgcolor: '#1877F2', color: '#fff', '&:hover': { bgcolor: '#1877F2' } }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton sx={{ bgcolor: '#000', color: '#fff', '&:hover': { bgcolor: '#000' } }}>
              <XIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#090D1A',
            color: '#fff',
            borderRadius: 3,
            '&:hover': {
              bgcolor: '#090D1A',
            },
          }}
        >
          Отправить
        </Button>
      </Box>
    </>
  );
}

export default ContactsPage;
