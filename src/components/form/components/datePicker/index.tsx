import { motion } from "framer-motion";
import React from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker, { DateObject } from "react-multi-date-picker";
import "./style.scss";
import { convertDate } from "../../../../utils/function";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
interface Props {
  label?: string;
  value: any;
  onChange: (e: any) => void;
  error?: any;
  optional?: boolean;
  readonly?: boolean;
  time?: boolean;
}
const CustomDatePicker: React.FC<Props> = ({
  label,
  onChange,
  error,
  value,
  optional,
  readonly,
  time,
}) => {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
  console.log({ value });
  console.log(new Date(value));

  return (
    <div className="date-picker" data-error={error?.message ? true : false}>
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
      <DatePicker
        range={false}
        onChange={(data: DateObject, e) => {
          console.log({ data });
          if (time) {
            console.log(
              `${data.year}/${data.month.number}/${data.day} ${data.hour}:0${data.minute}:0${data.second}`
            );
            onChange(
              convertDate(
                `${data.year}/${data.month.number}/${data.day} ${data.hour}:${data.minute}:${data.second}`,
                true
              )
            );
          } else {
            onChange(
              convertDate(`${data.year}/${data.month.number}/${data.day}`)
            );
          }
        }}
        inputClass="form-control"
        calendar={persian}
        locale={persian_fa}
        {...(value ? { value: new Date(value) } : {})}
        {...(time
          ? {
              format: "Date:YYYY/MM/DD, Time:HH:mm:ss",
              formattingIgnoreList: ["Date", "Time"],
              plugins: [<TimePicker position="bottom" />],
            }
          : {})}
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
