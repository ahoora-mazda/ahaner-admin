import CustomTable from "../../components/table";

const ProductList = () => {
  return (
    <>
      <CustomTable
        add="/product-create"
        accessAdd={"admin_product_create"}
        title="لیست محصولات"
        subTitle="محصولات"
        api={{ route: "/products" }}
        search={{}}
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
                route: "/product-list/:id",
                accessKey: "admin_product_read",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/products",
                accessKey: "admin_product_delete",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default ProductList;
