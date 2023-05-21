import styles from './Carousel.module.scss';
const Carousel = ({children, handleNext, handlePrevious }) => {
  return (
    <>
      <div className={styles.slider}>
        <button
          className={`${styles.slide_arrow} ${styles.prev_btn}`}
          onClick={handlePrevious}
        >
          <span>&#8249;</span>
        </button>
        <button
          className={`${styles.slide_arrow} ${styles.next_btn}`}
          onClick={handleNext}
        >
          <span>&#8250;</span>
        </button>
        <ul className={styles.slider_container}>{children}</ul>
      </div>
    </>
  );
};

export default Carousel;
