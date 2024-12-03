import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";

const UserUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ویرایش کاربر"
      btn={{ text: "ویرایش کاربر" }}
      api={{
        route: "/users",
        get: "/users/:id",
        update: "/users/:id",
      }}
      accessUpdate={"admin_user_update"}
      onEnd={() => {
        navigate("/user-list");
      }}
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
      update={true}
      notSerialize
      sortGet={(state) => {
        return {
          ...state,
          province_id: state?.City?.Province?.id,
          city_id: state?.City?.id,
        };
      }}
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

export default UserUpdate;
