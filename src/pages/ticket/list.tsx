import CustomTable from "../../components/table";

const TicketList = () => {
  return (
    <>
      <CustomTable
        title="لیست تیکت ها"
        subTitle="تیکت ها"
        api={{ route: "/admin/tickets" }}
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
            key: "name",
            title: "نام",
          },
          {
            key: "mobile",
            title: "موبایل",
          },
          {
            key: "message",
            title: "پیام",
          },

          {
            key: "",
            title: "عملیات",
            type: "operation",
            options: [
              {
                title: "حذف",
                type: "delete",
                route: "/admin/tickets",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default TicketList;
