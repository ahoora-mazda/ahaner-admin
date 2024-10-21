import React from "react";
import CustomForm from "../../components/form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const HeaderUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ویرایش هدر"
      btn={{ text: "ویرایش هدر" }}
      api={{
        route: "/admin/headers",
        get: "/admin/headers/:id",
        update: "/admin/headers/:id",
      }}
      accessUpdate={"permission_update"}
      onEnd={() => {
        navigate("/header-list");
      }}
      sortGet={state => {
        return {
          ...state,
          inner_link: state.inner_link === "true" ? true : false,
        };
      }}
      sortUpdate={state => {
        return { ...state, inner_link: state.inner_link ? "yes" : "no" };
      }}
      cards={[
        {
          title: "اطلاعات هدر",
          key: "1",
        },
      ]}
      update={true}
      elements={[
        {
          label: "عنوان",
          name: "title",
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
        },
        {
          label: "لینک",
          name: "link",
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
        },
        {
          label: "والد هدر",
          name: "header_id",
          type: "selectApi",
          api: {
            route: "/admin/headers/create",
            sort: state => {
              return state.map((ele: any) => {
                return {
                  value: ele.id,
                  label: ele.title,
                };
              });
            },
          },
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
        },
        {
          label: "جزییات",
          name: "info",
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "توضیحات",
          name: "description",
          type: "textarea",
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
        {
          label: "لینک داخلی",
          name: "inner_link",
          cardKey: "1",
          type: "checkbox",
          defaultValue: true,
        },
      ]}
    />
  );
};

export default HeaderUpdate;
