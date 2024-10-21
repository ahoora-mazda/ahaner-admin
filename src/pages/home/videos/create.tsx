import * as yup from "yup";
import CustomForm from "../../../components/form";
import { useNavigate } from "react-router-dom";

const HomeVideoCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/home/videos-list");
      }}
      title="ایجاد ویدیو صفحه اصلی"
      btn={{ text: "ایجاد ویدیو صفحه اصلی" }}
      api={{ route: "/admin/home_videos" }}
      cards={[
        {
          title: "اطلاعات ویدیو صفحه اصلی",
          key: "1",
        },
      ]}
      elements={[
        {
          label: "ویدیو",
          name: "video",
          type: "fileUploader",
          cardKey: "1",
          validation: yup.mixed().required("ویدیو اجباری است"),
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default HomeVideoCreate;
