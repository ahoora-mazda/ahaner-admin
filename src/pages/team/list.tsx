import CustomTable from "../../components/table";

const TeamList = () => {
  return (
    <>
      <CustomTable
        add="/user-create"
        title="لیست اعضا"
        subTitle="اعضا"
        api={{ route: "/teams" }}
        sort={(state) => {
          return {
            ...state,
          };
        }}
        headers={[
          {
            key: "name",
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
            key: "role",
            title: "نقش",
            type: "enum",
            enum: {
              admin: "ادمین",
              team: "تیم",
              guest: "کاربر میهمان",
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
                route: "/team-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/teams",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default TeamList;
