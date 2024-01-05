import React from 'react';
import styles from './dash-card.module.scss';

interface DashCardProps {
  icon: string;
  title?: string;
  value?: string;
}

const DashCard: React.FC<DashCardProps> = ({ icon, title, value }) => {
  return (
    <div className={styles.dash__card}>
      <div>
        <img src={icon} alt="Lendsqr Dash card" />
      </div>
      <div>
        <p className={styles.dash__text}>{title}</p>
      </div>
      <div>
        <h2 className={styles.dash__value}>{value}</h2>
      </div>
    </div>
  );
};

export default DashCard;
