import CustomTable from "../../../components/table";

const HomeProductList = () => {
  return (
    <>
      <CustomTable
        add="/home/products-create"
        title="لیست محصولات صفحه اصلی"
        subTitle="محصولات صفحه اصلی"
        api={{ route: "/admin/home_products" }}
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
                title: "حذف",
                type: "delete",
                route: "/admin/home_products",
                accessKey: "cheque_remove",
              },
              {
                title: "ویرایش",
                type: "edit",
                route: "/home/products-list/:id",
                accessKey: "permission_show",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default HomeProductList;
