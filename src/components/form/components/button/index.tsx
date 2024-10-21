import React from "react";
import { BtnProps } from "../../../../types/form/btn";
import RingLoader from "react-spinners/RingLoader";

const Btn = ({
  text,
  onClick,
  classNames,
  rightIcon,
  leftIcon,
  loading,
  type,
  variant = "contained",
}: BtnProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`flex items-center gap-2  cursor-pointer rounded-lg disabled:opacity-60 ${
          variant === "contained"
            ? "bg-primary text-white"
            : "border border-primary bg-transparent"
        }	 ${classNames}`}
        disabled={loading}
        type={type || "button"}
      >
        {loading ? (
          <>
            {" "}
            <RingLoader size={"2rem"} color="#fff" />
          </>
        ) : (
          <>
            {rightIcon && rightIcon()}
            {text}
            {leftIcon && leftIcon()}
          </>
        )}
      </button>
    </>
  );
};

export default Btn;
