import { useSelector } from "react-redux";
import { RootState } from "../store";

export const usePermission = () => {
  const { role } = useSelector((state: RootState) => {
    return state.userReducer;
  });
  const check = (permission: string | string[]) => {
    return true;
    // let isAccess = false;

    // if (Array.isArray(permission)) {
    //   permission.forEach(ele => {
    //     if (role?.includes(ele)) {
    //       isAccess = true;
    //     }
    //   });
    // } else {
    //   if (role?.includes(permission)) {
    //     isAccess = true;
    //   }
    // }
    // return isAccess;
  };

  return {
    check,
  };
};
