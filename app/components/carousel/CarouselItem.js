import React from 'react';
import Image from 'next/image';
import { motion } 'framer-motion'
import styles from './Carousel.module.scss';

const CarouselItem = ({ img, title, text }) => {
  return (
    <li className={styles.slide}>
      <motion.div className={styles.img_wrapper}
        initial={{
          opacity: 0, width: 0}}
         animate={{
           opacity: 1,
           width: desktop ? '80vw' : '40vw',
           height: desktop ? '40vh' : '40vh'
          }}
          transition={{duration: 0.4, delay: 2, ease: 'easeInOut'}}
      >
        <Image
          className={styles.img}
          src={img}
          alt={title}
          fill
          style={{objectFit: 'cover', objectPosition: 'top center', zIndex: '-1'}}
        />
        </motion.div>
      <h2>{title}</h2>
      <p>{text}</p>
    </li>
  );
};

export default CarouselItem;
