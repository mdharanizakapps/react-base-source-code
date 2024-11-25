import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../ui/icon';
import { Button } from '../ui/button';
import { redirectToPage } from '../../utils/utils';

// Define a type for the menu items
interface MenuItem {
  name: string;
  path: string;
  iconName: string;
  isActive: boolean;
}

const Sidebar = () => {
  const [isSideBar, setIsSideBar] = useState(false);

  const [showLogout, setShowLogout] = useState(false); // State for the "Log Out" button

  const menuItems: MenuItem[] = [
    { name: 'Overview', path: '/dashboard', iconName: 'home', isActive: true },
    {
      name: 'Project Generator',
      path: '/projectgenerator',
      iconName: 'category',
      isActive: false,
    },
  ];

  const handleLogout = () => {
    redirectToPage('/login', false);
  };

  const sideMenuExpand = () => {
    setIsSideBar(!isSideBar);
  };

  return (
    <div className="">
      <div
        className={`h-[calc(100vh_-_0px)] transition-all duration-500 ${isSideBar ? 'w-20' : 'w-52'}`}
      >
        <nav className="h-full bg-[#2165F5] pt-6 px-4 pb-1.5">
          <img
            src={`${isSideBar ? 'src/assets/logo.svg' : '/src/assets/logo-ui-library.svg'}`}
          />
          <hr className="mt-2.5 " />
          <hr className="" />
          <ul className="space-y-3 mt-3">
            {menuItems.map((item, index) => (
              <NavLink
                key={`${index}- ${index}`}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? ' px-2 text-black bg-white flex items-center gap-2.5 p-2 rounded-sm hover:text-black text-body-12'
                    : 'text-white flex items-center gap-2.5 p-2 hover:bg-white hover:text-black rounded-sm text-body-12'
                }
              >
                <Icon
                  iconName={item.iconName}
                  className="h-6 w-6 flex items-center"
                />
                {!isSideBar && (
                  <span className="whitespace-nowrap">{item.name}</span>
                )}
              </NavLink>
            ))}
          </ul>
          <div className="fixed bottom-4">
            <div className="mt-auto flex items-center">
              <div className="px-2 user-info flex items-center mt-2.5 mb-7">
                <Icon iconName="userIcon" className="h-6 w-6 text-white" />

                <div
                  className={`flex gap-2 ml-2 ${isSideBar ? 'hidden' : 'block'}`}
                >
                  <span className="w-28 text-xs text-ellipsis overflow-hidden userDetail text-white">
                    user@gmail.com
                  </span>
                  <div onClick={() => setShowLogout(!showLogout)}>
                    <Icon
                      iconName="ellipsis"
                      className="h-4 w-4 flex items-center text-white cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
            {showLogout && (
              <div className="absolute bottom-16 right-4">
                <button
                  onClick={handleLogout}
                  className="text-xs bg-white text-[#2165F5] px-3 py-1 rounded-md"
                >
                  Log Out
                </button>
              </div>
            )}
            <Button
              variant={'icon'}
              size={'icon'}
              onClick={sideMenuExpand}
              className={` flex w-[21px] h-[21px] transition-all duration-500 justify-center items-center absolute right-[-11px] bg-white shadow-[0px_0px_10px_0px_#0000001A] p-1.5 rounded-[999px] bottom-2.5 
            ${isSideBar ? 'left-[52px]' : 'left-[180px]'}`}
            >
              <Icon
                iconName="chevronRight"
                className={`${isSideBar ? '' : 'rotate-180'}`}
              />
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;