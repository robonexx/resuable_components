import React from 'react';
import ProductTeaser from '../components/ProductTeaser/ProductTeaser';

//styles
import styles from './teaser.module.scss';

const page = () => {
  return (
    <div className={styles.teaser}>
      <h2>Teaser component</h2>
      <ProductTeaser />
    </div>
  );
};

export default page;
