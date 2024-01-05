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
import { routes } from '@components/router/routes';

const SideNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.sidenav}>
      <div>
        <a href={routes.HOME} target="_blank" rel="noreferrer">
          <img src={logo} alt="light logo" />
        </a>
      </div>
      <aside className="mt-24">
        <h3 className={styles.link__heading}>Customers</h3>
        <div className="mb-2">
          <SidebarMenuItem
            title="Users"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={users}
            baseIcon={users}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="Guarantors"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={gurarantor}
            baseIcon={gurarantor}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="Loans"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={loanRequest}
            baseIcon={loanRequest}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="Decision Models"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={decisionModels}
            baseIcon={decisionModels}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="Savings"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={users}
            baseIcon={users}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="Loan Requests"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={loanRequest}
            baseIcon={loanRequest}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="White Lists"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={whiteList}
            baseIcon={whiteList}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="Karma"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={karma}
            baseIcon={karma}
          />
        </div>

        <h3 className={styles.link__heading}>Businesses</h3>
        <div className="mb-2">
          <SidebarMenuItem
            title="Organisation"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={organisation}
            baseIcon={organisation}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="Loan Products"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={loanRequest}
            baseIcon={loanRequest}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="Fees and Charges"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={feesCharges}
            baseIcon={feesCharges}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="Transactions"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={transactions}
            baseIcon={transactions}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="Settlements"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={settlements}
            baseIcon={settlements}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="Reports"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={reports}
            baseIcon={reports}
          />
        </div>
        <h3 className={styles.link__heading}>Settings</h3>
        <div className="mb-2">
          <SidebarMenuItem
            title="Preferences"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={preferences}
            baseIcon={preferences}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="Fees and Pricing"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={feesPricing}
            baseIcon={feesPricing}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="Audit Logs"
            active={['/'].includes(location?.pathname)}
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
