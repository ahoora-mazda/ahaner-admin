import CustomTable from "../../components/table";

const BlogList = () => {
  return (
    <>
      <CustomTable
        add="/blog-create"
        title="لیست مقالات"
        subTitle="مقالات"
        api={{ route: "/blog" }}
        sort={(state) => {
          return {
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
            key: "image",
            title: "تصویر",
            type: "image",
          },
          {
            key: "title",
            title: "عنوان",
          },
          {
            key: "slug",
            title: "slug",
          },
          {
            key: "short_content",
            title: "توضیحات",
          },

          {
            key: "",
            title: "عملیات",
            type: "operation",
            options: [
              {
                title: "ویرایش",
                type: "edit",
                route: "/blog-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/blog",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default BlogList;
