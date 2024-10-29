import CustomTable from "../../components/table";

const PropertyList = () => {
  return (
    <>
      <CustomTable
        add="/property-create"
        title="لیست ویژگی محصول"
        subTitle="ویژگی محصول"
        api={{ route: "/properties" }}
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
            // filterType: "input",
            // keyFilter: "text",
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
