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
          label: "عنوان",
          name: "title",
          validation: yup.string().required("عنوان اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12 ",
        },
        {
          label: "لینک",
          name: "link",
          type: "input",
          cardKey: "1",
          col: "col-span-12 ",
          help: "لینک رو داخلی وارد کنید (بدون دامین)",
        },
        {
          label: "والد لینک",
          name: "item_id",
          type: "selectApi",
          api: {
            keys: ["headerItems"],
            sort: (state) => {
              return state.headerItems;
            },
          },
          cardKey: "1",
          col: "col-span-12 ",
        },
      ]}
    />
  );
};

export default HeaderUpdate;
