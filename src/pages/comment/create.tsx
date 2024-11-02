import * as yup from "yup";
import CustomForm from "../../components/form";
import { useNavigate } from "react-router-dom";

const CommentCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/comments-list");
      }}
      title="ایجاد نظر"
      btn={{ text: "ایجاد نظر" }}
      api={{ route: "/comments" }}
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
          validation: yup.mixed().required("دسته بندی اجباری است"),
          api: {
            keys: ["categories"],
            sort: (state) => {
              return state.users;
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

export default CommentCreate;
