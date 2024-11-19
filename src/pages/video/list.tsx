import CustomTable from "../../components/table";

const VideoList = () => {
  return (
    <>
      <CustomTable
        add="/videos-create"
        accessAdd={"admin_video_create"}
        title="لیست ویدیو"
        subTitle="ویدیو"
        api={{ route: "/videos" }}
        sort={(state) => {
          return {
            ...state,
          };
        }}
        headers={[
          {
            key: "title",
            title: "عنوان",
          },
          {
            key: "",
            title: "عملیات",
            type: "operation",
            options: [
              {
                title: "ویرایش",
                type: "edit",
                route: "/videos-list/:id",
                accessKey: "admin_video_read",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/videos",
                accessKey: "admin_video_delete",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default VideoList;
