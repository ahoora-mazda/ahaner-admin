import CustomTable from "../../../components/table";

const HomeCategoryLists = () => {
  return (
    <>
      <CustomTable
        add="/header-create"
        title="لیست دسته بندی صفحه اصلی"
        subTitle="دسته بندی صفحه اصلی"
        api={{ route: "/category-views?view_type=landing" }}
        sort={(state) => {
          return {
            ...state.Category,
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
            key: "name",
            title: "عنوان",
          },
    
          {
            key: "",
            title: "عملیات",
            type: "operation",
            options: [
              {
                title: "ویرایش",
                type: "edit",
                route: "/home-category-list/:id",
                accessKey: "admin_category_view_read",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/category-views",
                accessKey: "admin_category_view_delete",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default HomeCategoryLists;
