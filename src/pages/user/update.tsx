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
        route: "/admin/users",
        get: "/admin/users/:id",
        update: "/admin/users/:id",
      }}
      accessUpdate={"permission_update"}
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
      sortGet={(state) => {
        return {
          ...state,
        };
      }}
      elements={[
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
          name: "name",
          label: "نام و نام خانوادگی",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
          validation: yup.string().required("نام و نام خانوادگی اجباری است"),
          type: "input",
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
          type: "select",
          cardKey: "1",
          label: "نقش",
          col: "col-span-12 md:col-span-6",
          validation: yup.string().required("نقش اجباری است"),
          name: "role",
          options: [
            {
              value: "team",
              label: "تیم",
            },
            {
              value: "admin",
              label: "ادمین",
            },
            {
              value: "client",
              label: "مشتری",
            },
          ],
        },
      ]}
    />
  );
};

export default UserUpdate;
