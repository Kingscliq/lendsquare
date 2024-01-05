import {
  audit,
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
import SidebarMenuItem from '@components/elements/sidebar-menu-item';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './sidenav.module.scss';

const SideNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.sidenav}>
      {/* <div>
        <a href={routes.HOME} target="_blank" rel="noreferrer">
          <img src={logo} alt="light logo" />
        </a>
      </div> */}
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
            active={['/customers/decision-models'].includes(location?.pathname)}
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
            active={['/businesses/loan-products'].includes(location?.pathname)}
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
  );
};

export default SideNav;
