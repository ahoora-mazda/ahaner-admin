import React from "react";
import CustomForm from "../../components/form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { watch } from "fs";

const BlogUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ویرایش مقاله"
      btn={{ text: "ویرایش مقاله" }}
      api={{
        route: "/blog",
        get: "/blog/:id",
        update: "/blog/:id",
      }}
      accessUpdate={"admin_blog_update"}
      onEnd={() => {
        navigate("/blog-list");
      }}
      cards={[
        {
          title: "اطلاعات مقاله",
          key: "1",
        },
      ]}
      sortUpdate={(state) => {
        return {
          ...state,
          reading_time: +state.reading_time,
          suggest: state.suggest ? 1 : 0,

          seo: {
            title: state.seo_title,
            description: state.seo_description,
            schema: state.seo_schema,
          },
        };
      }}
      update={true}
      sortGet={(state) => {
        return {
          ...state,
          
          seoNeed: state.seo_id ? true : false,
          seo_title: state?.Seo_Datum?.title,
          seo_schema: state?.Seo_Datum?.schema,
          seo_description: state?.Seo_Datum?.description,
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
          api: {
            keys: ["categories"],
            sort: (state) => {
              return state.categories;
            },
          },
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
  );
};

export default BlogUpdate;
