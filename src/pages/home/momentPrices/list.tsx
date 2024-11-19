import CustomTable from "../../../components/table";

const MomentPriceList = () => {
  return (
    <>
      <CustomTable
        add="/home_momentPrices-create"
        accessAdd={"admin_moment_price_create"}
        title="لیست قیمت لحظه ای و رقابتی"
        subTitle="قیمت لحظه ای و رقابتی"
        api={{ route: "/moment-prices" }}
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
            key: "image",
            title: "تصویر",
            type: "image",
          },
          {
            key: "text",
            title: "عنوان",
            isSearchAble: true,
          },
          {
            key: "",
            title: "عملیات",
            type: "operation",
            options: [
              {
                title: "ویرایش",
                type: "edit",
                route: "/home_momentPrices-list/:id",
                accessKey: "admin_moment_price_read",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/moment-prices",
                accessKey: "admin_moment_price_delete",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default MomentPriceList;
