import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";
import Modal from "../../components/modal";
import { categoryCreateForm } from "../categories/create";
import { random } from "../../utils/function";
import { useDispatch } from "react-redux";
import { toggle } from "../../features/form";

const BlogCreate = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [reset, setReset] = useState("");
  delete categoryCreateForm.cards;
  delete categoryCreateForm.title;
  const dispatch = useDispatch();

  return (
    <>
      {" "}
      <CustomForm
        onEnd={() => {
          navigate("/blog-list");
        }}
        title="ایجاد مقاله ها"
        btn={{ text: "ایجاد مقاله" }}
        api={{ route: "/blog" }}
        cards={[
          {
            title: "اطلاعات مقاله",
            key: "1",
          },
        ]}
        sortUpdate={(state) => {
          return {
            reading_time: +state.reading_time,
            suggest: state.suggest ? 1 : 0,

            ...state,
          };
        }}
        isProgress
        elements={[
          {
            label: "عنوان",
            name: "title",
            validation: yup.string().required("عنوان اجباری است"),
            type: "input",
            cardKey: "1",
            col: "col-span-12 md:col-span-6",
          },
          {
            label: "اسلاگ",
            name: "slug",
            validation: yup.string().required("اسلاگ اجباری است"),
            ltr: true,
            type: "input",
            cardKey: "1",
            col: "col-span-12 md:col-span-6",
          },
          {
            label: "زمان خواندن",
            name: "reading_time",
            validation: yup.string().required("زمان خواندن اجباری است"),
            type: "input",
            cardKey: "1",
            col: "col-span-12 md:col-span-6",
          },

          {
            label: "دسته بندی",
            name: "category_id",
            validation: yup.string().required("دسته بندی اجباری است"),
            type: "selectApi",
            cardKey: "1",
            col: "col-span-12 md:col-span-6",
            onAdd: () => {
              setIsOpen(true);
            },
            api: {
              keys: ["categories"],
              sort: (state) => {
                return state.categories;
              },
            },
            addPermission: "admin_category_create",
          },

          {
            label: "توضیحات",
            name: "short_content",
            validation: yup.string().required("توضیحات اجباری است"),
            type: "textarea",
            cardKey: "1",
            col: "col-span-12",
          },
          {
            label: "متن",
            name: "content",
            validation: yup.string().required("متن اجباری است"),
            type: "editor",
            cardKey: "1",
            col: "col-span-12",
          },
          {
            label: "وضعیت",
            name: "status",
            type: "select",
            cardKey: "1",
            validation: yup.string().required("وضعیت اجباری است"),
            col: "col-span-12",
            options: [
              { label: "فعال", value: "active" },
              { label: "غیر فعال", value: "inactive" },
            ],
          },

          {
            label: "تصویر",
            name: "image",
            type: "fileUploader",
            validation: yup.mixed().required("تصویر اجباری است"),
            cardKey: "1",
            col: "col-span-12",
            route: "/blogs/upload",
          },
          {
            type: "checkbox",
            name: "suggest",
            label: "پیشنهاد سردبیر",
            cardKey: "1",
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
        ]}
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

export default BlogCreate;
