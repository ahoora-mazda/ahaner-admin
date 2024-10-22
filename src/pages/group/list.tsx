import CustomTable from "../../components/table";

const GroupList = () => {
  return (
    <>
      <CustomTable
        add="/group-create"
        title="لیست گروه ها"
        subTitle="گروه ها"
        api={{ route: "/admin/groups" }}
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
            key: "image",
            title: "تصویر",
            type: "image",
          },
          {
            key: "title",
            title: "عنوان",
            filterType: "input",
            keyFilter: "text",
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
                route: "/admin/groups",
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
