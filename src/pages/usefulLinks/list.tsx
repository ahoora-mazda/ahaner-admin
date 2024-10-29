import CustomTable from "../../components/table";

const UsefulLinksList = () => {
  return (
    <>
      <CustomTable
        add="/usefullinks-create"
        title="لیست لینک های مفید"
        subTitle="لینک های مفید"
        api={{ route: "/usefullinks" }}
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
                route: "/usefullinks-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/usefullinks",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default UsefulLinksList;
