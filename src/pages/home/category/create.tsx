import * as yup from "yup";
import CustomForm from "../../../components/form";
import { useNavigate } from "react-router-dom";

const HomeCategoryCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/home-category-list");
      }}
      title="ایجاد دسته بندی صفحه اصلی"
      btn={{ text: "ایجاد دسته بندی صفحه اصلی" }}
      api={{ route: "/category-views" }}
      cards={[
        {
          title: "اطلاعات دسته بندی صفحه اصلی",
          key: "1",
        },
      ]}
      sortUpdate={(state) => {
        return {
          ...state,
          view_type: "landing",
        };
      }}
      elements={[
        {
          label: "دسته بندی",
          name: "category_id",
          type: "selectApi",
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
          cardKey: "1",
          validation: yup.string().required("دسته بندی اجباری است"),
          col: "col-span-12",
        },
        {
          label: "ترتیب",
          name: "view_order",
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },

        {
          label: "تصویر",
          name: "image",
          type: "fileUploader",
          cardKey: "1",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default HomeCategoryCreate;
