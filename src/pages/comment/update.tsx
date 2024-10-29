import React from "react";
import CustomForm from "../../components/form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const CommentUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ویرایش نظر"
      btn={{ text: "ویرایش نظر" }}
      api={{
        route: "/comments",
        get: "/comments/:id",
        update: "/comments/:id",
      }}
      accessUpdate={"permission_update"}
      onEnd={() => {
        navigate("/comment-list");
      }}
      cards={[
        {
          title: "اطلاعات نظر",
          key: "1",
        },
      ]}
      sortUpdate={state => {
        delete state.commentable_type;
        return {
          ...state,
        };
      }}
      sortGet={state => {
        return {
          ...state,
        };
      }}
      update={true}
      elements={[
        {
          label: "نام",
          name: "name",
          validation: yup.string().required("نام اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
        },
        {
          label: "موبایل",
          name: "mobile",
          validation: yup.string().required("موبایل اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
        },
        {
          label: "متن نظر",
          validation: yup.string().required("متن نظر اجباری است"),
          name: "body",
          type: "textarea",
          cardKey: "1",
          col: "col-span-12 ",
        },
        {
          label: "وضعیت",
          name: "status",
          validation: yup.string().required("وضعیت اجباری است"),
          col: "col-span-12",
          type: "select",
          cardKey: "1",
          options: [
            {
              label: "فعال",
              value: "active",
            },
            {
              label: "غیر فعال",
              value: "inactive",
            },
          ],
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

export default CommentUpdate;
