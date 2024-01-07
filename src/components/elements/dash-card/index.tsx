import React from 'react';
import styles from './dash-card.module.scss';
import Card from '../card';

interface DashCardProps {
  icon: string;
  title?: string;
  value?: string;
  className?: string;
}

const DashCard: React.FC<DashCardProps> = ({
  icon,
  title,
  value,
  className,
}) => {
  return (
    <Card className={className}>
      <div className={styles.dash__card}>
        <div>
          <img src={icon} alt="Lendsqr Dash card" />
        </div>
        <div className={styles.dash__text}>
          <p>{title}</p>
        </div>
        <div>
          <h2 className={styles.dash__value}>{value}</h2>
        </div>
      </div>
    </Card>
  );
};

export default DashCard;
