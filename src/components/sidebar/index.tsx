import { Button, Tooltip } from "antd";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Power, User, UserCircle } from "tabler-icons-react";
import { Menuitems } from "../../constants/menuItems";
import { logout } from "../../features/user";
import { usePost } from "../../hooks";
import useScreenBreakpoint from "../../hooks/useScreenBreakpoint";
import { RootState } from "../../store";
import Loading from "../loading";
import Menu from "../menu";
import { usePermission } from "../../hooks/usePermission";

const Sidebar = () => {
  const drawer = useSelector((state: RootState) => state.themeReducer.drawer);
  const breakPoint = useScreenBreakpoint();
  const variants = {
    open: { width: 270, maxWidth: 270 },
    closed: { width: 0, maxWidth: 0 },
  };
  const { check } = usePermission();
  const dispatch = useDispatch();
  const { fullName, avatar } = useSelector(
    (state: RootState) => state.userReducer
  );
  const [, , send, loading] = usePost({
    route: "/admin/logout",
    redirect: {
      status: true,
      action: () => {
        dispatch(logout());
      },
    },
  });
  if (loading.send) {
    return <Loading />;
  }
  return (
    <motion.div
      className={`fixed top-0 z-[1000] bg-white right-0 overflow-hidden w-[270px] border-borderSidebar border-l min-h-screen  pt-[30px]`}
      animate={drawer ? "open" : "closed"}
      initial={{ width: 0 }}
      variants={variants}
    >
      <div className="px-[21px]">
        <div className="flex gap-2 pb-8">
          {drawer ? (
            <img
              src={require("../../assets/images/logo/logo.png")}
              alt=""
              className="h-[150px] w-full object-contain"
            />
          ) : (
            <img
              className="h-[50px] object-contain"
              src={require("../../assets/images/logo/logo.png")}
              alt=""
            />
          )}
        </div>
        <Menu items={Menuitems} />

        {drawer && (
          <>
            <div className="p-4  bg-light rounded-lg 	flex items-center justify-between gap-4">
              <div className="w-10 h-10 flex items-center justify-center">
                {avatar ? (
                  <img
                    src={avatar}
                    alt=""
                    className="w-[30px] h-[30px] rounded-full"
                  />
                ) : (
                  <UserCircle size={"2rem"} className="text-primary" />
                )}
              </div>
              <div>
                <p className="font-semibold	text-sm whitespace-nowrap	">
                  {fullName}
                </p>
                {/* <p className="font-normal	text-xs	">برنامه نویس</p> */}
              </div>
              <Tooltip title="خروج از سیستم" trigger={["hover", "focus"]}>
                <Button
                  className="border-none shadow-none !p-0"
                  onClick={() => send({})}
                >
                  <Power color="#5D87FF" />
                </Button>
              </Tooltip>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Sidebar;
