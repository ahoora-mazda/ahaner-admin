import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";

const TeamUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ویرایش عضو"
      btn={{ text: "ویرایش عضو" }}
      api={{
        route: "/admin/teams",
        get: "/admin/teams/:id",
        update: "/admin/teams/:id",
      }}
      accessUpdate={"permission_update"}
      onEnd={() => {
        navigate("/team-list");
      }}
      cards={[
        {
          title: "اطلاعات عضو",
          key: "1",
        },
      ]}
      sortUpdate={(state) => {
        return {
          ...state,
          meta_data: {
            telegram: state.telegram,
            whatsapp: state.whatsapp,
            instagram: state.instagram,
          },
        };
      }}
      update={true}
      sortGet={(state) => {
        console.log({ state });
        return {
          ...state,
          ...state.teaminfo,
          telegram: state?.meta_data?.telegram,
          whatsapp: state?.meta_data?.whatsapp,
          instagram: state?.meta_data?.instagram,
        };
      }}
      elements={[
        {
          name: "image",
          type: "imageUploader",
          label: "تصویر",
          cardKey: "1",
          col: "col-span-12",
          wrapperClassName: "flex items-center justify-center",
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
          type: "selectApi",
          label: "دسته بندی",
          name: "category_id",
          api: {
            keys: ["categories"],
            sort: (state) => {
              return state.categories.map((ele: any) => {
                return {
                  value: ele.value,
                  label: ele.label,
                };
              });
            },
          },
          col: "col-span-12 md:col-span-6",
          cardKey: "1",
        },
        {
          name: "field",
          label: "بخش",
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
        },
        {
          name: "phone_number",
          label: "داخلی کارشناس",
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
        },
        {
          name: "telegram",
          type: "input",
          label: "آدرس تلگرام",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
        },
        {
          name: "whatsapp",
          type: "input",
          label: "آدرس واتساپ",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
        },
        {
          name: "instagram",
          label: "آدرس اینستاگرام",
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
        },
        {
          type: "select",
          name: "status",
          label: "وضعیت",
          options: [
            { value: "active", label: "فعال" },
            { value: "inactive", label: "غیر فعال" },
          ],
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
        },
      ]}
    />
  );
};

export default TeamUpdate;
