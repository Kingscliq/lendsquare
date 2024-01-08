import {
  audit,
  dashboard,
  decisionModels,
  feesCharges,
  feesPricing,
  gurarantor,
  karma,
  loanRequest,
  logo,
  organisation,
  preferences,
  reports,
  settlements,
  transactions,
  users,
  whiteList,
} from '@assets/icons';

import { useLocation, useNavigate } from 'react-router-dom';
import styles from './mobile-nav.module.scss';
import SidebarMenuItem from '@components/elements/sidebar-menu-item';
import SideNav from '../sidenav';

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
          openMobileNav ? styles.isOpen : styles.isClosed
        }`}
      >
        <div className={styles.mobile__nav__logo}>
          <img src={logo} alt="light logo" />
        </div>
        <div className={styles.dash__container}>
          <SidebarMenuItem
            title="Dashboard"
            url="/"
            activeIcon={dashboard}
            baseIcon={dashboard}
          />
        </div>
        <aside className="mt-24">
          <h3 className={styles.link__heading}>Customers</h3>
          <div className="">
            <SidebarMenuItem
              title="Users"
              active={['/'].includes(location?.pathname)}
              url="/"
              activeIcon={users}
              baseIcon={users}
            />
          </div>
          <div className="">
            <SidebarMenuItem
              title="Guarantors"
              active={['/customers/karma'].includes(location?.pathname)}
              url="/"
              activeIcon={gurarantor}
              baseIcon={gurarantor}
            />
          </div>
          <div className="">
            <SidebarMenuItem
              title="Loans"
              active={['/customers/loans'].includes(location?.pathname)}
              url="/"
              activeIcon={loanRequest}
              baseIcon={loanRequest}
            />
          </div>
          <div className="">
            <SidebarMenuItem
              title="Decision Models"
              active={['/customers/decision-models'].includes(
                location?.pathname
              )}
              url="/"
              activeIcon={decisionModels}
              baseIcon={decisionModels}
            />
          </div>
          <div className="">
            <SidebarMenuItem
              title="Savings"
              active={['/customers/savings'].includes(location?.pathname)}
              url="/"
              activeIcon={users}
              baseIcon={users}
            />
          </div>
          <div className="">
            <SidebarMenuItem
              title="Loan Requests"
              active={['/customers/loan-requests'].includes(location?.pathname)}
              url="/"
              activeIcon={loanRequest}
              baseIcon={loanRequest}
            />
          </div>
          <div className="">
            <SidebarMenuItem
              title="White Lists"
              active={['/customers/whitelist'].includes(location?.pathname)}
              url="/"
              activeIcon={whiteList}
              baseIcon={whiteList}
            />
          </div>
          <div className={styles.link__divider}>
            <SidebarMenuItem
              title="Karma"
              active={['/customers/karma'].includes(location?.pathname)}
              url="/"
              activeIcon={karma}
              baseIcon={karma}
            />
          </div>

          <h3 className={styles.link__heading}>Businesses</h3>
          <div className="">
            <SidebarMenuItem
              title="Organisation"
              active={['businesses/organisations'].includes(location?.pathname)}
              url="/"
              activeIcon={organisation}
              baseIcon={organisation}
            />
          </div>
          <div className="">
            <SidebarMenuItem
              title="Loan Products"
              active={['/businesses/loan-products'].includes(
                location?.pathname
              )}
              url="/"
              activeIcon={loanRequest}
              baseIcon={loanRequest}
            />
          </div>
          <div className="">
            <SidebarMenuItem
              title="Fees and Charges"
              active={['/busineses/fees-charges'].includes(location?.pathname)}
              url="/"
              activeIcon={feesCharges}
              baseIcon={feesCharges}
            />
          </div>
          <div className="">
            <SidebarMenuItem
              title="Transactions"
              active={['/businesses/transactions'].includes(location?.pathname)}
              url="/"
              activeIcon={transactions}
              baseIcon={transactions}
            />
          </div>
          <div className="">
            <SidebarMenuItem
              title="Settlements"
              active={['businesses/settlement'].includes(location?.pathname)}
              url="/"
              activeIcon={settlements}
              baseIcon={settlements}
            />
          </div>
          <div className={styles.link__divider}>
            <SidebarMenuItem
              title="Reports"
              active={['/businesses/reports'].includes(location?.pathname)}
              url="/"
              activeIcon={reports}
              baseIcon={reports}
            />
          </div>
          <h3 className={styles.link__heading}>Settings</h3>
          <div className="">
            <SidebarMenuItem
              title="Preferences"
              active={['/settings/preferences'].includes(location?.pathname)}
              url="/"
              activeIcon={preferences}
              baseIcon={preferences}
            />
          </div>
          <div className="">
            <SidebarMenuItem
              title="Fees and Pricing"
              active={['/settings/fees-pricing'].includes(location?.pathname)}
              url="/"
              activeIcon={feesPricing}
              baseIcon={feesPricing}
            />
          </div>
          <div className="">
            <SidebarMenuItem
              title="Audit Logs"
              active={['/settings/audit-logs'].includes(location?.pathname)}
              url="/"
              activeIcon={audit}
              baseIcon={audit}
            />
          </div>
        </aside>
      </div>

      {/* overlay */}
      {openMobileNav && (
        <div onClick={setOpenMobileNav} className={styles.over__lay}>
          <div className={styles.close__icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 50 50"
              fill="#545f7d"
            >
              <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSideNav;
