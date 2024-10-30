import * as yup from "yup";
import CustomForm from "../../components/form";
import { useNavigate } from "react-router-dom";

const UsefulLinksCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/usefullinks-list");
      }}
      title="ایجاد لینک مفید"
      btn={{ text: "ایجاد لینک مفید" }}
      api={{ route: "/useful-links" }}
      cards={[
        {
          title: "اطلاعات لینک مفید",
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
          label: "عنوان",
          name: "text",
          validation: yup.string().required("عنوان اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "آدرس",
          name: "url",
          validation: yup.string().required("آدرس اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "ترتیب",
          name: "show_order",
          validation: yup.string().required("ترتیب اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default UsefulLinksCreate;
