import React from 'react';
import classes from './Card.module.css';

function Card({ className, children }) {
  return (
    <section className={`${classes.card} ${className || ''}`}>
      {children}
    </section>
  );
}

export default Card;
