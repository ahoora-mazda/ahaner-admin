import { motion } from "framer-motion";
import React from "react";
interface Props {
  error?: any;
  optional: boolean;
  onChange: (key: string, date: string) => void;
  value: string;
}
const BrDay: React.FC<Props> = ({ error, optional, onChange, value }) => {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
  return (
    <div className="flex flex-col">
      <label className="text-sm	font-semibold mb-1 text-right">
        تاریخ تولد
        {optional && (
          <span className="text-xs font-normal mx-1 text-primary">
            (اختیاری)
          </span>
        )}
      </label>
      <div className="flex items-center gap-2 ">
        <input
          className="border rounded-lg py-3 px-1"
          placeholder="سال"
          defaultValue={value?.split("/")[0]}
          onChange={({ target: { value } }) => {
            onChange("year", value);
          }}
          maxLength={4}
        />
        <input
          className="border rounded-lg py-3 px-1"
          placeholder="ماه"
          defaultValue={value?.split("/")[1]}
          onChange={({ target: { value } }) => {
            onChange("month", value);
          }}
          maxLength={2}
        />
        <input
          className="border rounded-lg py-3 px-1"
          placeholder="روز"
          defaultValue={value?.split("/")[2]}
          onChange={({ target: { value } }) => {
            onChange("day", value);
          }}
          maxLength={2}
        />
      </div>
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

export default BrDay;
