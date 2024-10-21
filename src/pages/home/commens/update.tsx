import * as yup from "yup";
import CustomForm from "../../../components/form";
import { useNavigate } from "react-router-dom";

const HomeCommentUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/home/comments-list");
      }}
      update
      accessUpdate={'dwad'}
      title="ویرایش نظر صفحه اصلی    "
      btn={{ text: "ویرایش نظر صفحه اصلی   " }}
      api={{
        route: "/admin/home_comments",
        get: "/admin/home_comments/:id",
        update: "/admin/home_comments/:id",
      }}
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

export default HomeCommentUpdate;
