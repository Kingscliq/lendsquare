import styles from './badge.module.scss';

export interface StatusStyleProps {
  [key: string]: string;
}

interface BadgeProps {
  text: string;
  status: string;
}

const statusStyles: StatusStyleProps = {
  active: styles.active,
  inactive: styles.inactive,
  pending: styles.pending,
  blacklisted: styles.blacklisted,
};

const Badge: React.FC<BadgeProps> = ({ text, status }) => {
  return (
    <button className={`${styles.badge} ${statusStyles[status]}`}>
      {text}
    </button>
  );
};

export default Badge;
