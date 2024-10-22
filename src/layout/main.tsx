import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import Loading from "../components/loading";
import Sidebar from "../components/sidebar";
import TabBar from "../components/tabBar";
import { setTrue } from "../features/isLogin";
import { setProfile } from "../features/user";
import useScreenBreakpoint from "../hooks/useScreenBreakpoint";
import { API } from "../server";
import { RootState } from "../store";
interface Props {
  children: React.ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
  const drawer = useSelector((state: RootState) => state.themeReducer.drawer);
  const roleOne = useSelector((state: RootState) => state.userReducer.roleOne);
  const breakPoint = useScreenBreakpoint();

  const variants = {
    open: {
      marginRight: breakPoint === "sm" || breakPoint === "md" ? 0 : 270,
    },
    closed: {
      marginRight: breakPoint === "sm" || breakPoint === "md" ? 0 : 87,
    },
  };
  const { status } = useSelector((state: RootState) => {
    return state.isLogin;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    check();
  }, []);

  const sortRoles = (roles: any, permissions: any) => {
    let arr: any[] = [];
    permissions.forEach((ele: any) => {
      arr.push(ele.title_en);
    });
    roles.forEach((ele: any) => {
      ele.permissions.forEach((p: any) => {
        arr.push(p.title_en);
      });
    });
    return arr;
  };

  const check = async () => {
    try {
      const { data } = await API.get(`/admin/profile`);
      dispatch(setTrue());

      dispatch(
        setProfile({
          fullName: data?.name,
        })
      );
    } catch (error) {
      dispatch(setTrue());
    }
  };

  if (!status) {
    return <Loading />;
  }
  return (
    <div className="min-h-screen pb-[66px] ">
      <Sidebar />
      <motion.div
        animate={drawer ? "open" : "closed"}
        variants={variants}
        className={`py-[24px] px-[20px] md:px-[30px] ${
          breakPoint === "sm" || breakPoint === "md" ? "mr-0" : "mr-[270px]"
        } `}
      >
        <Header />
        <div className="max-w-[1200px] mx-auto">{children}</div>
      </motion.div>
    </div>
  );
};

export default MainLayout;
