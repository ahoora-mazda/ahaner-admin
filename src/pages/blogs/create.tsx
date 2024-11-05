import * as yup from "yup";
import CustomForm from "../../components/form";
import { useNavigate } from "react-router-dom";

const BlogCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/blog-list");
      }}
      title="ایجاد مقاله ها"
      btn={{ text: "ایجاد مقاله" }}
      api={{ route: "/blog" }}
      cards={[
        {
          title: "اطلاعات مقاله",
          key: "1",
        },
      ]}
      sortUpdate={(state) => {
        return {
          ...state,
          seo: {
            title: state.title_s,
            description: state.desc_s,
            schema: state.schema,
          },
        };
      }}
      isProgress
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
        {
          label: "زمان خواندن",
          name: "time",
          validation: yup.string().required("زمان خواندن اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
        },

        {
          label: "دسته بندی",
          name: "category_id",
          validation: yup.string().required("دسته بندی اجباری است"),
          type: "selectApi",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
          api: {
            keys: ["categories"],
            sort: (state) => {
              return state.categories;
            },
          },
        },

        {
          label: "توضیحات",
          name: "short_content",
          validation: yup.string().required("توضیحات اجباری است"),
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "متن",
          name: "content",
          validation: yup.string().required("متن اجباری است"),
          type: "editor",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "وضعیت",
          name: "status",
          type: "select",
          cardKey: "1",
          validation: yup.string().required("وضعیت اجباری است"),
          col: "col-span-12",
          options: [
            { label: "فعال", value: "active" },
            { label: "غیر فعال", value: "inactive" },
          ],
        },

        {
          label: "تصویر",
          name: "image",
          type: "fileUploader",
          validation: yup.mixed().required("تصویر اجباری است"),
          cardKey: "1",
          col: "col-span-12",
          route: "/blogs/upload",
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
  );
};

export default BlogCreate;
