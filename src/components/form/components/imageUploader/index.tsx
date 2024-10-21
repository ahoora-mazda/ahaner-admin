import React, { ChangeEvent } from "react";
import { domain } from "../../../../constants/domain";
import { Upload } from "tabler-icons-react";
interface Props {
  label?: string;
  value: any;
  classNames?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const ImageUploader = ({ label, value, onChange, classNames }: Props) => {
  const render = () => {
    if (typeof value == "string") {
      return (
        <img
          alt="preview"
          src={value}
          className="object-contain w-full h-full"
        />
      );
    } else {
      return (
        <img
          alt="preview"
          src={URL.createObjectURL(value)}
          className="object-contain w-full h-full"
        />
      );
    }
  };
  return (
    <div>
      <label
        htmlFor="image-uploader"
        className={`w-[102px] overflow-hidden h-[102px] rounded-full flex items-center gap-1 justify-center  border border-dashed border-borderSidebar hover:border-primary cursor-pointer ${classNames}`}
      >
        {value && value !== domain ? (
          <>{render()}</>
        ) : (
          <div className="flex items-center flex-col">
            <span>
              <Upload className="text-primary" />
            </span>
            <span>{label}</span>
          </div>
        )}
      </label>
      <input
        onChange={onChange}
        accept="image/*"
        type="file"
        className="hidden"
        id="image-uploader"
      />
    </div>
  );
};

export default ImageUploader;
