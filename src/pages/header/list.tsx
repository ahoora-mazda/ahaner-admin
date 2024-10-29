import CustomTable from "../../components/table";

const HeaderLists = () => {
  return (
    <>
      <CustomTable
        add="/header-create"
        title="لیست هدر"
        subTitle="هدر"
        api={{ route: "/headeritems" }}
        sort={(state) => {
          return {
            ...state,
            parent: state.parent?.title || "والد ندارد",
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
            filterType: "input",
            keyFilter: "text",
          },
          {
            key: "link",
            title: "لینک",
          },
          {
            key: "parent",
            title: "والد",
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
                route: "/headeritems",
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
