import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";

const HeaderCreate = () => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <CustomForm
        onEnd={() => {
          navigate("/header-list");
        }}
        title="ایجاد هدر"
        btn={{ text: "ایجاد هدر" }}
        api={{ route: "/headers" }}
        cards={[
          {
            title: "اطلاعات هدر",
            key: "1",
          },
        ]}
        sortUpdate={(state) => {
          return {
            ...state,
            view_type: "header",
          };
        }}
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
            label: "ترتیب",
            name: "view_order",
            type: "input",
            cardKey: "1",
            col: "col-span-12",
          },
          {
            type: "selectApi",
            label: "والد",
            name: "parent_id",
            api: {
              keys: ["headers"],
              sort: (state) => {
                return state.headers;
              },
            },
            col: "col-span-12",
            cardKey: "1",
          },
        ]}
      />
    </>
  );
};

export default HeaderCreate;
