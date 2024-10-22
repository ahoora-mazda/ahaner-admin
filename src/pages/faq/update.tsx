import React, { useState } from "react";
import CustomForm from "../../components/form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const FaqUpdate = () => {
  const [items, setItems] = useState<any[]>([]);
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ویرایش سوالات متداول"
      btn={{ text: "ویرایش سوالات متداول" }}
      api={{
        route: "/admin/questions",
        get: "/admin/questions/:id",
        update: "/admin/questions/:id",
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
        return { ...state, questionable_id: +state.questionable_id };
      }}
      update={true}
      elements={[
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

export default FaqUpdate;
