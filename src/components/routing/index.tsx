import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { RootState } from "../../store";
import { route } from "../../types/route";
import { usePermission } from "../../hooks/usePermission";
import MainLayout from "../../layout/main";
import NotFound from "../../pages/error/notFound";
interface Props {
  routes: route[];
  user?: string;
  noUser?: string;
}
const Routing = ({ routes = [], user = "/", noUser = "/login" }: Props) => {
  const { check } = usePermission();
  const { token } = useSelector((state: RootState) => {
    return state.userReducer;
  });
  const isLogin = token ? true : false;
  return (
    <Routes>
      {routes.map((route: route, i) => {
        const routeRender = (
          <Route
            path={route.path}
            key={i}
            element={
              route.user ? (
                isLogin ? (
                  <route.layout props={route}>
                    <route.component props={route} />
                  </route.layout>
                ) : (
                  <Navigate to={noUser} replace />
                )
              ) : isLogin ? (
                <Navigate to={user} replace />
              ) : (
                <route.layout props={route}>
                  <route.component props={route} />
                </route.layout>
              )
            }
          />
        );
        if (route.accessKey) {
          if (check(route.accessKey)) {
            return routeRender;
          }
          return <></>;
        } else {
          return routeRender;
        }
      })}
      <Route
        path="*"
        key={"404"}
        element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default Routing;
