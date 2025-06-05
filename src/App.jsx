import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ProductList from './components/ProductList';

 

function App() {
   // TODO: Define initial product data
    const sampleProducts = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
    { id: 4, name: 'Mouse', price: '$75', inStock: true },
    ]
  // TODO: Implement state to manage filtering
  const [stockFilter, setStockFilter] = useState('all');

  // TODO: Implement logic to filter products based on availability-use .filter method
  const productAvailability = sampleProducts.filter(product => {
    if (stockFilter === 'in stock'){
        return product.inStock;
    }
    if (stockFilter === 'out of stock'){
        return !product.inStock;
    }
    return stockFilter === 'all'; 
  })
  
  return (
    <Box component="section" sx={{ p: 2, border: '10px outset black' }}>
      <h1>{'Product Dashboard'}</h1>
      
      {/* TODO: Add buttons to allow filtering by availability */}
      <Button variant="contained" size="small" color="success" 
        onClick ={() => setStockFilter('in stock')}> In Stock </Button>   
      <Button variant="contained" size="small" color="error" 
        onClick ={() => setStockFilter('out of stock')}> Out of Stock </Button>
      <Button variant="contained" size="small" color="primary" 
        onClick ={() => setStockFilter('all')}> All Products </Button>  

      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products ={productAvailability}/>
      
    </Box>
  );
};

export default App;

