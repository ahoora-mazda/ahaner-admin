import CustomTable from "../../components/table";

const AdminList = () => {
  return (
    <>
      <CustomTable
        add="/team-create"
        title="لیست مدیران"
        accessAdd={'admin_team_info_create'}
        subTitle="مدیران"
        api={{ route: "/admins" }}
        sort={(state) => {
          return {
            ...state,
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
            key: "field",
            title: "بخش",
            isSearchAble: true,
          },
          {
            key: "phone_number",
            title: "داخلی کارشناس",
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
