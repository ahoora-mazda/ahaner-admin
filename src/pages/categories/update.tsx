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
        route: "/admin/categories",
        get: "/admin/categories/:id",
        update: "/admin/categories/:id",
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
          seo: {
            title: state.title_seo,
            description: state.description_seo,
            schema: state.schema,
          },
        };
      }}
      sortGet={(state) => {
        return {
          ...state,
          title_seo: state?.seo?.title,
          description_seo: state?.seo?.description,
          schema: state?.seo?.schema,
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
          label: "والد دسته بندی",
          name: "category_id",
          type: "selectApi",
          api: {
            keys: ["categories"],
            sort: (state) => {
              return state.categories.map((ele: any) => {
                return {
                  value: ele.value,
                  label: ele.label,
                };
              });
            },
          },
          cardKey: "1",
          col: "col-span-12",
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
          name: "title_seo",
          label: "عنوان صفحه",
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          name: "description_seo",
          label: "توضیحات صفحه",
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },

        {
          name: "schema",
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
