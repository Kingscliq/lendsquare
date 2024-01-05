import { Link } from 'react-router-dom';
import React from 'react';

interface SideBarMenuItemProps {
  title: string;
  url: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  activeIcon: string | any; // any type is assigned for static image
  baseIcon: string | any; // any type is assigned for static image
  active?: boolean;
  showNav?: boolean;
  optionalIcon?: string;
}

const SidebarMenuItem: React.FC<SideBarMenuItemProps> = ({
  active,
  baseIcon,
  activeIcon,
  url,
  title,
  className,
  onClick,
  optionalIcon,
}) => {
  return (
    <Link to={url || '/'}>
      <div className="flex items-center justify-between hover:cursor-pointer">
        <div
          className={[
            'flex w-full transition-all duration-500 hover:cursor-pointer ease-in-out items-center cursor-pointer hover:bg-neutral/5 hover:font-medium hover:border-r-4 border-r-[#82C600] rounded-sm',
            `${
              active
                ? 'font-medium border-r-4 border-r-[#82C600]'
                : 'font-normal text-gray-400'
            } `,
            className,
          ].join(' ')}
          onClick={onClick}
          title={title}
        >
          <div
            className={[
              'flex w-2/3 transition-all duration-500 ease-in-out items-center cursor-pointer  border-r-[#82C600] px-4 py-3 rounded-sm',
              `${
                active
                  ? 'font-medium text-white bg-primary hover:bg-primary/90'
                  : 'font-normal text-gray-400 hover:bg-neutral/5 hover:font-medium'
              } `,
            ].join(' ')}
          >
            {active ? (
              <div className={['flex items-center justify-center '].join(' ')}>
                {/* {activeIcon} */}
                <img
                  src={activeIcon}
                  alt="Active Icon"
                  height={16}
                  width={16}
                />
              </div>
            ) : (
              <div className={['flex items-center justify-center'].join(' ')}>
                {/* {baseIcon} */}
                <img src={baseIcon} alt="Base Icon" height={16} width={16} />
              </div>
            )}
            <div className="ml-3 transition-all text-sm">{title}</div>
          </div>

          {active && (
            <div className="rounded-bl-lg rounded-tl-lg bg-secondary"></div>
          )}

          {optionalIcon && (
            <div className="ml-4">
              <img src={optionalIcon} alt="icon" />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default SidebarMenuItem;
