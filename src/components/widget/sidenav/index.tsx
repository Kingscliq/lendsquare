import { users } from '@assets/icons';
import SidebarMenuItem from '@components/elements/sidebar-menu-item';
import { useLocation, useNavigate } from 'react-router-dom';

const SideNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className={`bg-white pl-8 py-8 w-[380px] md:w-72 h-full hidden lg:flex flex-col justify-between fixed overflow-y-auto z-50 transition-all ease-in-out duration-300`}
    >
      <div>
        {/* <a href={appRoutes.WEBSITE} target="_blank" rel="noreferrer">
          <img src={logo} alt="light logo" />
        </a> */}
      </div>
      <aside className="mt-24">
        <div className="mb-2">
          <SidebarMenuItem
            title="Dashboard"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={users}
            baseIcon={users}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="Dashboard"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={users}
            baseIcon={users}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="Dashboard"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={users}
            baseIcon={users}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="Dashboard"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={users}
            baseIcon={users}
          />
        </div>
        <div className="mb-2">
          <SidebarMenuItem
            title="Dashboard"
            active={['/'].includes(location?.pathname)}
            url="/"
            activeIcon={users}
            baseIcon={users}
          />
        </div>
      </aside>
    </div>
  );
};

export default SideNav;
