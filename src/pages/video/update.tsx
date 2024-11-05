import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";

const VideoUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ویرایش ویدیو"
      btn={{ text: "ویرایش ویدیو" }}
      api={{
        route: "/videos",
        get: "/videos/:id",
        update: "/videos/:id",
      }}
      accessUpdate={"permission_update"}
      onEnd={() => {
        navigate("/videos-list");
      }}
      cards={[
        {
          title: "اطلاعات ویدیو",
          key: "1",
        },
      ]}
      sortUpdate={(state) => {
        return {
          ...state,
        };
      }}
      update={true}
      sortGet={(state) => {
        return {
          ...state,
          video: state.url,
        };
      }}
      isProgress
      elements={[
        {
          name: "title",
          label: "عنوان",
          cardKey: "1",
          col: "col-span-12",
          validation: yup.string().required("عنوان اجباری است"),
          type: "input",
        },
        {
          name: "content",
          cardKey: "1",
          label: "محتوا",
          col: "col-span-12",
          type: "textarea",
        },
        {
          label: "دسته بندی",
          name: "category_id",
          validation: yup.string().required("دسته بندی اجباری است"),
          type: "selectApi",
          cardKey: "1",
          col: "col-span-12",
          api: {
            keys: ["categories"],
            sort: (state) => {
              return state.categories;
            },
          },
        },
        {
          label: "ویدیو",
          name: "video",
          type: "fileUploader",
          validation: yup.mixed().required("ویدیو اجباری است"),
          cardKey: "1",
          col: "col-span-12",
          route: "/blogs/upload",
        },
      ]}
    />
  );
};

export default VideoUpdate;
