import { motion } from "framer-motion";
import React from "react";

export interface Props {
  label?: string;
  error?: any;
  wrapperClassName?: string;
  optional?: boolean;
  id?: string;
  onChange?: (e: any) => void;
  value: any;
}
const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};
const SvgInput: React.FC<Props> = ({
  label,
  error,
  wrapperClassName = "",
  optional,
  id,
  onChange = e => {},
  value,
}) => {
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

      <textarea
        onChange={onChange}
        id={id}
        className={`${
          error?.message ? "!border-red" : "border-borderSidebar"
        } border rounded-lg	px-4 py-3`}
        rows={5}
        value={value}
      />
      <div dangerouslySetInnerHTML={{ __html: value }}></div>
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

export default SvgInput;
