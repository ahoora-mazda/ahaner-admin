import React from "react";
import { TopCardProps } from "../../../types/card/top";
import { Link } from "react-router-dom";
import { Circle } from "tabler-icons-react";

const TopCard = ({ title }: TopCardProps) => {
  return (
    <div className="flex bg-info pt-8 rounded-[12px] pr-6 pb-4 relative overflow-hidden">
      <div>
        <h3 className="text-2xl font-semibold		">{title}</h3>
        <div className="flex items-center gap-2 mt-3">
          <Link to={"/"}>خانه</Link>
          <Circle
            size="5"
            fill="textSecondary"
            fillOpacity={"0.6"}
            style={{ margin: "0 5px" }}
          />
          <p>{title}</p>
        </div>
      </div>
      <div className="absolute top-0 left-4">
        {/* <img
          className="w-[165px] h-[165px]"
          src={require("../../../assets/images/vector/ChatBc.webp")}
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default TopCard;
