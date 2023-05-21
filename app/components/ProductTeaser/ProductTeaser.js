'use client'
import { useEffect, useState } from 'react';
import { ProductContainer } from './styled';
import ProductCard from './ProductCard';
import { products } from '../../../data/data';

const ProductTeaser = () => {
  const [data, setData] = useState(products);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const showNextProduct = () => {
      if (currentIndex < data.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    };

    setTimeout(() => {
      showNextProduct();
    }, 5000);
  });

  return (
    <ProductContainer>
      {data.map((p, idx) => {
        if (idx === currentIndex) {
          return (
            <div key={p.id}>
              <ProductCard {...p} />
            </div>
          );
        }
      })}
    </ProductContainer>
  );
};

export default ProductTeaser;
