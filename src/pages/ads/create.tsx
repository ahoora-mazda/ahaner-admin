import * as yup from "yup";
import CustomForm from "../../components/form";
import { useNavigate } from "react-router-dom";

const AdsCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/ads-list");
      }}
      title="ایجاد تبلیغات"
      btn={{ text: "ایجاد تبلیغات" }}
      api={{ route: "/ads" }}
      cards={[
        {
          title: "اطلاعات تبلیغات",
          key: "1",
        },
      ]}
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
          name: "image",
          validation: yup.mixed().required("تصویر اجباری است"),
          label: "تصویر",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default AdsCreate;
