import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";

const FaqUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ویرایش سوالات متداول"
      btn={{ text: "ویرایش سوالات متداول" }}
      api={{
        route: "/faqs",
        get: "/faqs/:id",
        update: "/faqs/:id",
      }}
      accessUpdate={"permission_update"}
      onEnd={() => {
        navigate("/faq-list");
      }}
      cards={[
        {
          title: "اطلاعات سوالات متداول",
          key: "1",
        },
      ]}
      sortGet={(state) => {
        return {
          ...state,
        };
      }}
      notSerialize

      update={true}
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
          name: "category_id",
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

export default FaqUpdate;
