import * as yup from "yup";
import CustomForm from "../../components/form";
import { useNavigate } from "react-router-dom";

const HeaderCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/header-list");
      }}
      title="ایجاد هدر"
      btn={{ text: "ایجاد هدر" }}
      api={{ route: "/headeritems" }}
      cards={[
        {
          title: "اطلاعات هدر",
          key: "1",
        },
      ]}
      sortUpdate={(state) => {
        console.log({ state });
        return {
          ...state,
          inner_link: state.inner_link ? "true" : "false",
        };
      }}
      elements={[
        {
          label: "عنوان",
          name: "title",
          validation: yup.string().required("عنوان اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12 ",
        },
        {
          label: "لینک",
          name: "link",
          type: "input",
          cardKey: "1",
          col: "col-span-12 ",
          help : "لینک رو داخلی وارد کنید (بدون دامین)"
        },
        {
          label: "والد لینک",
          name: "item_id",
          type: "selectApi",
          api: {
            keys: ["headerItems"],
            sort: (state) => {
              return state.headerItems;
            },
          },
          cardKey: "1",
          col: "col-span-12 ",
        },
      ]}
    />
  );
};

export default HeaderCreate;
