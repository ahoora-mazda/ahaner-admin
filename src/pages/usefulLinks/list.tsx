import CustomTable from "../../components/table";

const UsefulLinksList = () => {
  return (
    <>
      <CustomTable
        add="/usefullinks-create"
        accessAdd={'admin_useful_link_create'}
        title="لیست لینک های مفید"
        subTitle="لینک های مفید"
        api={{ route: "/useful-links" }}
        search={{}}
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
            key: "text",
            title: "عنوان",
            isSearchAble: true,
          },
          {
            key: "url",
            isSearchAble: true,
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
                route: "/usefullinks-list/:id",
                accessKey: "admin_useful_link_read",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/useful-links",
                accessKey: "admin_useful_link_delete",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default UsefulLinksList;
