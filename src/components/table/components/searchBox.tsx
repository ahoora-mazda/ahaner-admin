import React, { useState } from "react";
import { useQuery } from "../../../hooks/useQuery";
import { Search } from "tabler-icons-react";
import { Header } from "../../../types/table";
interface SearchBoxProps {
  search: {
    key?: string;
  };
  headers: Header[];
}

const SearchBox: React.FC<SearchBoxProps> = ({
  search: { key = "search" },
  headers,
}) => {
  const { searchParams, changeObj } = useQuery();
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center gap-2  mt-2">
      <input
        onKeyDown={(x: React.KeyboardEvent<HTMLInputElement>) => {
          x?.key === "Enter" &&
            changeObj(key, x.currentTarget.value ? x.currentTarget.value : "");
        }}
        onChange={(e) => {
          if (e.target.value.length === 0) {
            changeObj(key, "");
          }
          setSearch(e.target.value);
        }}
        placeholder={
          "جستجو بر اساس " +
          headers
            .filter((head) => head.isSearchAble)
            .map((head) => head.title)
            .toString()
        }
        defaultValue={searchParams.get(key)?.toString()}
        className="border border-borderSidebar rounded-lg flex-1 py-2 px-4 text-xs"
      />
      <button
        onClick={() => {
          changeObj(key, search);
        }}
        className="bg-primary px-4 py-2 rounded-lg flex items-center gap-2 text-white text-xs"
      >
        <Search />
        جستجو
      </button>
    </div>
  );
};

export default SearchBox;
