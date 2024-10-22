import React from "react";
import { Form, FormElement, RequiredIfSelect } from "../../types/form";
import TopCard from "../card/top";
import Btn from "./components/button";
import { useCustomForm } from "./hooks";
import ImageUploader from "./components/imageUploader";
import Input from "./components/input";
import FormLayout from "./components/layout";
import CustomSelect from "./components/select";
import Wrapper from "./components/wrapper";
import CustomDatePicker from "./components/datePicker";
import Loader from "../loader";
import SelectApi from "./components/selectApi";
import TextArea from "./components/textarea";
import MultiSelectApi from "./components/multiSelectApi";
import BrDay from "./components/brDay";
import CardInput from "./components/cardInput";
import FileUploader from "./components/fileUploader";
import PriceInput from "./components/priceInput";
import { formattedPrice } from "../../utils/function";
import Editor from "./components/editor";
import ColorPicker from "./components/colorPicker";
import CheckBox from "./components/checkbox";

const CustomForm: React.FC<Form> = ({
  title,
  elements,
  btn,
  api,
  update,
  sortUpdate = (state) => {
    return state;
  },
  sortGet = (state) => {
    return state;
  },
  cards,
  onEnd,
  accessUpdate,
  initial,
  notSerialize = false,
  subBtn = () => {},
}) => {
  const {
    loading,
    send,
    errors,
    register,
    watch,
    setValue,
    onSubmit,
    handleSubmit,
    loadingGet,
    check,
    setError,
  } = useCustomForm({
    api,
    elements,
    sortUpdate,
    sortGet,
    update: update || false,
    onEnd,
    initial,
    notSerialize,
  });

  const render = (element: FormElement, key: number) => {
    switch (element.type) {
      case "input":
        return (
          <Wrapper
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <Input
              {...(element.validation?.required
                ? {
                    optional: false,
                  }
                : {
                    optional: true,
                  })}
              type={element.inputType}
              readonly={element.readonly}
              label={element.label}
              props={{ ...register(element.name) }}
              error={errors[element.name]}
              onChange={(e) => {
                if (element.onChange) {
                  element?.onChange(e, watch, setValue);
                }
              }}
              help={element.help}
            />
          </Wrapper>
        );
      case "checkbox":
        return (
          <Wrapper
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <CheckBox
              label={element.label || ""}
              onChange={() => setValue(element.name, !watch(element.name))}
              checked={watch(element.name)}
              defaultChecked={element.defaultValue}
            />
          </Wrapper>
        );
      case "priceInput":
        return (
          <Wrapper
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <PriceInput
              {...(element.validation?.required
                ? {
                    optional: false,
                  }
                : {
                    optional: true,
                  })}
              readonly={element.readonly}
              label={element.label}
              props={{ value: watch(element.name) }}
              error={errors[element.name]}
              onChange={(e) => {
                setValue(element.name, formattedPrice(e.target.value));
                if (element.onChange) {
                  element?.onChange(e, watch, setValue);
                }
              }}
            />
          </Wrapper>
        );

      case "select":
        return (
          <Wrapper
            exists={element.exists}
            existIf={element.existIf}
            watch={watch}
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <CustomSelect
              {...(element.validation?.required
                ? {
                    optional: false,
                  }
                : {
                    optional: true,
                  })}
              label={element.label}
              options={element.options || []}
              error={errors[element.name]}
              onChange={(e) => {
                setValue(element.name, e);
              }}
              readonly={element.readonly}
              value={watch(element.name)}
            />
          </Wrapper>
        );

      case "imageUploader":
        return (
          <Wrapper
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <ImageUploader
              onChange={({ target: { files } }) => {
                if (files) {
                  setValue(element.name, files[0]);
                } else {
                  setValue(element.name, null);
                }
              }}
              label={element.label}
              value={watch(element.name)}
              classNames={element.classNames}
            />
          </Wrapper>
        );
      case "datePicker":
        return (
          <Wrapper
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <CustomDatePicker
              {...(element.validation?.required
                ? {
                    optional: false,
                  }
                : {
                    optional: true,
                  })}
              onChange={(value) => {
                setValue(element.name, value);
                if (element.onChange) {
                  element.onChange(value);
                }
              }}
              label={element.label}
              value={watch(element.name)}
              readonly={element.readonly}
              error={errors[element.name]}
            />
          </Wrapper>
        );

      case "textarea":
        return (
          <Wrapper
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <TextArea
              {...(element.validation?.required
                ? {
                    optional: false,
                  }
                : {
                    optional: true,
                  })}
              label={element.label}
              props={{ ...register(element.name) }}
              error={errors[element.name]}
            />
          </Wrapper>
        );
      case "selectApi":
        return (
          <Wrapper
            exists={element.exists}
            existIf={element.existIf}
            watch={watch}
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <SelectApi
              {...(element.validation?.required
                ? {
                    optional: false,
                  }
                : {
                    optional: true,
                  })}
              label={element.label}
              allowClear={element.allowClear}
              depend={element.depend}
              dependValue={() => {
                if (element.depend) {
                  return watch(element.depend.key);
                }
              }}
              error={errors[element.name]}
              onChange={(e) => {
                if (element.onChange) {
                  element.onChange(e, watch, setValue);
                } else {
                  setValue(element.name, e);
                }
              }}
              readonly={element.readonly}
              value={watch(element.name)}
              api={
                element.api || {
                  keys: [""],
                  sort: (state) => {
                    return state.data;
                  },
                }
              }
            />
          </Wrapper>
        );
      case "brDay":
        return (
          <Wrapper
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <BrDay
              {...(element.validation?.required
                ? {
                    optional: false,
                  }
                : {
                    optional: true,
                  })}
              onChange={(key, date) => {
                if (date) {
                  setValue(key, date);
                }
              }}
              value={watch(element.name)}
              error={errors[element.name]}
            />
          </Wrapper>
        );
      case "editor":
        return (
          <Wrapper
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <Editor
              {...(element.validation?.required
                ? {
                    optional: false,
                  }
                : {
                    optional: true,
                  })}
              onChange={(value: string) => {
                if (value) {
                  setValue(element.name, value);
                }
              }}
              label={element.label}
              value={watch(element.name)}
              error={errors[element.name]}
            />
          </Wrapper>
        );
      case "multiSelectApi":
        return (
          <Wrapper
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
            watch={watch}
            exists={element.exists}
            existIf={element.existIf}
          >
            <MultiSelectApi
              {...(element.validation?.required
                ? {
                    optional: false,
                  }
                : {
                    optional: true,
                  })}
              label={element.label}
              depend={element.depend}
              dependValue={() => {
                if (element.depend) {
                  return Array.isArray(watch(element.depend.key)) &&
                    watch(element.depend.key).length > 0
                    ? watch(element.depend.key).toString()
                    : watch(element.depend.key);
                }
              }}
              error={errors[element.name]}
              onChange={(e, allObj) => {
                setValue(element.name, e);
                if (element.onChange) {
                  element.onChange(allObj, watch, setValue);
                }
              }}
              value={watch(element.name)}
              api={
                element.api || {
                  keys: [""],
                  sort: (state) => {
                    return state.data;
                  },
                }
              }
            />
          </Wrapper>
        );
      case "component":
        return element.component && element.component(watch);
      case "cardInput":
        return (
          <Wrapper
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <CardInput
              {...(element.validation?.required
                ? {
                    optional: false,
                  }
                : {
                    optional: true,
                  })}
              readonly={element.readonly}
              label={element.label}
              error={errors[element.name]}
              value={watch(element.name)}
              onChange={(e) => {
                const target = e.target as HTMLInputElement;
                const inputText = target.value.replace(/[^\d]/g, "");
                const formattedCardNumber = inputText
                  .replace(/(\d{4})/g, "$1-")
                  .slice(0, 19);
                setValue(element.name, formattedCardNumber);
              }}
            />
          </Wrapper>
        );
      case "fileUploader":
        return (
          <Wrapper
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <FileUploader
              {...(element.validation?.required
                ? {
                    optional: false,
                  }
                : {
                    optional: true,
                  })}
              label={element.label || ""}
              onChange={({ target: { files } }) => {
                if (files) {
                  setValue(element.name, files[0]);
                } else {
                  setValue(element.name, null);
                }
              }}
              remove={(ele: any) => {
                const currentValue = watch(element.name);
                if (currentValue) {
                  setValue(element.name, null);
                }
              }}
              error={errors[element.name]}
              value={watch(element.name)}
              name={element.name}
            />
          </Wrapper>
        );
      case "colorPicker":
        return (
          <Wrapper
            col={element.col}
            classNames={element.wrapperClassName}
            key={key}
          >
            <ColorPicker
              label={element.label}
              wrapperClassName={element.wrapperClassName}
              {...(element.validation?.required
                ? {
                    optional: false,
                  }
                : {
                    optional: true,
                  })}
              onChange={(_, e) => {
                setValue(element.name, e);
              }}
              error={errors[element.name]}
              value={watch(element.name)}
            />
          </Wrapper>
        );

      default:
        break;
    }
  };
  console.log("ds", btn?.hidden);
  let btnForm = update ? (
    accessUpdate &&
    check(accessUpdate) &&
    btn && (
      <Btn
        text={btn.text}
        type="submit"
        loading={loading.send || btn.loading}
        onClick={handleSubmit(onSubmit)}
        classNames="bg-primary mt-6 hover:bg-subPrimary h-[40px] text-white justify-center  px-6 py-2  min-w-[140px]"
      />
    )
  ) : (
    <>
      {btn && (
        <Btn
          text={btn.text}
          type="submit"
          loading={loading.send || btn.loading}
          onClick={handleSubmit(onSubmit)}
          classNames="bg-primary mt-6 hover:bg-subPrimary h-[40px] text-white justify-center  px-6 py-2  min-w-[140px]"
        />
      )}
    </>
  );
  if (update && loadingGet) {
    return <Loader classNames="mt-10" height={"60vh"} />;
  }
  return (
    <>
      {title && <TopCard title={title} />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={(e) => {
          // if (e.key === "Enter") {
          //   e.preventDefault();
          // }
        }}
      >
        {!cards ? (
          <>
            <div className="grid grid-cols-12 gap-5">
              {elements.map((ele: RequiredIfSelect<FormElement>, key) => {
                return render(ele, key);
              })}
            </div>
          </>
        ) : (
          cards?.map((card, key) => {
            if (!card.disabled) {
              return (
                <FormLayout key={key} title={card.title}>
                  <div className="grid grid-cols-12 gap-5">
                    {elements.map((ele: RequiredIfSelect<FormElement>, key) => {
                      if (card.key === ele.cardKey) {
                        return render(ele, key);
                      }
                      return <></>;
                    })}
                    {btn && btn.card ? (
                      +btn.card === +card.key && (
                        <div className={"col-span-12 md:col-span-4"}>
                          {btnForm}
                        </div>
                      )
                    ) : (
                      <></>
                    )}
                  </div>
                </FormLayout>
              );
            }
            return <></>;
          })
        )}

        {btn && (
          <div className="flex gap-2">
            {!btn.card && (
              <>
                {btn?.hidden ? <></> : btnForm}
                {subBtn && subBtn()}
              </>
            )}
          </div>
        )}
      </form>
    </>
  );
};

export default CustomForm;
