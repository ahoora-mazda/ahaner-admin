import CustomTable from "../../components/table";

const VideoList = () => {
  return (
    <>
      <CustomTable
        add="/videos-create"
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
                accessKey: "permission_show",
              },
              {
                title: "حذف",
                type: "delete",
                route: "/videos",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default VideoList;
