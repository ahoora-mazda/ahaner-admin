import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";

const PropertyCreate = () => {
  const navigate = useNavigate();

  return (
    <CustomForm
      title="ایجاد ویژگی محصول"
      btn={{ text: "ویرایش" }}
      api={{
        route: "/properties",
        get: "/properties/:id",
        update: "/properties/:id",
      }}
      accessUpdate={"permission_update"}
      onEnd={() => {
        navigate("/property-list");
      }}
      cards={[
        {
          title: "اطلاعات ویژگی محصول",
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
