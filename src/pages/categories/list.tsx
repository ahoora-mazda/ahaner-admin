import Badge from "../../components/badge";
import CustomTable from "../../components/table";

const CategoriesList = () => {
  return (
    <>
      <CustomTable
        add="/category-create"
        title="لیست دسته بندی ها"
        subTitle="دسته بندی ها"
        api={{ route: "/admin/categories" }}
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
            key: "image",
            title: "تصویر",
            type: "image",
          },
          {
            key: "title",
            title: "عنوان",
            filterType: "input",
            keyFilter: "text",
          },
          {
            key: "slug",
            title: "اسلاگ",
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
                route: "/admin/categories",
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
