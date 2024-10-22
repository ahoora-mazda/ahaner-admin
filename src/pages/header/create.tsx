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
      api={{ route: "/admin/headeritems" }}
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
          col: "col-span-12 md:col-span-4",
        },
        {
          label: "لینک",
          name: "link",
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
        },
        {
          label: "والد لینک",
          name: "item_id",
          type: "selectApi",
          api: {
            keys: ["categories"],

            sort: (state) => {
              return state.map((ele: any) => {
                return {
                  value: ele.id,
                  label: ele.title,
                };
              });
            },
          },
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
        },
      ]}
    />
  );
};

export default HeaderCreate;
