import CustomTable from "../../components/table";

const HeaderLists = () => {
  return (
    <>
      <CustomTable
        add="/header-create"
        title="لیست هدر"
        subTitle="هدر"
        api={{ route: "/headers" }}
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
            key: "url",
            title: "آدرس",
          },
          {
            key: "",
            title: "عملیات",
            type: "operation",
            options: [
              {
                title: "ویرایش",
                type: "edit",
                route: "/header-list/:id",
                accessKey: "admin_header_read",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/headers",
                accessKey: "admin_header_delete",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default HeaderLists;
