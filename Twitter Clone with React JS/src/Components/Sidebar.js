import React, { useState } from "react";
import TwLogo from "../img/TwitterLogo.svg";
import Sidebarlink from "./SidebarLink";

import {
  HomeIcon,
  ExploreIcon,
  NotificationIcon,
  MessageIcon,
  BookmarksIcon,
  ListIcon,
  ProfileIcon,
  MoreIcon,
} from "../img/icon";
import MainProfileBox from "./MainProfileBox";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notification",
    icon: NotificationIcon,
  },
  {
    name: "Message",
    icon: MessageIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "List",
    icon: ListIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

const Sidebar = () => {
  const [active, setActive] = useState("Home");
  const handleMenuItemClick = (name) => {
    setActive(name);
  };

  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between w-72 px-2">
      <div>
        <div className="flex items-center justify-center w-12 h-12 hover:bg-basis-lightBlue  rounded-full transition-colors color duration-500 ease-in-out ">
          <img src={TwLogo} alt="Twitter" className="w-9 h-9" />
        </div>

        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <Sidebarlink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>
        <button className="bg-basis-Blue hover:bg-basis-darkBlue text-white rounded-full py-3 px-8 w-11/12 shadow-lg  transition-colors color duration-500 ease-in-out">
          Tweet
        </button>
      </div>
      <nav>
        <MainProfileBox />
      </nav>
    </div>
  );
};
export default Sidebar;
