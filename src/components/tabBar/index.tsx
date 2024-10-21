import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, Home, User, UserCheck, Wallet } from "tabler-icons-react";
const TabBar = () => {
  const { pathname } = useLocation();
  const check = (route: string) => {
    return route === pathname ? "#5D87FF" : "#EAEFF4";
  };
  const elements = [
    {
      icon: <Home color={check("/")} />,
      title: "خانه",
      to: "/",
    },
    {
      icon: <Wallet color={check("/facilities")} />,
      title: "تسهیلات",
      to: "/facilities",
    },
    {
      icon: <Bell color={check("/notifications")} />,
      title: "اعلانات",
      to: "/notifications",
    },
    {
      icon: <User color={check("/profile")} />,
      title: "پروفایل",
      to: "/profile",
    },
  ];

  return (
    <div className="fixed w-[calc(100%)] flex items-center justify-between  bottom-[0] bg-white border   tab-bar-box-shadow py-2 rounded-tr-2xl rounded-tl-2xl px-[10px]">
      {elements.map((ele, key) => {
        return (
          <Link
            to={ele.to}
            key={key}
            className="flex items-center flex-col justify-center gap-1"
          >
            {ele.icon}
            <p className="text-sm text-text">{ele.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default TabBar;
