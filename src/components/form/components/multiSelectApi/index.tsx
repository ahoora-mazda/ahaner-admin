import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { API } from "../../../../server";
import { Select } from "antd";
import { InfoCircle } from "tabler-icons-react";
interface Props {
  label?: string;
  error?: any;
  onChange: (op: any, allObj: any) => void;
  onBlur?: (op: any) => void;
  value: any;
  api: {
    keys: string[];
    sort: (state: any) => {};
  };
  depend?: {
    key: string;
    altKey?: string;
  };
  optional?: boolean;
  dependValue?: any;
  help?: string;
}

const MultiSelectApi = ({
  label,
  error,
  onChange,
  value,
  onBlur,
  api,
  depend,
  dependValue,
  optional,
  help,
}: Props) => {
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState<any>([]);
  const getOptions = async () => {
    setLoading(true);
    const { data } = await API.post("/requirements" || "", {
      keys: api.keys,
    });
    if (typeof api.sort === "function") {
      setOptions(api.sort(data.data));
    }
    setLoading(false);
  };
  useEffect(() => {
    if (depend) {
      if (dependValue()) {
        getOptions();
      }
    } else {
      getOptions();
    }
  }, [dependValue()]);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <div className="flex flex-col ">
      {label ? (
        <>
          <label className="text-sm	font-semibold mb-1 text-right">
            {label}
            {!optional && (
              <span className="text-xs font-normal mx-1 text-red-800">*</span>
            )}
          </label>
        </>
      ) : (
        <></>
      )}
      <Select
        mode="multiple"
        showSearch
        allowClear
        placeholder={"انتخاب کنید"}
        disabled={loading}
        notFoundContent={
          <div>
            <p className="text-center py-2">موردی یافت نشد</p>
          </div>
        }
        options={options}
        onChange={(e, allObj) => {
          onChange(e, allObj);
        }}
        value={value}
        onBlur={onBlur}
      ></Select>
      {help && (
        <small className="flex items-center gap-2 mt-2">
          <InfoCircle size={"1rem"} />
          {help}
        </small>
      )}
      <motion.p
        animate={error ? "open" : "closed"}
        variants={variants}
        className="text-red text-xs mt-2"
      >
        {error?.message}
      </motion.p>
    </div>
  );
};

export default MultiSelectApi;
