import * as yup from "yup";
import CustomForm from "../../components/form";
import { useNavigate } from "react-router-dom";

const BlogSlidersCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/blog-slider-list");
      }}
      title="ایجاد اسلایدر مقاله ها"
      btn={{ text: "ایجاد اسلایدر مقاله" }}
      api={{ route: "/admin/blog_sliders" }}
      cards={[
        {
          title: "اطلاعات اسلایدر مقاله",
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
          col: "col-span-12",
        },
        {
          label: "لینک",
          name: "link",
          validation: yup.string().required("عنوان اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12",
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
            route: "/admin/blog_sliders/create",
            sort: state => {
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

export default BlogSlidersCreate;
