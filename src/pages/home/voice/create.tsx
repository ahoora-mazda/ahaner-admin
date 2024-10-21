import * as yup from "yup";
import CustomForm from "../../../components/form";
import { useNavigate } from "react-router-dom";

const HomeVoiceCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/voice-list");
      }}
      title="ایجاد پادکست صفحه اصلی"
      btn={{ text: "ایجاد پادکست صفحه اصلی" }}
      api={{ route: "/admin/voices" }}
      cards={[
        {
          title: "اطلاعات پادکست صفحه اصلی",
          key: "1",
        },
      ]}
      elements={[
        {
          label: "پادکست",
          name: "voice",
          type: "fileUploader",
          cardKey: "1",
          validation: yup.mixed().required("پادکست اجباری است"),
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default HomeVoiceCreate;
