import React from "react";
import CustomForm from "../../components/form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const ProductUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ایجاد محصول"
      btn={{ text: "ویرایش محصول" }}
      api={{
        route: "/admin/products",
        get: "/admin/products/:id",
        update: "/admin/products/:id",
      }}
      accessUpdate={"permission_update"}
      sortGet={(state) => {
        return { ...state, category_id: +state.category_id };
      }}
      onEnd={() => {
        navigate("/product-list");
      }}
      cards={[
        {
          title: "اطلاعات محصول",
          key: "1",
        },
      ]}
      update={true}
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
        // {
        //   label: "توضیحات",
        //   name: "description",
        //   validation: yup.string().required("توضیحات اجباری است"),
        //   type: "editor",
        //   cardKey: "1",
        //   col: "col-span-12",
        // },
        // {
        //   label: "راهنما",
        //   name: "guidance",
        //   validation: yup.string().required("راهنما اجباری است"),
        //   type: "editor",
        //   cardKey: "1",
        //   col: "col-span-12",
        // },
        {
          label: "تصویر",
          name: "image",
          type: "fileUploader",
          validation: yup.mixed().required("تصویر اجباری است"),
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "دسته بندی",
          name: "category_id",
          validation: yup.string().required("دسته بندی اجباری است"),
          type: "selectApi",
          cardKey: "1",
          col: "col-span-12",
          api: {
            keys: ["categories"],

            sort: (state) => {
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
          type: "textarea",
          label: "svg",
          name: "svg",
          col: "col-span-12",
          cardKey: "1",
        },
      ]}
    />
  );
};

export default ProductUpdate;
