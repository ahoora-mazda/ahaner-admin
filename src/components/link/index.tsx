import React from "react";
import { Link } from "react-router-dom";
import { LinkProps } from "../../types/link";

const CustomLink = ({ to, text, rightIcon }: LinkProps) => {
  return (
    <Link to={to}>
      {rightIcon && rightIcon()}
      <span className="text-sm font-normal	">{text}</span>
    </Link>
  );
};

export default CustomLink;
