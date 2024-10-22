import React from "react";
import CustomForm from "../../components/form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const GroupUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ایجاد گروه"
      btn={{ text: "ویرایش گروه" }}
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
          title: "اطلاعات گروه",
          key: "1",
        },
      ]}
      update={true}
      sortGet={(state) => {
        return {
          ...state,
          product_id: state.group_products.map((ele: any) => +ele.product_id),
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
          label: "توضیحات",
          name: "description",
          validation: yup.string().required("توضیحات اجباری است"),
          type: "editor",
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
