import React, { ReactNode } from 'react';
import styles from './card.module.scss';
interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
