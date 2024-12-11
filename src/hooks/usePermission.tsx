import { useSelector } from "react-redux";
import { RootState } from "../store";

export const usePermission = () => {
  const { permissions } = useSelector((state: RootState) => {
    return state.userReducer;
  });
  const check = (permission: string | string[]) => {
    let isAccess = false;

    if (Array.isArray(permission)) {
      permission.forEach((ele) => {
        if (permissions?.includes(ele)) {
          isAccess = true;
        }
      });
    } else {
      if (permissions?.includes(permission)) {
        isAccess = true;
      }
    }
    return isAccess;
  };

  return {
    check,
  };
};
