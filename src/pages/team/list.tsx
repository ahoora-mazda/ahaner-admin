import CustomTable from "../../components/table";

const TeamList = () => {
  return (
    <>
      <CustomTable
        add="/team-create"
        title="لیست اعضا"
        accessAdd={'admin_team_info_create'}
        subTitle="اعضا"
        api={{ route: "/team-info" }}
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
                route: "/team-list/:id",
                accessKey: "admin_team_info_read",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/team-info",
                accessKey: "admin_team_info_delete",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default TeamList;
