import { ColorPicker } from "antd";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { DownOutlined } from "@ant-design/icons";
import "./style.scss";
interface Props {
  label?: string;
  error?: any;
  wrapperClassName?: string;
  optional?: boolean;
  onChange?: (e: any, color: string) => void;
  value: string;
}
const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};
const CustomColorPicker: React.FC<Props> = ({
  label,
  wrapperClassName,
  optional,
  value,
  onChange,
  error,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`flex flex-col ${wrapperClassName} `}>
      {label ? (
        <>
          <label className="text-sm	font-semibold mb-1 text-right">
            {label}
            {optional && (
              <span className="text-xs font-normal mx-1 text-primary">
                (اختیاری)
              </span>
            )}
          </label>
        </>
      ) : (
        <></>
      )}
      <ColorPicker
        defaultValue={value}
        open={open}
        onChange={onChange}
        onOpenChange={setOpen}
        showText={() => (
          <DownOutlined
            rotate={open ? 180 : 0}
            style={{
              color: "rgba(0, 0, 0, 0.25)",
            }}
          />
        )}
      />{" "}
      <motion.p
        animate={error ? "open" : "closed"}
        variants={variants}
        className="text-red text-xs mt-2"
      >
        {error?.message}
      </motion.p>
    </div>
  );
};

export default CustomColorPicker;
