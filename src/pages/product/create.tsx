import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";
import Input from "../../components/form/components/input";
import { API } from "../../server";

const ProductCreate = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState<any[]>([]);

  const getProperties = async (id: any) => {
    const { data } = await API.get(`categories/${id}`);
    setProperties(data.data.Properties);
  };
  return (
    <CustomForm
      onEnd={() => {
        navigate("/product-list");
      }}
      title="ایجاد محصول"
      btn={{ text: "ایجاد محصول" }}
      api={{ route: "/products" }}
      cards={[
        {
          title: "اطلاعات محصول",
          key: "1",
        },
        {
          title: "ویژگی های محصول",
          key: "2",
        },
      ]}
      sortUpdate={(state) => {
        return {
          ...state,
          property_values: properties.map((p) => {
            return {
              property_id: p.id,
              property_value: p.value,
            };
          }),
        };
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
          onChange: (e) => {
            getProperties(e);
          },
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
          label: "گروه",
          name: "group_id",
          type: "selectApi",
          api: {
            keys: ["groups"],
            sort: (state) => {
              return state.groups.map((ele: any) => {
                return {
                  value: ele.value,
                  label: ele.label,
                };
              });
            },
          },
          cardKey: "1",
          col: "col-span-12",
          validation: yup.string().required("گروه اجباری است"),
        },
        {
          label: "تصویر",
          name: "image",
          type: "fileUploader",
          validation: yup.mixed().required("تصویر اجباری است"),
          cardKey: "1",
          col: "col-span-12",
        },
        {
          name: "description",
          validation: yup.string().required("توضیحات اجباری است"),
          label: "توضیحات",
          cardKey: "1",
          type: "textarea",
          col: "col-span-12",
        },
        {
          type: "component",
          cardKey: "2",
          name: "",
          component: () => {
            return (
              <div className="col-span-12">
                <div className="mt-4">
                  {properties.map((item: any, key: number) => {
                    return (
                      <div key={key} className="flex items-center gap-5">
                        <div className="">
                          <p>{item.name} : </p>
                        </div>
                        <div className="flex-1">
                          <Input
                            onChange={({ target: { value } }) => {
                              setProperties(
                                [...properties].map((p) => {
                                  if (p.id === item.id) {
                                    return { ...p, value };
                                  } else {
                                    return { ...p };
                                  }
                                })
                              );
                            }}
                            props={{ value: item.value }}
                            label={`مقدار ${item.name}`}
                          />
                        </div>{" "}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          },
        },
      ]}
    />
  );
};

export default ProductCreate;
