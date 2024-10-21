import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Routing from "./components/routing";
import { initial } from "./features/user";
import { routes } from "./router";
import { caching } from "./utils/function";
import { toast } from "react-toastify";

const App = () => {
  const dispatch = useDispatch();

  dispatch(initial());

  useEffect(() => {
    const handleOnline = () => {
      toast.success("اینترنت متصل است");
    };
    const handleOffline = () => {
      toast.error("اتصال اینترنت خود را چک کنید");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    caching();
  }, []);
  return <Routing user="/" routes={routes} />;
};

export default App;
