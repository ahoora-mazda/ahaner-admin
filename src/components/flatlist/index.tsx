import React from "react";
interface Props {
  arr: any[];
  render: (item: any, key: number) => JSX.Element;
  classNames?: string;
}
const FlatList = ({ arr, render, classNames }: Props) => {
  return (
    <div className={classNames}>
      {arr.map((item, key) => render(item, key))}
    </div>
  );
};

export default FlatList;
