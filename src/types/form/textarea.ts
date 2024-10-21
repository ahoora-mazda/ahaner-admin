import { FieldError } from "../filedError";
import { ChangeEvent } from "react";

export interface TextAreaProps {
  label?: string;
  props?: any;
  error?: any;
  wrapperClassName?: string;
  optional?: boolean;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: any;
}
