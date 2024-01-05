import { logo } from '@assets/icons';

import { useLocation, useNavigate } from 'react-router-dom';
import styles from './mobile-nav.module.scss';

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
          {/* <div className="mb-2">
                <SidebarMenuItem
                  onClick={setOpenMobileNav}
                  title="Contact Us"
                  active={location.pathname === '/contact'}
                  url="/contact"
                  activeIcon={userActive}
                  baseIcon={profileIcon}
                />
              </div> */}
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
