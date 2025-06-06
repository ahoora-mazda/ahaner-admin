import { Option } from "../../components/form/components/select";

export interface Form {
  title?: string;
  elements: RequiredIfSelect<FormElement>[];
  btn?: {
    text: string;
    card?: number | string;
    loading?: boolean;
    hidden?: boolean;
  };
  api: {
    route: string;
    get?: string;
    update?: string;
    onSubmit?: (body: any) => void;
  };
  update?: boolean;
  sortUpdate?: (state: any) => object;
  sortGet?: (state: any) => object;
  cards?: Card[];
  onEnd?: (data?: any, body?: any) => void;
  accessUpdate?: string | string[];
  initial?: any;
  notSerialize?: boolean;
  subBtn?: () => JSX.Element;
  isProgress?: boolean;
}

export interface FormElement {
  label?: string;
  name: string;
  type:
    | "input"
    | "select"
    | "imageUploader"
    | "datePicker"
    | "selectApi"
    | "textarea"
    | "multiSelectApi"
    | "brDay"
    | "component"
    | "cardInput"
    | "fileUploader"
    | "priceInput"
    | "editor"
    | "colorPicker"
    | "checkbox";
  inputType?: "text" | "number" | "password";
  col?: string;
  validation?: any;
  options?: Option[];
  wrapperClassName?: string;
  cardKey?: string;
  api?: {
    keys: string[];
    sort: (state: any) => {};
  };
  depend?: {
    key: string;
    altKey?: string;
  };
  exists?: {
    keys: string[];
  };
  existIf?: {
    key: string;
    value: string;
  };
  allowClear?: boolean;
  onChange?: (e: any, watch?: any, setValue?: any) => void;
  readonly?: boolean;
  component?: (watch: any) => JSX.Element;
  classNames?: string;
  defaultValue?: any;
  route?: string;
  help?: string;
  onAdd?: () => void;
  addInline?: {
    api: string;
    key: string;
  };
  time?: boolean;
  addPermission?: string;
  ltr?: boolean;
}
export interface Card {
  title: string;
  key: string;
  disabled?: boolean;
}
export type RequiredIfSelect<T extends FormElement> = T["type"] extends "select"
  ? Required<Pick<T, "options">>
  : T;
