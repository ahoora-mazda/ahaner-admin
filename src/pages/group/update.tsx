import React from "react";
import CustomForm from "../../components/form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const GroupUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ایجاد کشور"
      btn={{ text: "ویرایش کشور" }}
      api={{
        route: "/admin/groups",
        get: "/admin/groups/:id",
        update: "/admin/groups/:id",
      }}
      accessUpdate={"permission_update"}
      onEnd={() => {
        navigate("/group-list");
      }}
      cards={[
        {
          title: "اطلاعات کشور",
          key: "1",
        },
      ]}
      update={true}
      sortGet={state => {
        return {
          ...state,
          product_id: state.group_products.map((ele: any) => +ele.product_id),
        };
      }}
      elements={[
        {
          label: "محصول",
          name: "product_id",
          validation: yup.array().of(yup.number()).required("محصول اجباری است"),
          type: "multiSelectApi",
          cardKey: "1",
          col: "col-span-12 md:col-span-12",
          api: {
            route: "/admin/groups/create",
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
          label: "عنوان",
          name: "title",
          validation: yup.string().required("عنوان اجباری است"),
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "تصویر",
          name: "image",
          validation: yup.mixed().required("تصویر اجباری است"),
          type: "fileUploader",
          cardKey: "1",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default GroupUpdate;
