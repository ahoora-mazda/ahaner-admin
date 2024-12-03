import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { API } from "../../../../server";
import { Select } from "antd";
import { InfoCircle, Plus } from "tabler-icons-react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import Input from "../input";
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
  onAdd?: () => void;
  addInline?: {
    api: string;
    key: string;
  };
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
  onAdd,
  addInline,
}: Props) => {
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState<any>([]);
  const [inputValue, setInputValue] = useState("");
  const [add, setAdd] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);

  const { depend: dependReducer } = useSelector((state: RootState) => {
    return state.formReducer;
  });
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
  }, [dependValue(), dependReducer]);
  const submit = async () => {
    try {
      setLoadingBtn(true);
      const { data } = await API.post(addInline?.api || "", {
        [addInline?.key || ""]: inputValue,
      });
      setOptions([
        { value: data.data.id, label: data.data.name || data.data.title },
        ...options,
      ]);
      onChange(data.data.id, null);
      setInputValue("");
      setAdd(false);
    } catch (error) {
    } finally {
      setLoadingBtn(false);
    }
  };

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <div className="flex flex-col ">
      {label ? (
        <div className="flex items-center mb-1 gap-2">
          <label className="text-sm	font-semibold mb-1 text-right">
            {label}
            {!optional && (
              <span className="text-xs font-normal mx-1 text-red-800">*</span>
            )}
          </label>
          {(onAdd || addInline) && (
            <button
              type="button"
              disabled={loadingBtn}
              onClick={() => {
                if (onAdd) {
                  onAdd();
                } else {
                  if (add) {
                    submit();
                  } else {
                    setAdd(true);
                  }
                }
              }}
              className={
                "flex items-center gap-1 text-xs text-primary font-medium disabled:opacity-30"
              }
            >
              {add ? (
                <>ثبت</>
              ) : (
                <>
                  {" "}
                  <Plus color="#5D87FF" size={"0.8rem"} />
                  افزودن
                </>
              )}
            </button>
          )}
        </div>
      ) : (
        <></>
      )}
      {add ? (
        <>
          <Input
            props={{ value: inputValue }}
            onChange={({ target: { value } }) => setInputValue(value)}
            onEnter={() => {
              submit();
            }}
          />
        </>
      ) : (
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
      )}

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
