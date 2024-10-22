import { ChangeEvent } from "react";
import { FieldError } from "../filedError";

export interface InputProps {
  label?: string;
  props?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  error?: any;
  type?: "text" | "password" | "number";
  wrapperClassName?: string;
  optional?: boolean;
  readonly?: boolean;
  id?: string;
  onEnter?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  help?: string;
}
