import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Edit, Plus, Trash } from "tabler-icons-react";
import CustomForm from "../../components/form";
import Btn from "../../components/form/components/button";
import Input from "../../components/form/components/input";
import SelectApi from "../../components/form/components/selectApi";
import { random } from "../../utils/function";

const PropertyCreate = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState<any[]>([]);
  const [editId, setEditId] = useState<number>(0);
  const [form, setForm] = useState({
    name: "",
    category_id: "",
  });
  console.log({ properties });
  const [errorPlan, setErrorPlan] = useState<{
    name: any;
    category_id: any;
  }>({ name: false, category_id: false });
  const add = () => {
    if (!form.category_id || !form.name) {
      setErrorPlan({
        name: form.name ? false : { message: "عنوان اجباری است" },
        category_id: form.category_id
          ? false
          : { message: "دسته بندی اجباری است" },
      });
    } else {
      if (editId) {
        setErrorPlan({ name: false, category_id: false });
        setProperties(
          properties.map((ele) => {
            if (ele.id === editId) {
              return { ...ele, ...form };
            } else {
              return ele;
            }
          })
        );
        setForm({ name: "", category_id: "" });
        setEditId(0);
      } else {
        setErrorPlan({ category_id: false, name: false });
        setProperties([...properties, { ...form, id: random() }]);
        setForm({ category_id: "", name: "" });
      }
    }
  };
  const remove = (id: string) => {
    setProperties([...properties.filter((ele: any) => ele.id !== id)]);
    setForm({ category_id: "", name: "" });
  };
  return (
    <CustomForm
      title="ایجاد ویژگی محصول"
      {...(properties.length > 0 ? { btn: { text: "ذخیره" } } : {})}
      api={{
        route: "/properties",
      }}
      accessUpdate={"permission_update"}
      onEnd={() => {
        navigate("/property-list");
      }}
      cards={[
        {
          title: "ویژگی های محصول",
          key: "2",
        },
      ]}
      sortUpdate={(state) => {
        return {
          properties,
        };
      }}
      elements={[
        {
          type: "component",
          cardKey: "2",
          name: "",
          component: () => {
            return (
              <div className="col-span-12">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12 md:col-span-6">
                    <Input
                      onChange={({ target: { value } }) =>
                        setForm({ ...form, name: value })
                      }
                      props={{ value: form.name }}
                      label="عنوان"
                      error={errorPlan.name}
                    />
                  </div>{" "}
                  <div className="col-span-12 md:col-span-6">
                    <SelectApi
                      onChange={(value) =>
                        setForm({ ...form, category_id: value })
                      }
                      api={{
                        keys: ["categories"],
                        sort: (state) => {
                          return state.categories.map((ele: any) => {
                            return {
                              value: ele.value,
                              label: ele.label,
                            };
                          });
                        },
                      }}
                      value={form.category_id}
                      label="دسته بندی "
                      error={errorPlan.category_id}
                    />
                  </div>
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
                          <p>{item.name}</p>
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

export default PropertyCreate;
