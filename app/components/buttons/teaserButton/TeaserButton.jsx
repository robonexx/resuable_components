import { Btn } from './styled';
import ShopIcon from '../../../../public/assets/icons/akar-icons_cart.svg';
import Image from 'next/image';
import styles from './button.module.scss'

const TeaserButton = () => {
  return (
    <Btn>
      <Image src={ShopIcon} alt='shopping card svg'
        className={styles.img} />
      <h4>Add to cart</h4>
    </Btn>
  );
};

export default TeaserButton;
