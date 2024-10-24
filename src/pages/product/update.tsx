import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Edit, Plus, Trash } from "tabler-icons-react";
import CustomForm from "../../components/form";
import Btn from "../../components/form/components/button";
import Input from "../../components/form/components/input";
import SelectApi from "../../components/form/components/selectApi";
import { random } from "../../utils/function";
import * as yup from "yup";

const ProductCreate = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState<any[]>([]);
  const [editId, setEditId] = useState<number>(0);
  const [form, setForm] = useState({
    property_id: "",
    propertyName: "",
    value: "",
  });
  console.log({ properties });
  const [errorPlan, setErrorPlan] = useState<{
    property_id: any;
    value: any;
  }>({ property_id: false, value: false });
  const add = () => {
    if (!form.property_id || !form.value) {
      setErrorPlan({
        property_id: form.property_id
          ? false
          : { message: "ویژگی محصول اجباری است" },
        value: form.value ? false : { message: "مقدار ویژگی محصول اجباری است" },
      });
    } else {
      if (editId) {
        setErrorPlan({ property_id: false, value: false });
        setProperties(
          properties.map((ele) => {
            if (ele.id === editId) {
              return { ...ele, ...form };
            } else {
              return ele;
            }
          })
        );
        setForm({ property_id: "", value: "", propertyName: "" });
        setEditId(0);
      } else {
        setErrorPlan({ value: false, property_id: false });
        setProperties([...properties, { ...form, id: random() }]);
        setForm({ value: "", property_id: "", propertyName: "" });
      }
    }
  };
  const remove = (id: string) => {
    setProperties([...properties.filter((ele: any) => ele.id !== id)]);
    setForm({ value: "", property_id: "", propertyName: "" });
  };
  return (
    <CustomForm
      onEnd={() => {
        navigate("/product-list");
      }}
      title="ایجاد محصول"
      btn={{ text: "ایجاد محصول" }}
      api={{
        route: "/admin/products",
        get: "/admin/products/:id",
        update: "/admin/products/:id",
      }}
      update
      accessUpdate={""}
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
          properties,
        };
      }}
      sortGet={(state) => {
        
        return state;
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
          label: "قیمت",
          name: "price",
          validation: yup.string().required("قیمت اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12",
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
          type: "editor",
          col: "col-span-12",
        },
        {
          type: "component",
          cardKey: "2",
          name: "",
          component: () => {
            return (
              <div className="col-span-12">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12 md:col-span-6">
                    <SelectApi
                      onChange={(value, v) => {
                        console.log({ v });
                        setForm({
                          ...form,
                          property_id: value,
                          propertyName: v.label,
                        });
                      }}
                      api={{
                        keys: ["properties"],
                        sort: (state) => {
                          return state.properties.map((ele: any) => {
                            return {
                              value: ele.value,
                              label: ele.label,
                            };
                          });
                        },
                      }}
                      value={form.property_id}
                      label="ویژگی محصول"
                      error={errorPlan.property_id}
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <Input
                      onChange={({ target: { value } }) =>
                        setForm({ ...form, value: value })
                      }
                      props={{ value: form.value }}
                      label="مقدار محصول"
                      error={errorPlan.value}
                    />
                  </div>{" "}
                  <div className="col-span-12">
                    <Btn
                      onClick={add}
                      classNames="h-[40px] mr-auto px-2 text-base ant-btn css-xu9wm8 ant-btn-default border-none bg-primary text-white hover:!bg-primary hover:!text-white"
                      text={editId ? "ویرایش" : "افزودن"}
                      rightIcon={() => (editId ? <Edit /> : <Plus />)}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  {properties.map((item: any, key: number) => {
                    return (
                      <div
                        key={key}
                        className="col-span-4 mb-2"
                        style={{
                          userSelect: "none",
                          padding: "16px",
                          margin: "0 0 8px 0",
                          minHeight: "50px",
                          backgroundColor: "#ffffff",
                          color: "#333",
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <p>{key + 1}.</p>
                          <p>{item.propertyName} : </p>
                          <p>{item.value}</p>
                          <span
                            onClick={() => remove(item.id)}
                            className="mr-auto bg-red-600 p-2 rounded-lg cursor-pointer"
                          >
                            <Trash className="text-white" />
                          </span>
                          <span
                            onClick={() => {
                              setEditId(item.id);
                              setForm(item);
                            }}
                            className="bg-primary p-2 rounded-lg cursor-pointer"
                          >
                            <Edit className="text-white" />
                          </span>
                        </div>
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
