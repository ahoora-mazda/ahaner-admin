import CustomTable from "../../components/table";

const BlogList = () => {
  return (
    <>
      <CustomTable
        add="/blog-create"
        accessAdd={"admin_blog_create"}
        title="لیست مقالات"
        subTitle="مقالات"
        api={{ route: "/blog" }}
        search={{}}
        sort={(state) => {
          return {
            ...state,
            views: state.views || "0",
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
            sort: {
              key: "title",
            },
            isSearchAble: true,
          },
          {
            key: "slug",
            title: "slug",
            isSearchAble: true,
          },
          {
            key: "views",
            title: "تعداد مشاهده",
            sort: {
              key: "views",
            },
          },
          {
            key: "created_at",
            title: "تاریخ ایجاد",
            type: "date",
            sort: {
              key: "date",
            },
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
                accessKey: "admin_blog_read",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/blog",
                accessKey: "admin_blog_delete",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default BlogList;
