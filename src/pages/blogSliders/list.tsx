import Badge from "../../components/badge";
import CustomTable from "../../components/table";

const BlogSlidersList = () => {
  return (
    <>
      <CustomTable
        add="/blog-slider-create"
        title="لیست اسلایدر مقالات"
        subTitle="اسلایدر مقاله"
        api={{ route: "/admin/blog_sliders" }}
        sort={state => {
          return {
            ...state.blog,
            ...state,
          };
        }}
        headers={[
          {
            title: "ردیف",
            type: "_idx",
            key: "",
            filterType: "sort",
          },
          {
            key: "title",
            title: "عنوان اسلایدر",
            filterType: "input",
            keyFilter: "text",
          },
          {
            key: "",
            title: "عملیات",
            type: "operation",
            options: [
              {
                title: "ویرایش",
                type: "edit",
                route: "/blog-slider-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/admin/blog_sliders",
                accessKey: "cheque_remove",
              },
            
            ],
          },
        ]}
      />
    </>
  );
};

export default BlogSlidersList;
