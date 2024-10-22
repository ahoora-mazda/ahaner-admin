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
      sortUpdate={(state) => {
        return {
          ...state,
          seo: {
            title: state.title_seo,
            description: state.description_seo,
            schema: state.schema,
          },
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
          label: "والد دسته بندی",
          name: "category_id",
          type: "selectApi",
          api: {
            keys: ["categories"],
            sort: (state) => {
              console.log({ state });
              return state.categories.map((ele: any) => {
                return {
                  value: ele.value,
                  label: ele.label,
                };
              });
            },
          },
          cardKey: "1",
          col: "col-span-12",
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
          name: "title_seo",
          label: "عنوان صفحه",
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          name: "description_seo",
          label: "توضیحات صفحه",
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },
        
        {
          name: "schema",
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
