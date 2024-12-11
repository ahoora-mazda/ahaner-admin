import * as yup from "yup";
import CustomForm from "../../components/form";
import { useNavigate } from "react-router-dom";

const HistoryCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/history-list");
      }}
      title="ایجاد تاریخچه"
      btn={{ text: "ایجاد تاریخچه" }}
      api={{ route: "/product-price-history" }}
      cards={[
        {
          title: "اطلاعات تاریخچه",
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
          label: "محصولات",
          name: "product_id",
          type: "selectApi",
          api: {
            keys: ["products"],
            sort: (state) => {
              return state.products.map((ele: any) => {
                return { ...ele, label: `${ele.label} - ${ele.Group.name}` };
              });
            },
          },
          cardKey: "1",
          validation: yup.string().required("محصولات اجباری است"),
          col: "col-span-12",
        },
        {
          label: "قیمت",
          name: "price",
          validation: yup.string().required("قیمت اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "تاریخ",
          name: "price_date",
          validation: yup.string().required("تاریخ اجباری است"),
          type: "datePicker",
          cardKey: "1",
          col: "col-span-12",
          time: true,
        },
      ]}
    />
  );
};

export default HistoryCreate;
