import React from "react";
import { InputProps } from "../../../../types/form/input";
import { motion } from "framer-motion";
import { InfoCircle } from "tabler-icons-react";
const Input = ({
  label,
  props,
  error,
  type = "text",
  wrapperClassName = "",
  optional,
  readonly,
  id,
  onEnter,
  onChange = (e) => {},
  help,
}: InputProps) => {
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
        type={type}
        id={id}
        onChange={(e) => onChange(e)}
        {...props}
        readOnly={readonly}
        className={`${
          error?.message ? "!border-red" : "border-borderSidebar"
        } border rounded-lg	px-4 py-3`}
        onKeyDown={(e) => {
          if (e.code === "Enter" && onEnter) {
            onEnter();
          }
        }}
      />
      {help && (
        <small className="flex items-center gap-2 mt-2">
          <InfoCircle size={"1rem"} />
          {help}
        </small>
      )}

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

export default Input;
