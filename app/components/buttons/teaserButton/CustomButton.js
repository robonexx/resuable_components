import { RuBtn } from './styled';

const CustomButton = ({ title, bgColor, icon }) => (
  <RuBtn bgcolor={bgColor}>
    {title}
    <img src={icon} alt='icon svg' />
  </RuBtn>
);

export default CustomButton;
