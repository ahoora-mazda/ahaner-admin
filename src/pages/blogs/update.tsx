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
        route: "/admin/blogs",
        get: "/admin/blogs/:id",
        update: "/admin/blogs/:id",
      }}
      accessUpdate={"permission_update"}
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
          seo: {
            title: state.title_s,
            description: state.desc_s,
            schema: state.schema,
          },
        };
      }}
      update={true}
      sortGet={(state) => {
        return {
          ...state,
          title_s: state?.seo?.title,
          schema: state?.seo?.schema,
          desc_s: state?.seo?.description,
        };
      }}
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
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
        },
        {
          label: "زمان خواندن",
          name: "time",
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
          label: "نویسنده",
          name: "writer",
          validation: yup.string().required("نویسنده اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12 ",
        },
        {
          label: "توضیحات",
          name: "short_description",
          validation: yup.string().required("توضیحات اجباری است"),
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "متن",
          name: "description",
          validation: yup.string().required("متن اجباری است"),
          type: "editor",
          cardKey: "1",
          col: "col-span-12",
        },

        {
          label: "تصویر",
          name: "image",
          type: "fileUploader",
          validation: yup.mixed().required("تصویر اجباری است"),
          cardKey: "1",
          col: "col-span-12",
          route: "/admin/blogs/upload",
        },
        {
          label: "عنوان سئو",
          name: "title_s",
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "توضیحات سئو",
          name: "desc_s",
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "schema",
          name: "schema",
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default BlogUpdate;
