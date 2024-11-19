import React from "react";
import "./style.css";
interface Props {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: Props) => {
  return (
    <div className="h-screen items-stretch grid grid-cols-12">
      <div className="bg-bgAuth flex-1 lg:flex justify-center items-center xl:col-span-8 md:col-span-7 hidden">
        <img
          className="w-[600px] object-contain h-screen hidden  lg:block"
          alt=""
          src={require("../assets/images/vector/login.png")}
        />
      </div>
      <div className="flex items-center xl:col-span-4 lg:col-span-5 col-span-12 justify-center ">
        <div className="p-8">
          <div className="flex items-center justify-center">
            <img
              alt=""
              src={require("../assets/images/logo/logo.svg").default}
              className="w-[200px] object-contain mb-2"
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
