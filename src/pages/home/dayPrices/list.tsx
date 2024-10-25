import CustomTable from "../../../components/table";

const DayPriceList = () => {
  return (
    <>
      <CustomTable
        add="/home/comments-create"
        title="لیست قیمت روز آهن آلات"
        subTitle="قیمت روز آهن آلات"
        api={{ route: "/admin/home_dayPrices" }}
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
          },
          {
            key: "link",
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
                route: "/home_dayPrices-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/admin/home_dayPrices",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default DayPriceList;
