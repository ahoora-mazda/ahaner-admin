import * as yup from "yup";
import CustomForm from "../../components/form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FaqCreate = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<any[]>([]);
  return (
    <CustomForm
      onEnd={() => {
        navigate("/faq-list");
      }}
      sortUpdate={state => {
        return {
          ...state,
          model: items.filter(ele => +ele.id === +state.questionable_id)[0].model,
        };
      }}
      title="ایجاد سوالات متداول"
      btn={{ text: "ایجاد سوالات متداول" }}
      api={{ route: "/admin/questions" }}
      cards={[
        {
          title: "اطلاعات سوالات متداول",
          key: "1",
        },
      ]}
      elements={[
        {
          label: "مربوط به",
          name: "questionable_id",
          validation: yup.string().required("مربوط به اجباری است"),
          type: "selectApi",
          cardKey: "1",
          col: "col-span-12 md:col-span-12",
          api: {
            route: "/admin/questions/create",
            sort: state => {
              setItems(state);
              return state.map((ele: any) => {
                return {
                  value: ele.id,
                  label: ele.title,
                };
              });
            },
          },
        },

        {
          label: "صفحه",
          name: "page",
          validation: yup.string().required("صفحه اجباری است"),
          type: "select",
          options: [
            { label: "صفحه اصلی", value: "home" },
            //{ label: "مقالات", value: "blog" },
            { label: "محصولات", value: "product" },
          ],
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "سوال",
          name: "question",
          validation: yup.string().required("سوال اجباری است"),
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "پاسخ",
          name: "answer",
          validation: yup.string().required("پاسخ اجباری است"),
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default FaqCreate;
