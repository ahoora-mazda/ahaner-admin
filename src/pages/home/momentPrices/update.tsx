import * as yup from "yup";
import CustomForm from "../../../components/form";
import { useNavigate } from "react-router-dom";

const MomentPriceUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/home_momentPrices-list");
      }}
      update
      accessUpdate={"admin_moment_price_update"}
      title="ویرایش قیمت لحظه ای و رقابتی"
      btn={{ text: "ویرایش قیمت لحظه ای و رقابتی" }}
      api={{
        route: "/moment-prices",
        get: "/moment-prices/:id",
        update: "/moment-prices/:id",
      }}
      cards={[
        {
          title: "اطلاعات قیمت لحظه ای و رقابتی",
          key: "1",
        },
      ]}
      elements={[
        {
          label: "عنوان",
          name: "text",
          validation: yup.string().required("عنوان اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
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
                  properties: ele.Properties,
                };
              });
            },
          },
          cardKey: "1",
          validation: yup.string().required("دسته بندی اجباری است"),
          col: "col-span-12",
        },
        {
          label: "تصویر",
          name: "image",
          validation: yup.mixed().required("تصویر اجباری است"),
          type: "fileUploader",
          cardKey: "1",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default MomentPriceUpdate;
