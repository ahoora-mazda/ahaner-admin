import React from "react";
import CustomForm from "../../../components/form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const HomeCategoryUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ویرایش دسته بندی صفحه اصلی"
      btn={{ text: "ویرایش دسته بندی صفحه اصلی" }}
      api={{
        route: "/category-views",
        get: "/category-views/:id",
        update: "/category-views/:id",
      }}
      accessUpdate={"permission_update"}
      onEnd={() => {
        navigate("/home-category-list");
      }}
      sortGet={(state) => {
        return {
          ...state,
        };
      }}
      sortUpdate={(state) => {
        return { ...state };
      }}
      cards={[
        {
          title: "اطلاعات دسته بندی صفحه اصلی",
          key: "1",
        },
      ]}
      update={true}
      elements={[
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
                };
              });
            },
          },
          cardKey: "1",
          validation: yup.string().required("دسته بندی اجباری است"),
          col: "col-span-12",
        },
        {
          label: "ترتیب",
          name: "view_order",
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "تصویر",
          name: "image",
          type: "fileUploader",
          cardKey: "1",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default HomeCategoryUpdate;
