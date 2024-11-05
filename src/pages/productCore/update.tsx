import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";

const ProductCoreUpdate = () => {
  const navigate = useNavigate();

  return (
    <CustomForm
      onEnd={() => {
        navigate("/product-core-list");
      }}
      title="ایجاد محصول اصلی"
      btn={{ text: "ویرایش محصول اصلی" }}
      api={{
        route: "/product-core",
        get: "/product-core/:id",
        update: "/product-core/:id",
      }}
      update
      notSerialize
      accessUpdate={"dawdawd"}
      cards={[
        {
          title: "اطلاعات محصول اصلی",
          key: "1",
        },
      ]}
      sortUpdate={(state) => {
        return {
          ...state,
        };
      }}
      sortGet={(state) => {
        return { ...state };
      }}
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
          label: "اسلاگ",
          name: "slug",
          validation: yup.string().required("اسلاگ اجباری است"),
          type: "input",
          cardKey: "1",
          help: "انگلیسی وارد کنید و فاصله را با - وارد کنید",
          col: "col-span-12 md:col-span-6",
        },
        {
          label: "دسته بندی",
          name: "category_id",
          type: "selectApi",
          api: {
            keys: ["categories"],
            sort: (state) => {
              return state.categories.map((ele: any) => {
                return {
                  value: ele.value,
                  label: ele.label,
                  properties: ele.Properties,
                };
              });
            },
          },
          cardKey: "1",
          validation: yup.string().required("دسته بندی اجباری است"),
          col: "col-span-12",
        },
        {
          name: "content",
          label: "متن",
          validation: yup.string().required("متن بندی اجباری است"),
          cardKey: "1",
          type: "editor",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default ProductCoreUpdate;
