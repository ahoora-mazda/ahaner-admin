import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { categoryCreateForm } from "../categories/create";
import { random } from "../../utils/function";
import { toggle } from "../../features/form";
import Modal from "../../components/modal";
import { Form } from "../../types/form";

export const productCorCreateForm: Form = {
  notSerialize: true,
  title: "ایجاد محصول اصلی",
  btn: { text: "ایجاد محصول اصلی" },
  api: { route: "/product-core" },
  cards: [
    {
      title: "اطلاعات محصول اصلی",
      key: "1",
    },
  ],
  sortUpdate: (state) => {
    return {
      ...state,
    };
  },
  elements: [
    {
      label: "عنوان",
      name: "name",
      validation: yup.string().required("عنوان اجباری است"),
      type: "input",
      cardKey: "1",
      col: "col-span-12 md:col-span-6",
    },
    {
      label: "اسلاگ",
      name: "slug",
      validation: yup.string().required("اسلاگ اجباری است"),
      type: "input",
      cardKey: "1",
      ltr: true,
      help: "انگلیسی وارد کنید و فاصله را با - وارد کنید",
      col: "col-span-12 md:col-span-6",
    },
    {
      label: "دسته بندی",
      name: "category_id",
      type: "selectApi",
      api: {
        keys: ["categories"],
        sort: (state) => {
          return state.categories.map((ele: any) => {
            return {
              value: ele.value,
              label: ele.label,
              properties: ele.Properties,
            };
          });
        },
      },
      cardKey: "1",
      validation: yup.string().required("دسته بندی اجباری است"),
      col: "col-span-12",
      addPermission: "admin_category_create",
    },
    {
      name: "content",
      label: "متن",
      validation: yup.string().required("متن بندی اجباری است"),
      cardKey: "1",
      type: "editor",
      col: "col-span-12",
    },
    {
      type: "fileUploader",
      cardKey: "1",
      name: "image",
      label: "تصویر",
      col: "col-span-12",
    },
  ],
};

const ProductCoreCreate = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [reset, setReset] = useState("");
  delete categoryCreateForm.cards;
  delete categoryCreateForm.title;
  const dispatch = useDispatch();
  return (
    <>
      <CustomForm
        onEnd={() => {
          navigate("/product-core-list");
        }}
        {...productCorCreateForm}
        elements={productCorCreateForm.elements.map((ele) => {
          if (ele.name === "category_id") {
            return {
              ...ele,
              onAdd: () => {
                setIsOpen(true);
              },
            };
          }
          return ele;
        })}
      />
      <Modal
        isOpen={isOpen}
        className="!max-w-2xl"
        title="افزودن دسته بندی"
        onClose={() => {
          setIsOpen(false);
          setReset(random());
        }}
      >
        <CustomForm
          key={reset}
          {...categoryCreateForm}
          elements={categoryCreateForm.elements.filter((ele) => ele.validation)}
          onEnd={() => {
            setIsOpen(false);
            setReset(random());
            dispatch(toggle());
          }}
        />
      </Modal>
    </>
  );
};

export default ProductCoreCreate;
