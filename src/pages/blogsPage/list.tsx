import CustomTable from "../../components/table";

const BlogsPageList = () => {
  return (
    <>
      <CustomTable
        add="/blogs-page-create"
        title="لیست صفحه اصلی مقالات"
        subTitle="صفحه اصلی مقالات"
        api={{ route: "/admin/category_blogs" }}
        sort={state => {
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
            key: "title",
            title: "عنوان",
          },
          {
            key: "tag",
            title: "تگ",
          },
          {
            key: "description",
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
                route: "/blogs-page-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/admin/category_blogs",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default BlogsPageList;
