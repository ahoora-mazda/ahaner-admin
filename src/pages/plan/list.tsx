import Badge from "../../components/badge";
import CustomTable from "../../components/table";

const PlanList = () => {
  return (
    <>
      <CustomTable
        add="/plan-create"
        title="لیست پلن"
        subTitle="پلن"
        api={{ route: "/admin/plans" }}
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
            key: "",
            title: "عملیات",
            type: "operation",
            options: [
              {
                title: "ویرایش",
                type: "edit",
                route: "/plan-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/admin/plans",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default PlanList;
