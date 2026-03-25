import { useForm } from 'react-hook-form';
import Meta from '../../components/Meta';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SnapchatIcon from '@mui/icons-material/Chat';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

function ContactsPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    alert(`Спасибо, ${data.name}! Сообщение отправлено.`);
    reset();
  };

  return (
    <>
      <Meta title="Контакты" />

      <Typography
        variant="h4"
        sx={{ pb: 2, mb: 4, borderBottom: '1px solid lightgray' }}
        gutterBottom
      >
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

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: 6 }}
      >
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={{ flex: 2 }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <TextField
                fullWidth
                placeholder="Ваш email"
                {...register('email', {
                  required: 'Введите email',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Некорректный email',
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
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
                {...register('name', {
                  required: 'Введите имя',
                  minLength: {
                    value: 2,
                    message: 'Минимум 2 символа',
                  },
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
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
              {...register('message', {
                required: 'Введите сообщение',
                minLength: {
                  value: 10,
                  message: 'Минимум 10 символов',
                },
              })}
              error={!!errors.message}
              helperText={errors.message?.message}
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
                sx={{
                  borderRadius: 3,
                  bgcolor: '#FFFC00',
                  color: '#000',
                  '&:hover': { bgcolor: '#FFFC00' },
                }}
              >
                <SnapchatIcon />
              </IconButton>

              <IconButton
                sx={{
                  borderRadius: 3,
                  bgcolor: '#1877F2',
                  color: '#fff',
                  '&:hover': { bgcolor: '#1877F2' },
                }}
              >
                <FacebookIcon
                  sx={{ bgcolor: '#1877F2', color: '#fff', '&:hover': { bgcolor: '#1877F2' } }}
                />
              </IconButton>

              <IconButton
                sx={{
                  borderRadius: 3,
                  bgcolor: '#000',
                  color: '#fff',
                  '&:hover': { bgcolor: '#000' },
                }}
              >
                <XIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            type="submit"
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
      </Box>
    </>
  );
}

export default ContactsPage;
