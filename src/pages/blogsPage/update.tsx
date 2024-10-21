import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";
const BlogsPageUpdate = () => {
  const navigate = useNavigate();

  return (
    <CustomForm
      onEnd={() => {
        navigate("/blogs-page-list");
      }}
      title="ویرایش صفحه اصلی مقالات"
      btn={{ text: "ویرایش صفحه اصلی مقالات" }}
      api={{
        route: "/admin/category_blogs",
        get: "/admin/category_blogs/:id",
        update: "/admin/category_blogs/:id",
      }}
      // notSerialize
      update
      accessUpdate={"dwa"}
      sortUpdate={(state) => {
        return {
          ...state,
        };
      }}
      sortGet={(state) => {
        return { ...state, blog_id: state.blogs.map((ele: any) => ele.id) };
      }}
      cards={[
        {
          title: "اطلاعات صفحه اصلی مقالات",
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
          col: "col-span-12 md:col-span-6",
        },
        {
          label: "تگ",
          name: "tag",
          validation: yup.string().required("تگ اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
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
          label: "تصویر",
          name: "image",
          type: "fileUploader",
          validation: yup.mixed().required("تصویر اجباری است"),
          cardKey: "1",
          col: "col-span-12",
          route: "/admin/blogs/upload",
        },
        {
          label: "مقالات",
          name: "blog_id",
          validation: yup
            .array()
            .of(yup.number())
            .required("مقالات اجباری است"),
          type: "multiSelectApi",
          cardKey: "1",
          col: "col-span-12",
          api: {
            route: "/admin/category_blogs/create",
            sort: (state) => {
              return state.map((ele: any) => {
                return {
                  value: ele.id,
                  label: ele.title,
                };
              });
            },
          },
        },
      ]}
    />
  );
};

export default BlogsPageUpdate;
