import React from "react";
import { ChangeEvent } from "react";
import { motion } from "framer-motion";
export interface Props {
  label?: string;
  props?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  error?: any;
  wrapperClassName?: string;
  optional?: boolean;
  readonly?: boolean;
  id?: string;
  onEnter?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const PriceInput = ({
  label,
  props,
  error,
  wrapperClassName = "",
  optional,
  readonly,
  id,
  onEnter,
  onChange = e => {},
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
        id={id}
        onChange={e => onChange(e)}
        {...props}
        readOnly={readonly}
        className={`${
          error?.message ? "!border-red" : "border-borderSidebar"
        } border rounded-lg	px-4 py-3`}
        onKeyDown={e => {
          if (e.code === "Enter" && onEnter) {
            onEnter();
          }
        }}
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

export default PriceInput;
