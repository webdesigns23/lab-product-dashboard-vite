import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {

  return (
    <div className={product.inStock? styles.inStock : styles.outOfStock}> 
      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      
      {/* TODO: Display product name */}
      <h2 className={styles.name}> {product.name} </h2>

      {/* TODO: Display product price */}
      <p className={styles.price}> {product.price} </p>

      {/* TODO: Show if the product is in stock or out of stock */}
      <p> {product.inStock ? "In Stock!" : "Out Of Stock!"}</p>
      
    </div>
  );
};

export default ProductCard;
