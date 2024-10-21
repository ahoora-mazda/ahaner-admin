import * as yup from "yup";
import CustomForm from "../../components/form";
import { useNavigate } from "react-router-dom";

const CategoryCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/category-list");
      }}
      title="ایجاد دسته بندی ها"
      btn={{ text: "ایجاد دسته بندی" }}
      api={{ route: "/admin/categories" }}
      cards={[
        {
          title: "اطلاعات دسته بندی",
          key: "1",
        },
      ]}
      sortUpdate={state => {
        return {
          ...state,
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
          label: "اسلاگ",
          name: "slug",
          validation: yup.string().required("اسلاگ اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
        },
        // {
        //   type: "colorPicker",
        //   cardKey: "1",
        //   validation: yup.string().required("رنگ اجباری است"),
        //   col: "col-span-12 md:col-span-6",
        //   name: "color",
        //   label: "رنگ",
        // },
        // {
        //   type: "colorPicker",
        //   cardKey: "1",
        //   validation: yup.string().required("رنگ زمینه اجباری است"),
        //   name: "background_color",
        //   col: "col-span-12 md:col-span-6",
        //   label: "رنگ زمینه",
        // },
        {
          type: "fileUploader",
          cardKey: "1",
          validation: yup.mixed().required("تصویر اجباری است"),
          name: "image",
          label: "تصویر",
          col: "col-span-12",
        },
        // {
        //   label: "عنوان سئو",
        //   name: "title_s",
        //   type: "input",
        //   cardKey: "1",
        //   col: "col-span-12",
        // },
        // {
        //   label: "توضیحات سئو",
        //   name: "desc_s",
        //   type: "textarea",
        //   cardKey: "1",
        //   col: "col-span-12",
        // },
        // {
        //   label: "schema",
        //   name: "schema",
        //   type: "textarea",
        //   cardKey: "1",
        //   col: "col-span-12",
        // },
      ]}
    />
  );
};

export default CategoryCreate;
