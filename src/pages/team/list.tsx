import CustomTable from "../../components/table";

const TeamList = () => {
  return (
    <>
      <CustomTable
        add="/team-create"
        title="لیست اعضا"
        subTitle="اعضا"
        api={{ route: "/team-info" }}
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
                route: "/team-info",
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
