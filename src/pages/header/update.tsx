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
        route: "/admin/headeritems",
        get: "/admin/headeritems/:id",
        update: "/admin/headeritems/:id",
      }}
      accessUpdate={"permission_update"}
      onEnd={() => {
        navigate("/header-list");
      }}
      sortGet={(state) => {
        return {
          ...state,
          inner_link: state.inner_link === "true" ? true : false,
        };
      }}
      sortUpdate={(state) => {
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
          validation: yup.string().required("عنوان اجباری است"),
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
          label: "والد لینک",
          name: "item_id",
          type: "selectApi",
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
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
        },
      ]}
    />
  );
};

export default HeaderUpdate;
