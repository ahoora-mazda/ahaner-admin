import React from "react";
import { useQuery } from "../../../hooks/useQuery";

interface HighlightedTextProps {
  text?: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text }) => {
  const { getQueryParams } = useQuery();
  const searchText = getQueryParams(window.location)?.search;
  if (!text) return <span> - </span>;
  if (!searchText) return <span>{text}</span>;

  const regex = new RegExp(`(${searchText})`, "gi");

  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === searchText.toLowerCase() ? (
          <span key={index} className="font-bold text-primary">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default HighlightedText;
