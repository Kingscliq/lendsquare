import React from 'react';
import styles from './dash-card.module.scss';

interface DashCardProps {
  icon: string;
  title: string;
  description: string;
  value: string;
}

const DashCard: React.FC<DashCardProps> = ({ icon, title, value }) => {
  return (
    <div className={styles.dash__card}>
      <div>
        <img src={icon} alt="Lendsqr Dash card" />
        {icon}
      </div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default DashCard;
