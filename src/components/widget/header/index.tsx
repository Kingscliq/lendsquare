import { logo, notification } from '@assets/icons';
import { useAuth } from '@hooks/useAuth';
import { Avatar } from '@radix-ui/themes';

import styles from './header.module.scss';

const Header = ({ openNav }: any) => {
  const user = useAuth();

  const { user: person } = user;

  return (
    <nav>
      <section className={styles.header}>
        <div className={styles.menu}>
          <button onClick={openNav} className={styles.menu__btn}>
            menu
          </button>
          <div className={styles.menu__logo}>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div></div>
        <div className={styles.notification__container}>
          <div>
            <img src={notification} alt="" />
          </div>
          <div className="">
            <Avatar
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256"
              fallback="A"
              size={'4'}
              radius="full"
            />
            <div className="ml-3">
              <p className="text-[#444444]">{person?.username}</p>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Header;
