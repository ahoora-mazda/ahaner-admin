import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";

const FaqCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/faq-list");
      }}
      sortUpdate={(state) => {
        return {
          ...state,
        };
      }}
      title="ایجاد سوالات متداول"
      btn={{ text: "ایجاد سوالات متداول" }}
      api={{ route: "/faqs" }}
      cards={[
        {
          title: "اطلاعات سوالات متداول",
          key: "1",
        },
      ]}
      notSerialize
      elements={[
        {
          name: "question",
          label: "سوال",
          type: "textarea",
          col: "col-span-12",
          cardKey: "1",
          validation: yup.string().required("سوال اجباری است"),
        },
        {
          name: "answer",
          label: "پاسخ",
          type: "textarea",
          col: "col-span-12",
          cardKey: "1",
          validation: yup.string().required("پاسخ اجباری است"),
        },
        {
          label: "دسته بندی",
          name: "questionable_id",
          type: "selectApi",
          api: {
            keys: ["categories"],
            sort: (state) => {
              return state.categories;
            },
          },
          cardKey: "1",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default FaqCreate;
