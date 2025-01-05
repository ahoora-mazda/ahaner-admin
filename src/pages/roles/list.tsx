import CustomTable from "../../components/table";

const RoleList = () => {
  return (
    <>
      <CustomTable
        add="/role-create"
        accessAdd={"admin_role_create"}
        title="لیست نقش ها"
        subTitle="نقش ها"
        api={{ route: "/roles" }}
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
            key: "title",
            title: "عنوان",
          },

          {
            key: "",
            title: "عملیات",
            type: "operation",
            options: [
              {
                title: "ویرایش",
                type: "edit",
                route: "/role-list/:id",
                accessKey: "admin_role_read",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/roles",
                accessKey: "admin_role_delete",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default RoleList;
