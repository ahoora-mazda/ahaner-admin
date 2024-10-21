import { useSelector } from "react-redux";
import { RootState } from "../../store";
import UserDashboard from "./user";
import AdminDashboard from "./admin";

const Dashboard = () => {
  const roleOne = useSelector((state: RootState) => state.userReducer.roleOne);
  if (roleOne === "subscriber") {
    return <UserDashboard />;
  }
  return <AdminDashboard />;
};

export default Dashboard;
