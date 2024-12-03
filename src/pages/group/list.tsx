import CustomTable from "../../components/table";

const GroupList = () => {
  return (
    <>
      <CustomTable
        add="/group-create"
        accessAdd={'admin_group_create'}
        title="لیست گروه ها"
        subTitle="گروه ها"
        search={{}}
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
            sort: {
              key: "name",
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
                route: "/group-list/:id",
                accessKey: "admin_group_read",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/groups",
                accessKey: "admin_group_delete",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default GroupList;
