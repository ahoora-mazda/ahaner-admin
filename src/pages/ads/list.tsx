import CustomTable from "../../components/table";

const AdsLists = () => {
  return (
    <>
      <CustomTable
        add="/ads-create"
        title="لیست تبلیغات"
        subTitle="تبلیغات"
        api={{ route: "/ads" }}
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
            filterType: "input",
            keyFilter: "text",
          },
          {
            key: "description",
            title: "توضیحات",
          },
          {
            key: "page",
            title: "صفحه",
            type: "enum",
            enum: {
              blogs: "مقالات",
              home: "صفحه اصلی",
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
                route: "/ads-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/ads",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default AdsLists;
