import CustomTable from "../../../components/table";

const FooterList = () => {
  return (
    <>
      <CustomTable
        add="/footer-create"
        title="لیست فوتر"
        subTitle="فوتر"
        api={{ route: "/admin/footers" }}
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
            key: "",
            title: "عملیات",
            type: "operation",
            options: [
              {
                title: "ویرایش",
                type: "edit",
                route: "/footer-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/admin/footers",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default FooterList;
