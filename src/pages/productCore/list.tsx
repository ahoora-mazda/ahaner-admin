import CustomTable from "../../components/table";

const ProductCoreList = () => {
  return (
    <>
      <CustomTable
        add="/product-core-create"
        title="لیست محصولات اصلی"
        accessAdd={"admin_product_core_create"}
        subTitle="محصولات اصلی"
        api={{ route: "/product-core" }}
        sort={(state) => {
          return {
            ...state,
            products_count: state.products_count || "0",
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
            key: "name",
            title: "عنوان",
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
            key: "products_count",
            title: "تعداد محصول",
            sort: {
              key: "products_count",
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
                route: "/product-core-list/:id",
                accessKey: "admin_product_core_read",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/product-core",
                accessKey: "admin_product_core_delete",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default ProductCoreList;
