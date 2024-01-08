import styles from './layout.module.scss';
import Header from '@components/widget/header';
import MobileSideNav from '@components/widget/mobile-sidenav';
import SideNav from '@components/widget/sidenav';
import React, { Fragment, ReactNode, useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);
  return (
    <Fragment>
      <section>
        <Header openNav={() => setOpenMobileNav(true)} />
      </section>
      <section className={styles.layout__container}>
        {/* desktop sidebar */}
        <SideNav />
        {/* mobile sidebar */}
        <MobileSideNav
          openMobileNav={openMobileNav}
          setOpenMobileNav={() => setOpenMobileNav(false)}
        />
        {/* main content */}
        <main className={styles.layout__main__content}>
          <section className={styles.empty__layer}></section>
          <section className={styles.layout__main}>{children}</section>
        </main>
      </section>
    </Fragment>
  );
};
export default Layout;
