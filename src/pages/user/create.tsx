import * as yup from "yup";
import CustomForm from "../../components/form";
import { useNavigate } from "react-router-dom";

const UserCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/user-list");
      }}
      title="ایجاد کاربران"
      btn={{ text: "ایجاد کاربر" }}
      api={{ route: "/users" }}
      cards={[
        {
          title: "اطلاعات کاربر",
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
          name: "full_name",
          label: "نام و نام خانوادگی",
          cardKey: "1",
          col: "col-span-12",
          validation: yup.string().required("نام و نام خانوادگی اجباری است"),
          type: "input",
        },
        {
          name: "email",
          label: "ایمیل",
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
          validation: yup
            .string()
            .email("ایمیل صحیح نیست")
            .required("ایمیل اجباری است"),
        },
        {
          name: "mobile",
          cardKey: "1",
          label: "موبایل",
          col: "col-span-12 md:col-span-6",
          validation: yup.string().required("موبایل اجباری است"),
          type: "input",
        },
        {
          label: "استان",
          name: "province_id",
          type: "selectApi",
          col: "col-span-12 md:col-span-6",
          cardKey: "1",
          api: {
            keys: ["provinces"],
            sort: (state) => {
              return state.provinces;
            },
          },
        },
        {
          label: "شهر",
          name: "city_id",
          type: "selectApi",
          col: "col-span-12 md:col-span-6",
          cardKey: "1",
          api: {
            keys: ["cities"],
            sort: (state) => {
              return state.cities;
            },
          },
          depend: {
            key: "province_id",
          },
        },
      ]}
    />
  );
};

export default UserCreate;
