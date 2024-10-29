import * as yup from "yup";
import CustomForm from "../../../components/form";
import { useNavigate } from "react-router-dom";

const MomentPriceCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/home_momentPrices-list");
      }}
      title="ایجاد قیمت لحظه ای و رقابتی"
      btn={{ text: "ایجاد قیمت لحظه ای و رقابتی" }}
      api={{ route: "/home_momentPrices" }}
      cards={[
        {
          title: "اطلاعات قیمت لحظه ای و رقابتی",
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

export default MomentPriceCreate;
