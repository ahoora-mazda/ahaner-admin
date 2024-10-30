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
      api={{ route: "/categories" }}
      cards={[
        {
          title: "اطلاعات دسته بندی",
          key: "1",
        },
      ]}
      sortUpdate={(state) => {
        return {
          ...state,
        };
      }}
      elements={[
        {
          label: "عنوان",
          name: "name",
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
          help: "انگلیسی وارد کنید و فاصله را با - وارد کنید",
        },
        {
          type: "multiSelectApi",
          label: "ویژگی ها",
          name: "properties",
          validation: yup.mixed().required("ویژگی ها اجباری است"),
          api: {
            keys: ["properties"],
            sort: (state) => {
              return state.properties;
            },
          },
          col: "col-span-12",
          cardKey: "1",
          help: "ترتیب انتخاب٬ همان ترتیب نمایش جدول است",
        },
        {
          name: "description",
          label: "توضیحات",
          cardKey: "1",
          type: "editor",
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
        {
          name: "seo_title",
          label: "عنوان صفحه",
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          name: "seo_description",
          label: "توضیحات صفحه",
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },

        {
          name: "seo_schema",
          label: "schema",
          cardKey: "1",
          type: "textarea",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default CategoryCreate;
