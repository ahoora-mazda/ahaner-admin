import React from "react";
import "./style.scss";
interface Props {
  text: string;
  variant: "success" | "error";
}
const Badge = ({ text, variant }: Props) => {
  return (
    <div className="badge-component">
      <span className={`rounded-[4px] ${variant}`}>{text}</span>
    </div>
  );
};

export default Badge;
