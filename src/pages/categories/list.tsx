import CustomTable from "../../components/table";

const CategoriesList = () => {
  return (
    <>
      <CustomTable
        add="/category-create"
        title="لیست دسته بندی ها"
        subTitle="دسته بندی ها"
        api={{ route: "/categories" }}
        sort={(state) => {
          return {
            ...state,
          };
        }}
        search={{}}
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
            key: "name",
            title: "عنوان",
            filterType: "input",
            sort: {
              key: "name",
            },
            isSearchAble: true,
          },
          {
            key: "slug",
            filterType: "input",
            title: "اسلاگ",
            sort: {
              key: "slug",
            },
            isSearchAble: true,
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
                route: "/category-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/categories",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default CategoriesList;
