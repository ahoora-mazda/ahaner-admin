import * as yup from "yup";
import CustomForm from "../../components/form";
import { useNavigate } from "react-router-dom";

const TeamCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/team-list");
      }}
      title="ایجاد اعضا"
      btn={{ text: "ایجاد عضو" }}
      api={{ route: "/admin/teams" }}
      cards={[
        {
          title: "اطلاعات عضو",
          key: "1",
        },
      ]}
      sortUpdate={(state) => {
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

export default TeamCreate;
