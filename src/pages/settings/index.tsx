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
          route: "/settings/1",
          get: "/settings",
          update: "/settings?id=1",
        }}
        cards={[
          {
            title: "اطلاعات تنظیمات",
            key: "1",
          },
        ]}
        notSerialize
        update
        accessUpdate={"permission_update"}
        sortUpdate={(state) => {
          return {
            address: state.address,
            social_medias: {
              telegram: state.telegram,
              instagram: state.instagram,
              whatsapp: state.whatsapp,
              facebook: state.facebook,
              twiter: state.twiter,
            },
            meta_data: {
              phone: state.phone,
              sub_phone: state.sub_phone,
              about_footer: state.about_footer,
              copyright: state.copyright,
              about_us: state.about_us,
            },
          };
        }}
        sortGet={(state) => {
          return {
            ...state,
            ...state.social_medias,
            ...state.meta_data,
          };
        }}
        elements={[
          {
            name: "phone",
            label: "تلفن تماس مشاوره",
            type: "input",
            validation: yup.string().required("عنوان اجباری است"),
            cardKey: "1",
            col: "col-span-12",
          },
          {
            name: "sub_phone",
            type: "input",
            label: "تلفن تماس اعلام قیمت",
            validation: yup.string().required("عنوان اجباری است"),
            col: "col-span-12",
            cardKey: "1",
          },
          {
            name: "address",
            label: "آدرس",
            type: "input",
            validation: yup.string().required("عنوان اجباری است"),
            cardKey: "1",
            col: "col-span-12",
          },
          {
            name: "telegram",
            type: "input",
            label: "لینک تلگرام",
            validation: yup.string().required("عنوان اجباری است"),
            col: "col-span-12",
            cardKey: "1",
          },
          {
            name: "instagram",
            label: "لینک اینستاگرام",
            type: "input",
            validation: yup.string().required("عنوان اجباری است"),
            col: "col-span-12",
            cardKey: "1",
          },
          {
            name: "whatsapp",
            label: "لینک واتساپ",
            type: "input",
            validation: yup.string().required("عنوان اجباری است"),
            col: "col-span-12",
            cardKey: "1",
          },
          {
            name: "facebook",
            label: "لینک فیسبوک",
            type: "input",
            validation: yup.string().required("عنوان اجباری است"),
            col: "col-span-12",
            cardKey: "1",
          },
          {
            name: "twiter",
            label: "لینک توییتر",
            type: "input",
            validation: yup.string().required("عنوان اجباری است"),
            col: "col-span-12",
            cardKey: "1",
          },
          {
            name: "about_footer",
            label: "درباره آهن یکتا فوتر",
            type: "textarea",
            validation: yup.string().required("عنوان اجباری است"),
            col: "col-span-12",
            cardKey: "1",
          },
          {
            name: "copyright",
            label: "متن کپی رایت",
            type: "textarea",
            validation: yup.string().required("عنوان اجباری است"),
            col: "col-span-12",
            cardKey: "1",
          },
          {
            name: "about_us",
            label: "درباره ما",
            type: "editor",
            validation: yup.string().required("عنوان اجباری است"),
            col: "col-span-12",
            cardKey: "1",
          },
        ]}
      />
    </div>
  );
};

export default SettingPage;
