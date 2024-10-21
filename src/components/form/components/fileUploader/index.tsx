import React, { ChangeEvent, useState } from "react";
import { File, Trash, Upload } from "tabler-icons-react";
import { motion } from "framer-motion";

interface FileUploaderProps {
  label: string;
  value: any;
  optional: boolean;
  remove: (value: any) => void;
  error?: any;
  onChange: (e: any) => void;
  name: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  label,
  optional,
  value,
  remove,
  onChange,
  error,
  name,
}) => {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
  const deletePicture = async (id: number | string) => {
    // await API.delete(`/seller/product/picture/${id}/delete`);
  };
  const render = () => {
    if (value) {
      if (typeof value === "string") {
        return (
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <File />
              <p>{value}</p>
            </div>
            <button
              className=""
              onClick={() => {
                remove(value);
              }}
              type="button"
            >
              <Trash />
            </button>
          </div>
        );
      } else {
        return (
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <File />
              <p>{value?.name}</p>
            </div>

            <button className="" onClick={() => remove(value)} type="button">
              <Trash />
            </button>
          </div>
        );
      }
    }
    return <></>;
  };

  return (
    <div className={`flex flex-col  `}>
      {label ? (
        <>
          <label className="text-sm	font-semibold mb-1 text-right">
            {label}
            {optional && (
              <span className="text-xs font-normal mx-1 text-primary">
                (اختیاری)
              </span>
            )}
          </label>
        </>
      ) : (
        <></>
      )}
      <div
        className={`file-uploader border border-dashed rounded-lg py-[50px]  flex items-center justify-center`}
      >
        <input
          type="file"
          id={`fileInput-${name}`}
          multiple
          onChange={onChange}
          style={{ display: "none" }}
        />
        <label
          htmlFor={`fileInput-${name}`}
          className="flex flex-col items-center gap-2"
        >
          <Upload className="text-primary" size={"2rem"} />
          <p>برای آپلود فایل کلیک کنید</p>
        </label>
      </div>
      <div className="mt-2">{render()}</div>
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

export default FileUploader;
