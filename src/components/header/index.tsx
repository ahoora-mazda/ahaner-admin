import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Calendar, Menu2 } from "tabler-icons-react";
import { toggle } from "../../features/theme";
import { now } from "../../utils/function";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleToggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
    dispatch(toggle());
  };

  const controls = useAnimation();
  useEffect(() => {
    const close = () => {
      setDrawerOpen(false);
    };
    close();
  }, [pathname]);

  useEffect(() => {
    if (isDrawerOpen) {
      controls.start({ x: 0, transition: { duration: 0.2, ease: "easeOut" } });
    } else {
      controls.start({
        x: "100%",
        transition: { duration: 0.2, ease: "easeOut" },
      });
    }
  }, [isDrawerOpen, controls]);
  return (
    <nav className="flex mb-4 justify-between">
      <div className="flex items-center gap-4">
        <button
          className="block md:hidden"
          onClick={() => {
            setDrawerOpen(prev => !prev);
            dispatch(toggle());
          }}
        >
          <Menu2 />
        </button>
        <h3 className="text-xl font-semibold">خوش آمدید!</h3>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Calendar />
          <p className="text-sm">{now()}</p>
        </div>
      </div>

      {isDrawerOpen && (
        <motion.div
          className="modal-backdrop"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
          }}
          onClick={handleToggleDrawer}
        />
      )}
    </nav>
  );
};

export default Header;
