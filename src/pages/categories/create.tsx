import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";
import Modal from "../../components/modal";
import { random } from "../../utils/function";
import { useDispatch } from "react-redux";
import { toggle } from "../../features/form";
import { videoCreateForm } from "../video/create";
import { Form } from "../../types/form";

export const categoryCreateForm: Form = {
  title: "ایجاد دسته بندی ها",
  btn: {
    text: "ایجاد دسته بندی",
  },
  api: {
    route: "/categories",
  },
  cards: [
    {
      title: "اطلاعات دسته بندی",
      key: "1",
    },
  ],
  sortUpdate(state) {
    return {
      ...state,
      properties: state.properties || [],
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
      ltr: true,
      cardKey: "1",
      col: "col-span-12 md:col-span-6",
      help: "انگلیسی وارد کنید و فاصله را با - وارد کنید",
    },
    {
      label: "ویدیو",
      name: "video_id",
      type: "selectApi",
      api: {
        keys: ["videos"],
        sort: (state) => {
          return state.videos.map((ele: any) => {
            return {
              value: ele.value,
              label: ele.label,
              properties: ele.Properties,
            };
          });
        },
      },
      cardKey: "1",
      col: "col-span-12",
      addPermission: "admin_video_create",
    },
    {
      type: "multiSelectApi",
      label: "ویژگی ها",
      name: "properties",
      validation: yup.mixed().required("ویژگی ها اجباری است"),
      api: {
        keys: ["properties"],
        sort: (state) => {
          return state.properties;
        },
      },
      col: "col-span-12",
      cardKey: "1",
      help: "ترتیب انتخاب٬ همان ترتیب نمایش جدول است",
      addInline: {
        api: "properties",
        key: "name",
      },
      addPermission: "admin_property_create",
    },
    {
      name: "description",
      label: "توضیحات",
      cardKey: "1",
      type: "editor",
      col: "col-span-12",
    },

    {
      type: "fileUploader",
      cardKey: "1",
      // validation: yup.mixed().required("تصویر اجباری است"),
      name: "image",
      label: "تصویر",
      col: "col-span-12",
    },
    {
      type: "checkbox",
      name: "seoNeed",
      label: "ساخت اسکیما",
      cardKey: "1",
      col: "col-span-12",
    },
    {
      name: "seo_title",
      label: "عنوان صفحه",
      type: "input",
      cardKey: "1",
      validation: yup.string().when("seoNeed", {
        is: true,
        then: () => yup.string().required("عنوان اجباری است"),
      }),

      col: "col-span-12",
      exists: { keys: ["seoNeed"] },
    },
    {
      name: "seo_description",
      label: "توضیحات صفحه",
      type: "textarea",
      cardKey: "1",
      exists: { keys: ["seoNeed"] },
      col: "col-span-12",
    },

    {
      name: "seo_schema",
      label: "schema",
      cardKey: "1",
      type: "textarea",
      exists: { keys: ["seoNeed"] },
      col: "col-span-12",
    },
  ],
};
const CategoryCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [reset, setReset] = useState("");
  delete videoCreateForm.cards;
  delete videoCreateForm.title;
  return (
    <>
      <CustomForm
        onEnd={() => {
          navigate("/category-list");
          dispatch(toggle());
        }}
        {...categoryCreateForm}
        elements={categoryCreateForm.elements.map((ele) => {
          return ele.name === "video_id"
            ? {
                ...ele,
                onAdd: () => {
                  setIsOpen(true);
                },
              }
            : ele;
        })}
      />{" "}
      <Modal
        isOpen={isOpen}
        className="!max-w-2xl"
        title="افزودن ویدیو"
        onClose={() => {
          setIsOpen(false);
          setReset(random());
        }}
      >
        <CustomForm
          key={reset}
          {...videoCreateForm}
          elements={videoCreateForm.elements.filter((ele) => ele.validation)}
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

export default CategoryCreate;
