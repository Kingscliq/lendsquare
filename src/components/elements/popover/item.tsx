import React from 'react';
import styles from './popover.module.scss';

interface PopoverItemProps {
  label: string;
  icon: string;
  onClick?: () => void;
}

const PopoverItem: React.FC<PopoverItemProps> = ({ icon, label, onClick }) => {
  return (
    <section className={styles.popover__item} onClick={onClick}>
      <div>
        <img src={icon} alt={'Lendsqr icon'} />
      </div>
      <div>{label}</div>
    </section>
  );
};

export default PopoverItem;
