import React from 'react';
import styles from './popover.module.scss';

interface PopoverItemProps {
  label: string;
  icon: string;
}
const PopoverItem: React.FC<PopoverItemProps> = ({ icon, label }) => {
  return (
    <section className={styles.popover__item}>
      <div>
        <img src={icon} alt={'Lendsqr icon'} />
      </div>
      <div>{label}</div>
    </section>
  );
};

export default PopoverItem;
