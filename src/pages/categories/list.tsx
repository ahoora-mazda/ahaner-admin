import CustomTable from "../../components/table";
import { combineImageUrl } from "../../utils/function";

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
            image: combineImageUrl(state.image),
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
            key: "name",
            title: "عنوان",
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
