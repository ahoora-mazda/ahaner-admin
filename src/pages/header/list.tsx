import CustomTable from "../../components/table";

const HeaderLists = () => {
  return (
    <>
      <CustomTable
        add="/header-create"
        title="لیست هدر"
        subTitle="هدر"
        api={{ route: "/category-views?view_type=header" }}
        sort={(state) => {
          return {
            ...state.Category,
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
            key: "name",
            title: "عنوان",
          },
          // {
          //   key: "link",
          //   title: "لینک",
          // },
          // {
          //   key: "parent",
          //   title: "والد",
          // },
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
                route: "/category-views",
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
