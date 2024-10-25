import React from "react";
import CustomForm from "../../components/form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const UsefulLinkUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ایجاد لینک مفید"
      btn={{ text: "ویرایش لینک مفید" }}
      api={{
        route: "/admin/usefullinks",
        get: "/admin/usefullinks/:id",
        update: "/admin/usefullinks/:id",
      }}
      accessUpdate={"permission_update"}
      onEnd={() => {
        navigate("/usefullinks-list");
      }}
      cards={[
        {
          title: "اطلاعات لینک مفید",
          key: "1",
        },
      ]}
      update={true}
      sortUpdate={(state) => {
        return {
          ...state,
        };
      }}
      elements={[
        {
          label: "عنوان",
          name: "text",
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
          cardKey: "1",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default UsefulLinkUpdate;
