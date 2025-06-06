import { Checkbox } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePermission } from "../../../hooks/usePermission";
import { useQuery } from "../../../hooks/useQuery";
import { API } from "../../../server";
import { RootState } from "../../../store";
import { Header } from "../../../types/table";
import {
  combineImageUrl,
  renderMonth,
  renderPrice,
  toDate,
} from "../../../utils/function";
import ActionCell from "../components/actionCell";
import LongText from "../components/longText";
import HighlightedText from "../components/highlightedText";
interface Props {
  api: {
    route: string;
  };
  sortAllData?: (data: any) => {};
}
export const useTable = ({ api, sortAllData }: Props) => {
  const [table, setTable] = useState<any>({
    rows: [],
    lastPage: 1,
    currentPage: 1,
  });
  const [loading, setLoading] = useState({ get: true, inner: false });
  const { getQueryParams, changeObj, searchParams, count, clear } = useQuery();
  const { deleted } = useSelector((state: RootState) => {
    return state.modalDelete;
  });
  const { depend } = useSelector((state: RootState) => {
    return state.tableReducer;
  });
  const { check } = usePermission();

  const render = (head: Header, row: any, id: number) => {
    switch (head.type) {
      case "date":
        return toDate(row[head.key]);
      case "operation":
        return (
          <ActionCell headers={head.options ? head.options : []} row={row} />
        );
      case "enum":
        return head.enum && head.enum[row[head.key]];
      case "month":
        return renderMonth(row[head.key]);
      case "longText":
        return <LongText text={row[head.key]} />;
      case "_idx":
        return <>{id + 1}</>;
      case "checkbox":
        return (
          <Checkbox
            onClick={() => head.onClick && head.onClick(+row.id, row)}
          ></Checkbox>
        );
      case "price":
        return <p>{row[head.key] && renderPrice(row[head.key])}</p>;
      case "image":
        return (
          <div>
            {row[head.key] ? (
              <img
                alt=""
                className="w-[50px] h-[50px] object-contain"
                src={combineImageUrl(row[head.key]) || ""}
              />
            ) : (
              <p className="text-red-600s">تصویر ندارد!</p>
            )}
          </div>
        );

      default:
        return <HighlightedText text={row[head.key]} />;
    }
  };
  const getData = async () => {
    try {
      setLoading({ ...loading, inner: true });
      const { data } = await API.get(api.route, {
        params: {
          perpage: 10,
          orderby: "desc",
          ...getQueryParams(window.location),
        },
      });
      if (typeof sortAllData == "function") {
        setTable(sortAllData(data.data));
      } else {
        setTable(data.data);
      }
      setLoading({ get: false, inner: false });
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, [searchParams, depend]);

  return { loading, table, render, deleted, changeObj, count, clear, check };
};
