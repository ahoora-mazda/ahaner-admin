import React from "react";
import { ArrowDown, ArrowUp } from "tabler-icons-react";
import { useQuery } from "../../../hooks/useQuery";
import { Header } from "../../../types/table";
import SelectApiHead from "./SelectApiHead";
import SelectHead from "./selectHead";
import Sort from "./sort";
interface HeadCellProps {
  head: Header;
}
const HeadCell: React.FC<HeadCellProps> = ({ head }) => {
  const { searchParams, changeObj } = useQuery();
  const render = () => {
    switch (head.filterType) {
      case "input":
        return (
          <input
            onKeyDown={(x: React.KeyboardEvent<HTMLInputElement>) => {
              x?.key === "Enter" &&
                changeObj(
                  head.keyFilter || head.key,
                  x.currentTarget.value ? x.currentTarget.value : ""
                );
            }}
            defaultValue={searchParams
              .get(head.keyFilter || head.key)
              ?.toString()}
            className="border border-borderSidebar rounded-lg mt-2 py-2 px-4 max-w-[120px]"
          />
        );
      case "select":
        return <SelectHead head={head} />;
      case "selectApi":
        return <SelectApiHead head={head} />;
      default:
        return <div className="h-[42px] mt-2"></div>;
    }
  };
  return (
    <th className="font-semibold  ">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{head.title}</span>
          {head.sort && <Sort sort={head.sort} />}
        </div>
        {render()}
      </div>
    </th>
  );
};

export default HeadCell;
