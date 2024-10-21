import CustomTable from "../../../components/table";

const HomeServiceList = () => {
  return (
    <>
      <CustomTable
        add="/home/services-create"
        title="لیست خدمات صفحه اصلی"
        subTitle="خدمات صفحه اصلی"
        api={{ route: "/admin/home_services" }}
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
            key: "title",
            title: "عنوان",
          },
          {
            key: "tag",
            title: "تگ",
          },
          {
            key: "description",
            title: "توضیحات",
          },
          {
            key: "",
            title: "عملیات",
            type: "operation",
            options: [
              {
                title: "ویرایش",
                type: "edit",
                route: "/home/services-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/admin/home_services",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default HomeServiceList;
