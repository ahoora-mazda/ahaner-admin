import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import React from "react";

interface Props {
  label: string;
  onChange: (e: CheckboxChangeEvent) => void;
  checked: boolean;
  defaultChecked?: boolean;
}
const CheckBox: React.FC<Props> = ({
  label,
  onChange,
  checked,
  defaultChecked,
}) => {
  return (
    <div className={`flex `}>
      <Checkbox
        defaultChecked={defaultChecked}
        onChange={onChange}
        checked={checked}
      >
        {label}
      </Checkbox>
    </div>
  );
};

export default CheckBox;
