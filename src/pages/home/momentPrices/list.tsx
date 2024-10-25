import CustomTable from "../../../components/table";

const MomentPriceList = () => {
  return (
    <>
      <CustomTable
        add="/home/comments-create"
        title="لیست نظر صفحه اصلی"
        subTitle="نظر صفحه اصلی"
        api={{ route: "/admin/home_comments" }}
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
            key: "name",
            title: "نام و نام خانوادگی",
          },
          {
            key: "body",
            title: "متن نظر",
          },
          {
            key: "",
            title: "عملیات",
            type: "operation",
            options: [
              {
                title: "ویرایش",
                type: "edit",
                route: "/home/comments-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/admin/home_comments",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default MomentPriceList;
