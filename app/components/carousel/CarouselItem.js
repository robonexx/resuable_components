import React from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';
// styles
import styles from './Carousel.module.scss';

const CarouselItem = ({ img, title, text }) => {
  const desktop = useMediaQuery(768);

  return (
    <AnimatePresence>
      <li className={styles.slide}>
        <motion.div
          className={styles.img_wrapper}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0, ease: 'easeInOut' }}
        >
          <Image
            className={styles.img}
            src={img}
            alt={title}
            width={400}
            height={400}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            x: -200,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.8, delay: 0, ease: 'easeInOut' }}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{
            opacity: 0,
            y: 200,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{ opacity: 0, y: 200 }}
          transition={{ duration: 1, delay: 0, ease: 'easeInOut' }}
        >
          {text}
        </motion.p>
      </li>
    </AnimatePresence>
  );
};

export default CarouselItem;
