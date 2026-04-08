import { useState, useEffect, useCallback, useMemo } from 'react';
import ProductsContext from '../../context';
import axios from 'axios';

const BASE_URL = 'https://69c39e4fb780a9ba03e75a88.mockapi.io';

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_URL}/productsData`);
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  }, []);

  const fetchCartData = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_URL}/cartData`);
      setCartData(response.data);
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    }
  }, []);

  const addToCart = useCallback(
    async (product) => {
      try {
        // const response = await axios.post(`${BASE_URL}/cartData`, product);
        // сделать fetchCartData
        // setCartData((prev) => [...prev, response.data]);
        await axios.post(`${BASE_URL}/cartData`, product);
        await fetchCartData();
      } catch (error) {
        console.error('Failed to add to cart:', error);
      }
    },
    [fetchCartData],
  );

  const deleteFromCart = useCallback(
    async (productId) => {
      try {
        await axios.delete(`${BASE_URL}/cartData/${productId}`);
        // сделать fetchCartData
        // setCartData((prev) => prev.filter((item) => item.id !== productId));
        await fetchCartData();
      } catch (error) {
        console.error('Failed to delete from cart:', error);
      }
    },
    [fetchCartData],
  );

  useEffect(() => {
    fetchProducts();
    fetchCartData();
  }, [fetchProducts, fetchCartData]);

  const value = useMemo(
    () => ({ products, cartData, fetchCartData, addToCart, deleteFromCart }),
    [products, cartData, fetchCartData, addToCart, deleteFromCart],
  );

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export default ProductsProvider;
