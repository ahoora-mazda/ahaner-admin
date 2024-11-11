import CustomTable from "../../components/table";

const HistoryLists = () => {
  return (
    <>
      <CustomTable
        add="/history-create"
        title="لیست تاریخچه قیمت"
        subTitle="تاریخچه قیمت"
        api={{ route: "/product-price-history" }}
        sort={(state) => {
          return {
            ...state.Product,
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
            title: "محصول",
          },
          {
            key: "price",
            title: "قیمت",
            type: "price",
            sort: {
              key: "price",
            },
          },
          {
            key: "price_date",
            title: "تاریخ",
            type: "date",
            sort: {
              key: "price_date",
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
                route: "/history-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/product-price-history",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default HistoryLists;
