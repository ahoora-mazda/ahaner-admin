import React from "react";
import { InputProps } from "../../../../types/form/input";
import { motion } from "framer-motion";
interface Props {
  label?: string;

  error?: any;
  type?: "text" | "password" | "number";
  wrapperClassName?: string;
  optional?: boolean;
  readonly?: boolean;
  value: any;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}
const CardInput = ({
  label,
  error,
  type = "text",
  wrapperClassName = "",
  optional,
  readonly,
  value,
  onChange,
}: Props) => {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
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

      <input
        type="text"
        readOnly={readonly}
        className={`${
          error?.message ? "!border-red" : "border-borderSidebar"
        } border rounded-lg	px-4 py-3`}
        value={value}
        onChange={onChange}
      />
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

export default CardInput;
