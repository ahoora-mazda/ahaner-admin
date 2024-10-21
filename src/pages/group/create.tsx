import * as yup from "yup";
import CustomForm from "../../components/form";
import { useNavigate } from "react-router-dom";

const GroupCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/group-list");
      }}
      title="ایجاد کشور"
      btn={{ text: "ایجاد کشور" }}
      api={{ route: "/admin/groups" }}
      cards={[
        {
          title: "اطلاعات کشور",
          key: "1",
        },
      ]}
      elements={[
        {
          label: "محصول",
          name: "product_id",
          validation: yup.array().of(yup.number()).required("محصول اجباری است"),
          type: "multiSelectApi",
          cardKey: "1",
          col: "col-span-12 md:col-span-12",
          api: {
            route: "/admin/groups/create",
            sort: state => {
              return state.map((ele: any) => {
                return {
                  value: ele.id,
                  label: ele.title,
                };
              });
            },
          },
        },
        {
          label: "عنوان",
          name: "title",
          validation: yup.string().required("عنوان اجباری است"),
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "تصویر",
          name: "image",
          validation: yup.mixed().required("تصویر اجباری است"),
          type: "fileUploader",
          cardKey: "1",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default GroupCreate;
