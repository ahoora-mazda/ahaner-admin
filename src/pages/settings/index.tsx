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
        accessUpdate={"admin_settings_create_or_update"}
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
            label: "محصول صفحه اصلی",
            name: "landing_product_id",
            type: "selectApi",
            api: {
              keys: ["products"],
              sort: (state) => {
                return state.products;
              },
            },
            cardKey: "1",
            validation: yup.string().required("محصول صفحه اصلی اجباری است"),
            col: "col-span-12",
          },
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
            help: "اگر وارد می‌کنید، لینک تلگرام باید با 'https://t.me/' شروع شود.",
            validation: yup
              .string()
              .nullable()
              .notRequired()
              .test(
                "is-valid-telegram-link",
                "لینک تلگرام باید با 'https://t.me/' شروع شود",
                (value) => !value || /^https:\/\/t\.me\/.+/.test(value) // فقط بررسی شود اگر مقدار وجود داشته باشد
              ),
            col: "col-span-12",
            cardKey: "1",
          },
          {
            name: "instagram",
            label: "لینک اینستاگرام",
            type: "input",
            help: "اگر وارد می‌کنید، لینک اینستاگرام باید با 'https://instagram.com/' شروع شود.",
            validation: yup
              .string()
              .nullable()
              .notRequired()
              .test(
                "is-valid-instagram-link",
                "لینک اینستاگرام باید با 'https://instagram.com/' شروع شود",
                (value) =>
                  !value || /^https:\/\/(www\.)?instagram\.com\/.+/.test(value)
              ),
            col: "col-span-12",
            cardKey: "1",
          },
          {
            name: "whatsapp",
            label: "لینک واتساپ",
            type: "input",
            help: "اگر وارد می‌کنید، لینک واتساپ باید با 'https://wa.me/' شروع شود و شماره تلفن را شامل باشد.",
            validation: yup
              .string()
              .nullable()
              .notRequired()
              .test(
                "is-valid-whatsapp-link",
                "لینک واتساپ باید با 'https://wa.me/' شروع شود و شامل شماره تلفن باشد",
                (value) => !value || /^https:\/\/wa\.me\/\d+/.test(value)
              ),
            col: "col-span-12",
            cardKey: "1",
          },
          {
            name: "facebook",
            label: "لینک فیسبوک",
            type: "input",
            help: "اگر وارد می‌کنید، لینک فیسبوک باید با 'https://facebook.com/' شروع شود.",
            validation: yup
              .string()
              .nullable()
              .notRequired()
              .test(
                "is-valid-facebook-link",
                "لینک فیسبوک باید با 'https://facebook.com/' شروع شود",
                (value) =>
                  !value || /^https:\/\/(www\.)?facebook\.com\/.+/.test(value)
              ),
            col: "col-span-12",
            cardKey: "1",
          },
          {
            name: "twitter",
            label: "لینک توییتر",
            type: "input",
            help: "اگر وارد می‌کنید، لینک توییتر باید با 'https://twitter.com/' شروع شود.",
            validation: yup
              .string()
              .nullable()
              .notRequired()
              .test(
                "is-valid-twitter-link",
                "لینک توییتر باید با 'https://twitter.com/' شروع شود",
                (value) =>
                  !value || /^https:\/\/(www\.)?twitter\.com\/.+/.test(value)
              ),
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
