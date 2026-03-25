import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ProductsContext from '../../context';
import Meta from '../../components/Meta';

function CartPage() {
  const { cartData, deleteFromCart } = useContext(ProductsContext);

  const total = cartData.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <>
      <Meta title="Корзина" />

      <Typography variant="h4" sx={{ pb: 2, mb: 4, borderBottom: '1px solid lightgray' }}>
        Корзина
      </Typography>

      {cartData.length === 0 ? (
        <Typography>Корзина пуста</Typography>
      ) : (
        <Box sx={{ display: 'flex', gap: 4, mt: 4 }}>
          <Box sx={{ flex: 2 }}>
            {cartData.map((item) => (
              <Card
                key={item.id}
                sx={{
                  display: 'flex',
                  mb: 4,
                  p: 2,
                  borderRadius: 6,
                }}
                variant="outlined"
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 100,
                    height: 100,
                    objectFit: 'contain',
                  }}
                  image={item.image}
                  alt={item.name}
                />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    ml: 2,
                    flex: 1,
                    borderLeft: '1px solid lightgray',
                    pl: 2,
                  }}
                >
                  <Typography variant="body1">{item.name}</Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Box sx={{ px: 4 }}>
                      <Typography variant="caption">ЦЕНА:</Typography>
                      <Typography variant="h6" sx={{ whiteSpace: 'nowrap' }}>
                        {item.price} €
                      </Typography>
                    </Box>
                    <IconButton onClick={() => deleteFromCart(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>

          <Box
            sx={{
              flex: 1,
              p: 4,
              bgcolor: '#FAFAFA',
              borderRadius: 6,
              height: 'fit-content',
            }}
          >
            <Typography variant="h5" align="center" gutterBottom>
              Итого
            </Typography>
            <Box sx={{ mt: 4 }}>
              {cartData.map((item) => (
                <Typography key={item.id} variant="body2" color="text.secondary" gutterBottom>
                  {item.name}
                </Typography>
              ))}
            </Box>
            <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid lightgray' }}>
              <Typography variant="caption" color="text.secondary">
                ЦЕНА:
              </Typography>
              <Typography variant="h6">{total} €</Typography>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default CartPage;
