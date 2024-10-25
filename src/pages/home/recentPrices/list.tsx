import CustomTable from "../../../components/table";

const MomentPriceList = () => {
  return (
    <>
      <CustomTable
        add="/home_momentPrices-create"
        title="لیست قیمت روز محصولات"
        subTitle="قیمت روز محصولات"
        api={{ route: "/admin/home_momentPrices" }}
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
                route: "/home_momentPrices-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/admin/home_momentPrices",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default MomentPriceList;
