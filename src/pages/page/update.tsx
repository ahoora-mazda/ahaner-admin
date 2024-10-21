import React from "react";
import CustomForm from "../../components/form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const PageUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ایجاد صفحه"
      btn={{ text: "ویرایش صفحه" }}
      api={{
        route: "/admin/pages",
        get: "/admin/pages/:id",
        update: "/admin/pages/:id",
      }}
      accessUpdate={"permission_update"}
      sortGet={state => {
        return {
          ...state,
          product_id:
            state.products &&
            Array.isArray(state.products) &&
            state.products.length > 0
              ? state.products.map((ele: any) => ele.id)
              : [],
          group_id:
            state.groups &&
            Array.isArray(state.groups) &&
            state.groups.length > 0
              ? state.groups.map((ele: any) => ele.id)
              : [],
          category_id: +state.category_id,
          title_s: state?.seo?.title_s,
          desc_s: state?.seo?.desc_s,
          schema: state?.seo?.schema,
        };
      }}
      onEnd={() => {
        navigate("/page-list");
      }}
      cards={[
        {
          title: "اطلاعات صفحه",
          key: "1",
        },
      ]}
      update={true}
      sortUpdate={state => {
        return {
          ...state,
          seo: {
            title: state.title_s,
            description: state.desc_s,
            schema: state.schema,
          },
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
          label: "دسته بندی",
          name: "category_id",
          validation: yup.string().required("دسته بندی اجباری است"),
          type: "selectApi",
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
          api: {
            route: "/admin/blogs/create",
            sort: state => {
              return state.map((ele: any) => {
                return {
                  value: ele.id,
                  label: ele.title,
                };
              });
            },
          },
        },
        {
          label: "محصولات",
          name: "product_id",
          type: "multiSelectApi",
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
          exists: { keys: ["category_id"] },

          depend: {
            key: "category_id",
          },
          api: {
            route: "/admin/pages/create?select=product",
            sort: state => {
              return state.map((ele: any) => {
                return {
                  value: ele.id,
                  label: ele.title,
                };
              });
            },
          },
        },
        {
          label: "کشور ها",
          name: "group_id",
          type: "multiSelectApi",
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
          exists: { keys: ["product_id"] },

          depend: {
            key: "product_id",
          },
          api: {
            route: "/admin/pages/create?select=group",
            sort: state => {
              return state.map((ele: any) => {
                return {
                  value: ele.id,
                  label: ele.title,
                };
              });
            },
          },
        },
        {
          label: "توضیحات",
          name: "description",
          validation: yup.string().required("توضیحات اجباری است"),
          type: "editor",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "راهنما",
          name: "guidance",
          validation: yup.string().required("راهنما اجباری است"),
          type: "editor",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          type: "colorPicker",
          cardKey: "1",
          validation: yup.string().required("رنگ اجباری است"),
          col: "col-span-12 md:col-span-6",
          name: "color",
          label: "رنگ",
        },
        {
          type: "colorPicker",
          cardKey: "1",
          validation: yup.string().required("رنگ زمینه اجباری است"),
          name: "background_color",
          col: "col-span-12 md:col-span-6",
          label: "رنگ زمینه",
        },
        {
          label: "تصویر",
          name: "image",
          type: "fileUploader",
          validation: yup.mixed().required("تصویر اجباری است"),
          cardKey: "1",
          col: "col-span-12",
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

export default PageUpdate;
