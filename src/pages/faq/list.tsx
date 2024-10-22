import Badge from "../../components/badge";
import CustomTable from "../../components/table";

const FaqList = () => {
  return (
    <>
      <CustomTable
        add="/faq-create"
        title="لیست سوالات متداول"
        subTitle="سوالات متداول"
        api={{ route: "/admin/questions" }}
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
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/admin/questions",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default FaqList;
