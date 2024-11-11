import CustomTable from "../../components/table";

const PropertyList = () => {
  return (
    <>
      <CustomTable
        add="/property-create"
        title="لیست ویژگی محصول"
        subTitle="ویژگی محصول"
        api={{ route: "/properties" }}
        search={{}}
        sort={(state) => {
          return {
            ...state,
            categories_count: state.categories_count || "0",
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
            sort: {
              key: "name",
            },
            isSearchAble: true,
          },
          {
            key: "categories_count",
            title: "تعداد دسته بندی",
            sort: {
              key: "categories_count",
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
                route: "/property-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/properties",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default PropertyList;
