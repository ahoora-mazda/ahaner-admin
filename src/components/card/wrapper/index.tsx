import React from "react";
import { CardWrapperProps } from "../../../types/card/wrapper";

const CardWrapper = ({
  children,
  title,
  classNames = "",
  action,
}: CardWrapperProps) => {
  return (
    <div
      className={`rounded-[7px] card-wrapper-shadow text-text ${classNames}`}
    >
      <div className="flex justify-between px-4">
        <div className="py-6">
          <h3 className="text-lg font-semibold	">{title}</h3>
        </div>
        {action ? action : <></>}
      </div>
      <div className="h-[1px] bg-inputBorder"></div>

      {children}
    </div>
  );
};

export default CardWrapper;
