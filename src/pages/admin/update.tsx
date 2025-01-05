import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";
import { combineImageUrl } from "../../utils/function";

const AdminUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ویرایش مدیر"
      btn={{ text: "ویرایش مدیر" }}
      api={{
        route: "/admins",
        get: "/admins/:id",
        update: "/admins/:id",
      }}
      accessUpdate={"admin_admin_update"}
      onEnd={() => {
        navigate("/admin-list");
      }}
      cards={[
        {
          title: "اطلاعات مدیر",
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
          name: "full_name",
          label: "نام و نام خانوادگی",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
          validation: yup.string().required("نام و نام خانوادگی اجباری است"),
          type: "input",
        },
        {
          name: "email",
          label: "ایمیل",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
          validation: yup
            .string()
            .email("ایمیل معتبر نیست")
            .required("ایمیل اجباری است"),
          type: "input",
        },
        {
          name: "mobile",
          label: "موبایل",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
          validation: yup
            .string()
            .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست")
            .required("موبایل اجباری است"),
          type: "input",
        },
        {
          name: "password",
          label: "رمز عبور",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",

          type: "input",
        },
        {
          type: "selectApi",
          label: "نقش",
          name: "role_id",
          validation: yup.mixed().required("نقش اجباری است"),
          api: {
            keys: ["admin_roles"],
            sort: (state) => {
              return state.admin_roles.map((ele: any) => {
                return {
                  value: ele.value,
                  label: ele.label,
                };
              });
            },
          },
          col: "col-span-12",
          cardKey: "1",
          addPermission: "admin_category_create",
        },
      ]}
    />
  );
};

export default AdminUpdate;
