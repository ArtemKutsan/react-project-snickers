import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Meta from '../../components/Meta';
import ProductCard from '../../components/ProductCard';
import ProductsContext from '../../context';

function HomePage() {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <Meta title="Главная" />

      <Box>
        <img src="public/images/Banner.png" alt="Баннер" />
      </Box>

      <Typography
        variant="h4"
        sx={{ pb: 2, my: 4, borderBottom: '1px solid lightgray' }}
        gutterBottom
      >
        Товары
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 4,
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </>
  );
}

export default HomePage;
