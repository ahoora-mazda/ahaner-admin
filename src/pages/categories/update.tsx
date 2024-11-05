import React from "react";
import CustomForm from "../../components/form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const CategoryUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ویرایش دسته بندی"
      btn={{ text: "ویرایش دسته بندی" }}
      api={{
        route: "/categories",
        get: "/categories/:id",
        update: "/categories/:id",
      }}
      accessUpdate={"permission_update"}
      onEnd={() => {
        navigate("/category-list");
      }}
      cards={[
        {
          title: "اطلاعات دسته بندی",
          key: "1",
        },
      ]}
      sortUpdate={(state) => {
        return {
          ...state,
        };
      }}
      sortGet={(state) => {
        return {
          ...state,
          properties: state.Properties.map((p: any) => p.id),
          seo_title: state?.SeoDatum?.title,
          seo_description: state?.SeoDatum?.description,
          seo_schema: state?.SeoDatum?.schema,
        };
      }}
      update={true}
      elements={[
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
          validation: yup.mixed().required("تصویر اجباری است"),
          name: "image",
          label: "تصویر",
          col: "col-span-12",
        },
        {
          name: "seo_title",
          label: "عنوان صفحه",
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          name: "seo_description",
          label: "توضیحات صفحه",
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },

        {
          name: "seo_schema",
          label: "schema",
          cardKey: "1",
          type: "textarea",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default CategoryUpdate;
