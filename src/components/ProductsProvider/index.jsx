import { useState, useEffect } from 'react';
import ProductsContext from '../../context';
import axios from 'axios';

const BASE_URL = 'https://69c39e4fb780a9ba03e75a88.mockapi.io';

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);

  // api /productsData
  const fetchProducts = async () => {
    const response = await axios.get(`${BASE_URL}/productsData`);
    setProducts(response.data);
  };

  // api /cartData
  const fetchCartData = async () => {
    const response = await axios.get(`${BASE_URL}/cartData`);
    setCartData(response.data);
  };

  const addToCart = async (product) => {
    const response = await axios.post(`${BASE_URL}/cartData`, product);
    setCartData((prev) => [...prev, response.data]);
  };

  const deleteFromCart = async (productId) => {
    await axios.delete(`${BASE_URL}/cartData/${productId}`);
    setCartData((prev) => prev.filter((item) => item.id !== productId));
  };

  useEffect(() => {
    fetchProducts();
    fetchCartData();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, cartData, fetchCartData, addToCart, deleteFromCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
