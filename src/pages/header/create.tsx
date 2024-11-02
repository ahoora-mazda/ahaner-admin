import * as yup from "yup";
import CustomForm from "../../components/form";
import { useNavigate } from "react-router-dom";

const HeaderCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/header-list");
      }}
      title="ایجاد هدر"
      btn={{ text: "ایجاد هدر" }}
      api={{ route: "/category-views" }}
      cards={[
        {
          title: "اطلاعات هدر",
          key: "1",
        },
      ]}
      sortUpdate={(state) => {
        return {
          ...state,
          view_type: "header",
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
        // {
        //   label: "لینک",
        //   name: "link",
        //   type: "input",
        //   cardKey: "1",
        //   col: "col-span-12 ",
        //   help: "لینک رو داخلی وارد کنید (بدون دامین)",
        // },

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

export default HeaderCreate;
