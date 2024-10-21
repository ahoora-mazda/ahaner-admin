import * as yup from "yup";
import CustomForm from "../../../components/form";
import { useNavigate } from "react-router-dom";

const HomeProductCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/home/products-list");
      }}
      title="ایجاد محصول صفحه اصلی"
      btn={{ text: "ایجاد محصول صفحه اصلی" }}
      api={{ route: "/admin/home_products" }}
      cards={[
        {
          title: "اطلاعات محصول صفحه اصلی",
          key: "1",
        },
      ]}
      elements={[
        {
          label: "عنوان",
          name: "title",
          validation: yup.string().required("نام و نام خانوادگی اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
        },
        {
          label: "تگ",
          name: "tag",
          validation: yup.string().required("متن اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
        },
        {
          label: "لینک",
          name: "link",
          validation: yup.string().required("متن اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
        },
        {
          label: "توضیحات",
          name: "description",
          validation: yup.string().required("متن اجباری است"),
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },
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

export default HomeProductCreate;
