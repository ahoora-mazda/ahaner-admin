import { useNavigate } from "react-router-dom";
import Btn from "../../components/form/components/button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-full">
      <div>
        <img
          src={require("../../assets/images/vector/404.png")}
          alt="404"
          width={"500px"}
        />
        <h3 className="text-center">صفحه مورد نظر یافت نشد!</h3>
        <div className="flex items-center justify-center">
          <Btn
            classNames="px-4 py-1"
            text={"بازگشت"}
            onClick={() => navigate(-1)}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
