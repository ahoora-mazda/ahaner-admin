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
      accessUpdate={"admin_comment_update"}
      onEnd={() => {
        navigate("/comments-list");
      }}
      cards={[
        {
          title: "اطلاعات نظر",
          key: "1",
        },
      ]}
      sortUpdate={(state) => {
        return {
          ...state,
        };
      }}
      sortGet={(state) => {
        return {
          ...state,
        };
      }}
      update={true}
      notSerialize
      elements={[
        {
          label: "متن نظر",
          name: "content",
          validation: yup.string().required("متن نظر اجباری است"),
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          type: "selectApi",
          label: "کاربر",
          name: "user_id",
          validation: yup.mixed().required("کاربر اجباری است"),
          api: {
            keys: ["users"],
            sort: (state) => {
              return state.users;
            },
          },
          col: "col-span-12",
          cardKey: "1",
        },
        {
          type: "selectApi",
          label: "دسته بندی",
          name: "category_id",
          api: {
            keys: ["categories"],
            sort: (state) => {
              return state.categories;
            },
          },
          col: "col-span-12",
          cardKey: "1",
        },
        {
          name: "status",
          type: "select",
          label: "وضعیت",
          validation: yup.mixed().required("وضعیت اجباری است"),
          col: "col-span-12",
          cardKey: "1",
          options: [
            {
              label: "فعال",
              value: "published",
            },
            {
              label: "غیر فعال",
              value: "pending",
            },
          ],
        },
      ]}
    />
  );
};

export default CommentUpdate;
