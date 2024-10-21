import React from "react";
import CustomForm from "../../components/form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const AdsUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ویرایش تبلیغات"
      btn={{ text: "ویرایش تبلیغات" }}
      api={{
        route: "/admin/ads",
        get: "/admin/ads/:id",
        update: "/admin/ads/:id",
      }}
      accessUpdate={"permission_update"}
      onEnd={() => {
        navigate("/ads-list");
      }}
      cards={[
        {
          title: "اطلاعات تبلیغات",
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
          label: "صفحه",
          name: "page",
          validation: yup.string().required("صفحه اجباری است"),
          type: "select",
          options: [
            { label: "صفحه اصلی", value: "home" },
            { label: "مقالات", value: "blogs" },
            { label: "محصولات", value: "product" },
          ],
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
        },
        {
          label: "لینک",
          name: "link",
          validation: yup.string().required("لینک اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
        },
        {
          label: "توضیحات",
          name: "description",
          validation: yup.string().required("توضیحات اجباری است"),
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          type: "fileUploader",
          cardKey: "1",
          validation: yup.mixed().required("تصویر اجباری است"),
          name: "image",
          label: "تصویر",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default AdsUpdate;
