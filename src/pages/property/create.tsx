import { useNavigate } from "react-router-dom";
import CustomForm from "../../components/form";
import * as yup from "yup";

const PropertyCreate = () => {
  const navigate = useNavigate();

  return (
    <CustomForm
      title="ایجاد ویژگی محصول"
      btn={{ text: "ذخیره" }}
      api={{
        route: "/properties",
      }}
      accessUpdate={"permission_update"}
      onEnd={() => {
        navigate("/property-list");
      }}
      cards={[
        {
          title: "ویژگی محصول",
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
          label: "عنوان",
          name: "name",
          validation: yup.string().required("عنوان اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "توضیحات",
          name: "description",
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default PropertyCreate;
