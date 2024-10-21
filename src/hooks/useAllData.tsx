import { useEffect, useState } from "react";
import { timeout } from "../utils/function";
import { API } from "../server";
interface Props {
  route: string;
  sort: (state: any) => {};
}
export const useAllData = ({
  route = "",
  sort = (state: any) => {
    return state;
  },
}) => {
  const [loading, setLoading] = useState({ get: true, show: true });
  const [data, setData] = useState<any>({});
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState<any>({});
  const [isPrint, setIsPrint] = useState(false);

  const getQueryParams = (url: any) => {
    const params = new URLSearchParams(url.search);
    const queryParams: any = {};
    for (let [key, value] of Array.from(params.entries())) {
      queryParams[key] = value;
    }
    return queryParams;
  };

  const getData = async () => {
    setLoading({ get: true, show: true });
    const response = await API.get(route, {
      params: {
        orderby: "asc",
        ...getQueryParams(window.location),
      },
    });
    setData(sort(response?.data?.data));
    setInfo(response?.data?.report);

    setLoading({ get: false, show: true });
    await timeout(5000);
    setLoading({ get: false, show: false });
  };
  const print = () => {
    setShow(false);
    var css = "@page { size: landscape;  size: auto;  margin: 0mm; }",
      head = document.head || document.getElementsByTagName("head")[0],
      style = document.createElement("style");

    style.type = "text/css";
    style.media = "print";

    // if (style.styleSheet) {
    //   style.styleSheet.cssText = css;
    // } else {
    //   style.appendChild(document.createTextNode(css));
    // }

    head.appendChild(style);
    if (!isPrint) {
      window.print();
      setIsPrint(true);
    }
    setShow(true);
  };
  useEffect(() => {
    getData();
  }, []);

  return { data, loading, show, print, setLoading, info };
};
