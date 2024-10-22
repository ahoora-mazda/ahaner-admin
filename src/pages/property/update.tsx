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
        route: "/admin/properties",
        get: "/admin/properties/:id",
        update: "/admin/properties/:id",
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
      elements={[
        {
          label: "عنوان",
          name: "name",
          validation: yup.string().required("عنوان اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
        },
        {
          label: "دسته بندی",
          name: "category_id",
          type: "selectApi",
          validation: yup.string().required("دسته بندی اجباری است"),
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
          cardKey: "1",
          col: "col-span-12 md:col-span-6",
        },
      ]}
    />
  );
};

export default PropertyCreate;
