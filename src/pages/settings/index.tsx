import React from "react";
import CustomForm from "../../components/form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const SettingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <CustomForm
        onEnd={() => {
          navigate("/");
        }}
        title="ویرایش تنظیمات"
        btn={{ text: "ویرایش تنظیمات" }}
        api={{
          route: "/admin/settings",
          get: "/admin/settings/1",
          update: "/admin/settings/1",
        }}
        cards={[
          {
            title: "اطلاعات تنظیمات",
            key: "1",
          },
        ]}
        update
        accessUpdate={"permission_update"}
        sortUpdate={state => {
          return {
            ...state,
            seo: {
              title: state.title_s,
              description: state.desc_s,
              schema: state.schema,
            },
          };
        }}
        sortGet={state => {
          return {
            ...state,
            title_s: state?.seo?.title,
            schema: state?.seo?.schema,
            desc_s: state?.seo?.description,
          };
        }}
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
            label: "توضیحات",
            name: "title",
            validation: yup.string().required("توضیحات اجباری است"),
            type: "textarea",
            cardKey: "1",
            col: "col-span-12",
          },
          {
            label: "لوگو",
            name: "logo",
            validation: yup.mixed().required("لوگو اجباری است"),
            type: "fileUploader",
            cardKey: "1",
            col: "col-span-12",
          },
          {
            label: "لوگو دکستاپ",
            name: "big_logo",
            validation: yup.mixed().required("لوگو اجباری است"),
            type: "fileUploader",
            cardKey: "1",
            col: "col-span-12",
          },
          {
            label: "لوگو موبایل",
            name: "small_logo",
            validation: yup.mixed().required("لوگو اجباری است"),
            type: "fileUploader",
            cardKey: "1",
            col: "col-span-12",
          },
          {
            label: "عنوان سئو",
            name: "title_s",
            type: "input",
            cardKey: "1",
            col: "col-span-12",
          },
          {
            label: "توضیحات سئو",
            name: "desc_s",
            type: "textarea",
            cardKey: "1",
            col: "col-span-12",
          },
          {
            label: "schema",
            name: "schema",
            type: "textarea",
            cardKey: "1",
            col: "col-span-12",
          },
        ]}
      />
    </div>
  );
};

export default SettingPage;
