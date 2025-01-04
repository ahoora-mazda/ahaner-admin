import React from "react";
import CustomForm from "../../components/form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const RoleUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ویرایش هدر"
      btn={{ text: "ویرایش هدر" }}
      api={{
        route: "/headers",
        get: "/headers/:id",
        update: "/headers/:id",
      }}
      accessUpdate={"admin_admin_update"}
      onEnd={() => {
        navigate("/header-list");
      }}
      sortGet={(state) => {
        return {
          ...state,
        };
      }}
      sortUpdate={(state) => {
        if (
          typeof state.parent_id === "string" ||
          typeof state.parent_id === "number"
        ) {
          return { ...state };
        }
        delete state.parent_id;
        return { ...state };
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
          validation: yup.string().required("عنوان اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "آدرس",
          name: "url",
          validation: yup.string().required("آدرس اجباری است"),
          type: "input",
          ltr: true,
          cardKey: "1",
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
          type: "selectApi",
          label: "والد",
          name: "parent_id",
          api: {
            keys: ["headers"],
            sort: (state) => {
              return state.headers;
            },
          },
          col: "col-span-12",
          cardKey: "1",
        },
        {
          type: "fileUploader",
          cardKey: "1",
          // validation: yup.mixed().required("تصویر اجباری است"),
          name: "image",
          label: "تصویر",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default RoleUpdate;
