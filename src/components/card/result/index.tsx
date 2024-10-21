import React from "react";
import { ResultCardProps } from "../../../types/card/result";

const ResultCard = ({ title, value, icon, classNames }: ResultCardProps) => {
  return (
    <div
      className={`p-6 rounded-lg	 flex items-center flex-col col-span-6 lg:col-span-1 md:col-span-2 ${classNames}`}
    >
      <img className="w-[50px] h-[50px]" src={icon} alt={title} />
      <p className="font-semibold	text-sm	mt-2">{title}</p>
      <p className="font-semibold text-xl	">{value}</p>
    </div>
  );
};

export default ResultCard;
