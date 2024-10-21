// import { useMemo, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { API } from "../server";

// export const useGet = ({
//   route = "",
//   filters = [],
//   initFilter = {},
//   logic = false,
//   dependency = [],
// }) => {
//   const [loading, setLoading] = useState({ get: true });
//   const [state, setState] = useState({});
//   const [searchParams, setSearchParams] = useSearchParams(initFilter);

//   const getData = async () => {
//     setLoading({ ...loading, get: true });
//     const { data } = await API.get(
//       route + `${searchParams ? "?" + searchParams : ""}`
//     );
//     setState(data);
//     setLoading({ ...loading, get: false });
//   };

//   const changeObj = (key, value) => {
//     let obj = {};
//     filters.map(element => {
//       if (searchParams.get(element.key)) {
//         obj = { ...obj, [element.key]: searchParams.get(element.key) };
//       }
//     });
//     setSearchParams({ ...obj, [key]: value });
//   };

//   useMemo(() => {
//     if (!logic) {
//       getData();
//     } else {
//       if (typeof logic === "function" && logic()) {
//         getData();
//       }
//     }
//   }, [searchParams, ...dependency]);

//   return [state, loading, getData, changeObj, setState, searchParams];
// };
export {};
