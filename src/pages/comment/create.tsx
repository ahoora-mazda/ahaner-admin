import * as yup from "yup";
import CustomForm from "../../components/form";
import { useNavigate } from "react-router-dom";

const CommentCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/group-list");
      }}
      title="ایجاد گروه"
      btn={{ text: "ایجاد گروه" }}
      api={{ route: "/groups" }}
      cards={[
        {
          title: "اطلاعات گروه",
          key: "1",
        },
      ]}
      sortUpdate={(state) => {
        return {
          ...state,
          seo: {
            title: state.title_seo,
            description: state.description_seo,
            schema: state.schema,
          },
        };
      }}
      elements={[
        {
          label: "عنوان",
          name: "name",
          validation: yup.string().required("عنوان اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          type: "multiSelectApi",
          label: "دسته بندی",
          name: "category_id",
          validation: yup.mixed().required("دسته بندی اجباری است"),
          api: {
            keys: ["categories"],
            sort: (state) => {
              return state.categories.map((ele: any) => {
                return {
                  value: ele.value,
                  label: ele.label,
                };
              });
            },
          },
          col: "col-span-12",
          cardKey: "1",
        },
        {
          name: "description",
          label: "توضیحات",
          cardKey: "1",
          type: "editor",
          col: "col-span-12",
        },
        {
          name: "title_seo",
          label: "عنوان صفحه",
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          name: "description_seo",
          label: "توضیحات صفحه",
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },

        {
          name: "schema",
          label: "schema",
          cardKey: "1",
          type: "textarea",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default CommentCreate;
