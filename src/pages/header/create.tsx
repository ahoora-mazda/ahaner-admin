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
      api={{ route: "/admin/headers" }}
      cards={[
        {
          title: "اطلاعات هدر",
          key: "1",
        },
      ]}
      sortUpdate={state => {
        console.log({ state });
        return {
          ...state,
          inner_link: state.inner_link ? "true" : "false",
        };
      }}
      elements={[
        {
          label: "عنوان",
          name: "title",
          validation: yup.string().required("عنوان اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
        },
        {
          label: "لینک",
          name: "link",
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
        },
        {
          label: "والد هدر",
          name: "header_id",
          type: "selectApi",
          api: {
            route: "/admin/headers/create",
            sort: state => {
              return state.map((ele: any) => {
                return {
                  value: ele.id,
                  label: ele.title,
                };
              });
            },
          },
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
        },
        {
          label: "جزییات",
          name: "info",
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "توضیحات",
          name: "description",
          type: "textarea",
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
        {
          label: "لینک داخلی",
          name: "inner_link",
          cardKey: "1",
          type: "checkbox",
          validation: yup.boolean().default(true),
          defaultValue: true,
        },
      ]}
    />
  );
};

export default HeaderCreate;
