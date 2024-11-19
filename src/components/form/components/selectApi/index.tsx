import { Select } from "antd";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Plus } from "tabler-icons-react";
import { API } from "../../../../server";
import { RootState } from "../../../../store";
import Input from "../input";
import { usePermission } from "../../../../hooks/usePermission";
interface Props {
  label?: string;
  error?: any;
  onChange: (op: any, v: any) => void;
  onBlur?: (op: any) => void;
  value: any;
  api: {
    keys: string[];
    sort: (state: any) => {};
  };
  depend?: {
    key: string;
  };
  optional?: boolean;
  allowClear?: boolean;
  dependValue?: any;
  readonly?: boolean;
  onEnter?: () => void;
  id?: string;
  onAdd?: () => void;
  addInline?: {
    api: string;
    key: string;
  };
  addPermission?: string;
}

const SelectApi = ({
  label,
  error,
  onChange,
  value,
  onBlur,
  api,
  depend,
  dependValue = () => {},
  optional,
  allowClear = true,
  readonly,
  onEnter,
  id,
  onAdd,
  addInline,
  addPermission,
}: Props) => {
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState<any>([]);
  const [add, setAdd] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [errorInput, setErrorInput] = useState<any>({});
  const { depend: dependReducer } = useSelector((state: RootState) => {
    return state.formReducer;
  });
  const getOptions = async () => {
    setLoading(true);
    const { data } = await API.post(
      "/requirements",
      depend
        ? { keys: api.keys, [depend.key]: dependValue() }
        : {
            keys: api.keys,
          }
    );
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

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
  const { check } = usePermission();
  return (
    <div className="flex flex-col ">
      {label ? (
        <div className="flex items-center mb-1 gap-2">
          <label className="text-sm	font-semibold text-right">
            {label}
            {!optional && (
              <span className="text-xs font-normal mx-1 text-red-800">*</span>
            )}
          </label>
          {(onAdd || addInline) && check(addPermission || "") && (
            <button
              type="button"
              onClick={() => {
                if (onAdd) {
                  onAdd();
                } else {
                  setAdd(true);
                }
              }}
              className="flex items-center gap-1 text-xs text-primary font-medium"
            >
              <Plus color="#5D87FF" size={"0.8rem"} />
              افزودن
            </button>
          )}
        </div>
      ) : (
        <></>
      )}
      {add ? (
        <>
          <Input
            error={errorInput ? { message: `${label} الزامی است` } : {}}
            label={label}
            onChange={({ target: { value } }) => setInputValue(value)}
          />
        </>
      ) : (
        <>
          {" "}
          <Select
            id={id}
            showSearch
            allowClear={allowClear}
            placeholder={"انتخاب کنید"}
            disabled={loading || readonly}
            notFoundContent={
              <div>
                <p className="text-center py-2">موردی یافت نشد</p>
              </div>
            }
            options={options}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            optionFilterProp="label"
            onKeyDown={(e) => {
              if (e.code === "Enter" && onEnter) {
                onEnter();
              }
            }}
          ></Select>
          <motion.p
            animate={error ? "open" : "closed"}
            variants={variants}
            className="text-red text-xs mt-2"
          >
            {error?.message}
          </motion.p>
        </>
      )}
    </div>
  );
};

export default SelectApi;
