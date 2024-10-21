import CustomTable from "../../../components/table";

const HomeVideoList = () => {
  return (
    <>
      <CustomTable
        add="/home/videos-create"
        title="لیست ویدیو های صفحه اصلی"
        subTitle="ویدیو های صفحه اصلی"
        api={{ route: "/admin/home_videos" }}
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
            key: "video",
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
                route: "/admin/home_videos",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default HomeVideoList;
