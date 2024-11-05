import CustomTable from "../../components/table";

const ProductCoreList = () => {
  return (
    <>
      <CustomTable
        add="/product-core-create"
        title="لیست محصولات اصلی"
        subTitle="محصولات اصلی"
        api={{ route: "/product-core" }}
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
                route: "/product-core-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/product-core",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default ProductCoreList;
