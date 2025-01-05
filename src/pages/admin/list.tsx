import CustomTable from "../../components/table";

const AdminList = () => {
  return (
    <>
      <CustomTable
        add="/admin-create"
        title="لیست مدیران"
        accessAdd={"admin_admin_create"}
        subTitle="مدیران"
        api={{ route: "/admins" }}
        sort={(state) => {
          return {
            ...state,
            Role: state.Role.title,
          };
        }}
        search={{}}
        headers={[
          {
            key: "full_name",
            title: "نام و نام خانوادگی",
            sort: {
              key: "full_name",
            },
            isSearchAble: true,
          },

          {
            key: "mobile",
            isSearchAble: true,
            title: "موبایل",
          },
          {
            key: "Role",
            title: "نقش",
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
                route: "/admin-list/:id",
                accessKey: "admin_team_info_read",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/admins",
                accessKey: "admin_team_info_delete",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default AdminList;
