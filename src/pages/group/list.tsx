import CustomTable from "../../components/table";

const GroupList = () => {
  return (
    <>
      <CustomTable
        add="/group-create"
        title="لیست گروه ها"
        subTitle="گروه ها"
        api={{ route: "/groups" }}
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
                route: "/group-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/groups",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default GroupList;
