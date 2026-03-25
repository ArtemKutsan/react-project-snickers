import { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ProductsContext from '../../context';

function ProductCard({ product }) {
  const { addToCart } = useContext(ProductsContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card
      elevation={0}
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 6,
        height: 'auto',
        p: 4,
        pb: 3,
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: 200,
          objectFit: 'cover',
        }}
      />
      <Box>
        <Typography variant="body2" gutterBottom>
          {product.name}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Box>
            <Typography variant="caption">ЦЕНА:</Typography>
            <Typography variant="h6" component="div">
              {product.price} €
            </Typography>
          </Box>
          <IconButton
            onClick={handleAddToCart}
            sx={{
              border: '2px solid lightgray',
              '&:hover': {
                color: 'white',
                bgcolor: 'black',
                border: '2px solid transparent',
              },
              transition: '0.2s',
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}

export default ProductCard;
