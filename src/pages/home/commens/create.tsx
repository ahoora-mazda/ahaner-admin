import * as yup from "yup";
import CustomForm from "../../../components/form";
import { useNavigate } from "react-router-dom";

const HomeCommentCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/home/comments-list");
      }}
      title="ایجاد نظر صفحه اصلی    "
      btn={{ text: "ایجاد نظر صفحه اصلی   " }}
      api={{ route: "/admin/home_comments" }}
      cards={[
        {
          title: "اطلاعات نظر صفحه اصلی   ",
          key: "1",
        },
      ]}
      elements={[
        {
          label: "نام و نام خانوادگی",
          name: "name",
          validation: yup.string().required("نام و نام خانوادگی اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "سال عضویت",
          name: "membership",
          validation: yup.string().required("سال عضویت اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "متن",
          name: "body",
          validation: yup.string().required("متن اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "تصویر",
          name: "image",
          validation: yup.mixed().required("تصویر اجباری است"),
          type: "fileUploader",
          cardKey: "1",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default HomeCommentCreate;
