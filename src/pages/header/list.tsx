import CustomTable from "../../components/table";

const HeaderLists = () => {
  return (
    <>
      <CustomTable
        add="/header-create"
        title="لیست هدر"
        subTitle="هدر"
        api={{ route: "/admin/headeritems" }}
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
            key: "title",
            title: "عنوان",
            filterType: "input",
            keyFilter: "text",
          },
          {
            key: "link",
            title: "لینک",
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
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/admin/headers",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default HeaderLists;
