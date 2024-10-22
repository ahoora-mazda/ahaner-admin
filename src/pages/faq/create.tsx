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
      api={{ route: "/admin/questions" }}
      cards={[
        {
          title: "اطلاعات سوالات متداول",
          key: "1",
        },
      ]}
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
          type: "select",
          name: "status",
          label: "وضعیت",
          options: [
            { value: "active", label: "فعال" },
            { value: "inactive", label: "غیر فعال" },
          ],
          col: "col-span-12",
          cardKey: "1",
        },
        {
          type: "select",
          label: "برای؟",
          name: "questionable_type",
          validation: yup.string().required("برای اجباری است"),
          col: "col-span-12",
          cardKey: "1",
          options: [
            {
              value: "product",
              label: "محصول",
            },
            {
              value: "blog",
              label: "مقاله",
            },
            {
              value: "category",
              label: "دسته بندی",
            },
          ],
        },
        {
          label: "محصول",
          name: "questionable_id",
          type: "selectApi",
          api: {
            keys: ["products"],
            sort: (state) => {
              return state.products;
            },
          },
          cardKey: "1",
          col: "col-span-12",
          existIf: {
            key: "questionable_type",
            value: "product",
          },
        },
        {
          label: "مقاله",
          name: "questionable_id",
          type: "selectApi",
          api: {
            keys: ["blogs"],
            sort: (state) => {
              return state.blogs;
            },
          },
          cardKey: "1",
          col: "col-span-12",
          existIf: {
            key: "questionable_type",
            value: "blog",
          },
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
          existIf: {
            key: "questionable_type",
            value: "category",
          },
        },
      ]}
    />
  );
};

export default FaqCreate;
