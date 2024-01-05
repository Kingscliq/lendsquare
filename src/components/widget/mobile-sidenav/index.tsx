import { logo } from '@assets/icons';

import { useLocation, useNavigate } from 'react-router-dom';
import styles from './mobile-nav.module.scss';
import SidebarMenuItem from '@components/elements/sidebar-menu-item';

interface MobileSideNavProps {
  openMobileNav: boolean;
  setOpenMobileNav: () => void;
}

const MobileSideNav: React.FC<MobileSideNavProps> = ({
  openMobileNav,
  setOpenMobileNav,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`${styles.mobileNav} ${
          openMobileNav ? 'isOpen' : 'isClosed'
        }`}
      >
        <div>
          <img src={logo} alt="light logo" />
        </div>

        <aside className="mt-10">
          <SidebarMenuItem
            onClick={setOpenMobileNav}
            title="FAQ"
            active={location.pathname === '/faq'}
            url="/faq"
            activeIcon={undefined}
            baseIcon={undefined} // activeIcon={helpActive}
            // baseIcon={helpBase}
          />
          Hello
        </aside>
      </div>

      {/* overlay */}
      {openMobileNav && (
        <div
          onClick={setOpenMobileNav}
          className="h-full w-full z-20 bg-dark/50 fixed top-0 left-0 bottom-0"
        ></div>
      )}
    </>
  );
};

export default MobileSideNav;
