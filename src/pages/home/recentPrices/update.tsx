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
      accessUpdate={"dwad"}
      title="ویرایش قیمت روز محصولات"
      btn={{ text: "ویرایش قیمت روز محصولات" }}
      api={{
        route: "/home_momentPrices",
        get: "/home_momentPrices/:id",
        update: "/home_momentPrices/:id",
      }}
      cards={[
        {
          title: "اطلاعات قیمت روز محصولات",
          key: "1",
        },
      ]}
      elements={[
        {
          label: "عنوان",
          name: "title",
          validation: yup.string().required("عنوان اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "لینک",
          name: "link",
          validation: yup.string().required("لینک اجباری است"),
          type: "input",
          cardKey: "1",
          help: "لینک رو داخلی وارد کنید (بدون دامین)",
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
