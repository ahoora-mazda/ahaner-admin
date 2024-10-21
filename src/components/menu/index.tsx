import React, { useState } from "react";
import { MenuitemProps } from "../../types/menuItem";
import { ChevronDown } from "tabler-icons-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Link, useNavigate } from "react-router-dom";
import { usePermission } from "../../hooks/usePermission";

const Menu = ({ items }: { items: MenuitemProps[] }) => {
  const [selected, setSelected] = useState<number>(0);
  const drawer = useSelector((state: RootState) => state.themeReducer.drawer);
  const { id, roleOne } = useSelector((state: RootState) => state.userReducer);
  const navigate = useNavigate();
  const { check } = usePermission();
  const showMenu = {
    open: {
      height: "auto",
    },
    close: {
      height: 0,
    },
  };
  return (
    <div className="h-[calc(100vh-300px)] overflow-y-scroll custom-scrollbar">
      {items.map((item, key) => {
        if (item.navlabel) {
          return (
            <div key={key} className="mt-6 pb-1">
              <h4 className="font-bold	text-xs	">{item.subheader}</h4>
            </div>
          );
        } else {
          return (
            <div key={key} className="">
              <div
                onClick={() => {
                  if (!item?.children && item.href) {
                    navigate(item.href);
                  } else {
                    selected !== (item.id ? +item.id : false)
                      ? setSelected(item.id ? +item?.id : 0)
                      : setSelected(0);
                  }
                }}
                className="group flex px-2 py-3 items-center justify-between rounded-[7px] hover:bg-info cursor-pointer"
              >
                <div className="flex gap-2 items-center">
                  <item.icon
                    className="text-text group-hover:text-primary"
                    size="1.3rem"
                  />
                  {drawer && (
                    <h6 className="text-sm font-normal group-hover:text-primary">
                      {item.title}
                    </h6>
                  )}
                </div>

                {item.children && drawer ? (
                  <>
                    <ChevronDown size={"1rem"} className="text-text" />
                  </>
                ) : (
                  <></>
                )}
              </div>
              <motion.div
                animate={
                  selected === (item.id ? +item.id : false) ? "open" : "close"
                }
                variants={showMenu}
                className="overflow-hidden h-0 mr-3"
              >
                {item?.children?.map(child => {
                  return (
                    <Link
                      to={child.href || "/"}
                      key={child.id}
                      className="flex px-2 py-3 gap-2 group cursor-pointer"
                    >
                      <child.icon
                        size="1rem"
                        className="group-hover:text-primary"
                      />
                      <p className="text-sm	group-hover:text-primary">
                        {child.title}
                      </p>
                    </Link>
                  );
                })}
              </motion.div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Menu;
