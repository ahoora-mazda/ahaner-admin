import React from "react";
import { Header } from "../../../types/table";
import { Select } from "antd";
import { useQuery } from "../../../hooks/useQuery";
interface Props {
  head: Header;
}
const SelectHead = ({ head }: Props) => {
  const { changeObj } = useQuery();
  return (
    <Select
      showSearch
      allowClear
      className="mt-2 !h-[42px] !max-w-[120px]"
      placeholder={"انتخاب کنید"}
      options={head.selectOptions || []}
      onChange={value => changeObj(head.key, value)}
    ></Select>
  );
};

export default SelectHead;
