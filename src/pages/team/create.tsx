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
      api={{ route: "/team-info" }}
      cards={[
        {
          title: "اطلاعات عضو",
          key: "1",
        },
      ]}
      sortUpdate={(state) => {
        return {
          ...state,
          show_on_prices_page: state.show_on_prices_page ? "1" : "0",
          social_medias: {
            telegram: state.telegram,
            whatsapp: state.whatsapp,
            instagram: state.instagram,
          },
        };
      }}
      elements={[
        {
          name: "avatar",
          type: "imageUploader",
          label: "تصویر",
          cardKey: "1",
          col: "col-span-12",
          wrapperClassName: "flex items-center justify-center",
        },
        {
          name: "full_name",
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
        {
          type: "checkbox",
          name: "show_on_prices_page",
          label: "مشاهده در صفحه محصول و دسته بندی",
          cardKey: "1",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default TeamCreate;
