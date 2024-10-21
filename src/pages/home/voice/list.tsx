import CustomTable from "../../../components/table";

const HomeVoiceList = () => {
  return (
    <>
      <CustomTable
        add="/voice-create"
        title="لیست پادکست صفحه اصلی"
        subTitle="پادکست صفحه اصلی"
        api={{ route: "/admin/voices" }}
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
            key: "voice",
            title: "آدرس فایل",
          },
          {
            key: "",
            title: "عملیات",
            type: "operation",
            options: [
              {
                title: "حذف",
                type: "delete",
                route: "/admin/voices",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default HomeVoiceList;
