import React from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book I have ever wrote',
  },
  {
    id: 'p2',
    price: 5,
    title: 'My second Book',
    description: 'The second book I have ever wrote',
  },
  {
    id: 'p3',
    price: 4,
    title: 'My third Book',
    description: 'The third book I have ever wrote',
  },
];

function Products() {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
}

export default Products;
