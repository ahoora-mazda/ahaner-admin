import Badge from "../../components/badge";
import CustomTable from "../../components/table";

const FaqList = () => {
  return (
    <>
      <CustomTable
        add="/faq-create"
        accessAdd={"admin_faq_create"}
        title="لیست سوالات متداول"
        subTitle="سوالات متداول"
        api={{ route: "/faqs" }}
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
            key: "question",
            title: "سوال",
            isSearchAble: true,
          },
          {
            key: "answer",
            title: "پاسخ",
          },
          {
            key: "status",
            title: "وضعیت",
            type: "enum",
            enum: {
              inactive: "غیرفعال",
              active: "فعال",
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
                route: "/faq-list/:id",
                accessKey: "admin_faq_read",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/faqs",
                accessKey: "admin_faq_delete",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default FaqList;
