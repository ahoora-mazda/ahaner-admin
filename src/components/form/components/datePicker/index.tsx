import { motion } from "framer-motion";
import React from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import "./style.scss";
import { convertDate } from "../../../../utils/function";
interface Props {
  label?: string;
  value: any;
  onChange: (e: any) => void;
  error?: any;
  optional?: boolean;
  readonly?: boolean;
}
const CustomDatePicker: React.FC<Props> = ({
  label,
  onChange,
  error,
  value,
  optional,
  readonly,
}) => {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
  return (
    <div className="date-picker" data-error={error?.message ? true : false}>
      <label className="text-sm	font-semibold mb-1 text-right">
        {" "}
        {label}
        {optional && (
          <span className="text-xs font-normal mx-1 text-primary">
            (اختیاری)
          </span>
        )}
      </label>
      <DatePicker
        range={false}
        onChange={(data: any, e) => {
          onChange(
            convertDate(`${data.year}/${data.month.number}/${data.day}`)
          );
        }}
        inputClass="form-control"
        calendar={persian}
        locale={persian_fa}
        {...(value ? { value: new Date(value) } : {})}
      />
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

export default CustomDatePicker;
