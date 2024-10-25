import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Edit, Plus, Trash } from "tabler-icons-react";
import * as yup from "yup";
import CustomForm from "../../../components/form";
import Btn from "../../../components/form/components/button";
import Input from "../../../components/form/components/input";
import { random } from "../../../utils/function";

const DayPriceUpdate = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState<any[]>([]);
  const [editId, setEditId] = useState<number>(0);
  const [form, setForm] = useState({
    title: "",
    price: "",
    link: "",
  });
  const [errorPlan, setErrorPlan] = useState<{
    title: any;
    price: any;
    link: any;
  }>({ title: false, price: false, link: false });
  const add = () => {
    if (!form.title || !form.price || !form.link) {
      setErrorPlan({
        title: form.title ? false : { message: "عنوان محصول اجباری است" },
        price: form.price ? false : { message: "قیمت محصول اجباری است" },
        link: form.link ? false : { message: "لینک محصول اجباری است" },
      });
    } else {
      if (editId) {
        setErrorPlan({ title: false, price: false, link: false });
        setProperties(
          properties.map((ele) => {
            if (ele.id === editId) {
              return { ...ele, ...form };
            } else {
              return ele;
            }
          })
        );
        setForm({ title: "", price: "", link: "" });
        setEditId(0);
      } else {
        setErrorPlan({ title: false, price: false, link: false });
        setProperties([...properties, { ...form, id: random() }]);
        setForm({ title: "", price: "", link: "" });
      }
    }
  };
  const remove = (id: string) => {
    setProperties([...properties.filter((ele: any) => ele.id !== id)]);
    setForm({ title: "", price: "", link: "" });
  };
  return (
    <CustomForm
      onEnd={() => {
        navigate("/home_dayPrices-list");
      }}
      update
      accessUpdate={"dwad"}
      title="قیمت روز آهن آلات"
      btn={{ text: "قیمت روز آهن آلات" }}
      api={{
        route: "/admin/home_dayPrices",
        get: "/admin/home_dayPrices/:id",
        update: "/admin/home_dayPrices/:id",
      }}
      sortUpdate={(state) => {
        return { ...state, products: properties };
      }}
      sortGet={(state) => {
        setProperties(state.products);
        return { ...state };
      }}
      cards={[
        {
          title: "اطلاعات قیمت روز آهن آلات",
          key: "1",
        },
        {
          title: "محصولات",
          key: "2",
        },
      ]}
      elements={[
        {
          label: "عنوان",
          name: "title",
          validation: yup.string().required("عنوان اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "لینک",
          name: "link",
          validation: yup.string().required("لینک اجباری است"),
          type: "input",
          cardKey: "1",
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
                  <div className="col-span-12 md:col-span-4">
                    <Input
                      onChange={({ target: { value } }) =>
                        setForm({ ...form, title: value })
                      }
                      props={{ value: form.title }}
                      label="عنوان"
                      error={errorPlan.title}
                    />
                  </div>{" "}
                  <div className="col-span-12 md:col-span-4">
                    <Input
                      onChange={({ target: { value } }) =>
                        setForm({ ...form, price: value })
                      }
                      props={{ value: form.price }}
                      label="قیمت"
                      error={errorPlan.price}
                    />
                  </div>{" "}
                  <div className="col-span-12 md:col-span-4">
                    <Input
                      onChange={({ target: { value } }) =>
                        setForm({ ...form, link: value })
                      }
                      props={{ value: form.link }}
                      label="لینک"
                      help="لینک رو داخلی وارد کنید (بدون دامین)"
                      error={errorPlan.link}
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
                          <p>{item.title} - </p>
                          <p>{item.price} - </p>
                          <p>{item.link}</p>
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

export default DayPriceUpdate;
