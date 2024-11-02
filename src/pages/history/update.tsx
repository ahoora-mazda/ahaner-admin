import React from "react";
import CustomForm from "../../components/form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const HistoryUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ویرایش تاریخچه"
      btn={{ text: "ویرایش تاریخچه" }}
      api={{
        route: "/product-price-history",
        get: "/product-price-history/:id",
        update: "/product-price-history/:id",
      }}
      accessUpdate={"permission_update"}
      onEnd={() => {
        navigate("/history-list");
      }}
      sortGet={(state) => {
        return {
          ...state,
        };
      }}
      sortUpdate={(state) => {
        return { ...state };
      }}
      cards={[
        {
          title: "اطلاعات تاریخچه",
          key: "1",
        },
      ]}
      notSerialize
      update={true}
      elements={[
        {
          label: "محصولات",
          name: "product_id",
          type: "selectApi",
          api: {
            keys: ["products"],
            sort: (state) => {
              return state.products;
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
        },
      ]}
    />
  );
};

export default HistoryUpdate;
