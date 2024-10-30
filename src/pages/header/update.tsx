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
        route: "/category-views",
        get: "/category-views/:id",
        update: "/category-views/:id",
      }}
      accessUpdate={"permission_update"}
      onEnd={() => {
        navigate("/header-list");
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
          title: "اطلاعات هدر",
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
        // {
        //   label: "لینک",
        //   name: "link",
        //   type: "input",
        //   cardKey: "1",
        //   col: "col-span-12 ",
        //   help: "لینک رو داخلی وارد کنید (بدون دامین)",
        // },

        {
          label: "تصویر",
          name: "image",
          type: "fileUploader",
          validation: yup.mixed().required("تصویر اجباری است"),
          cardKey: "1",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default HeaderUpdate;
