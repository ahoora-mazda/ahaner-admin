import CustomTable from "../../components/table";

const UserList = () => {
  return (
    <>
      <CustomTable
        add="/user-create"
        title="لیست کاربران"
        subTitle="کاربران"
        api={{ route: "/users" }}
        sort={(state) => {
          return {
            ...state,
          };
        }}
        headers={[
          {
            key: "full_name",
            title: "نام و نام خانوادگی",
          },
          {
            key: "mobile",
            title: "موبایل",
          },
          {
            key: "email",
            title: "ایمیل",
          },
          {
            key: "",
            title: "عملیات",
            type: "operation",
            options: [
              {
                title: "ویرایش",
                type: "edit",
                route: "/user-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/users",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default UserList;
