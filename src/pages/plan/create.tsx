
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Edit, Plus, Trash } from "tabler-icons-react";
import * as yup from "yup";
import CustomForm from "../../components/form";
import Btn from "../../components/form/components/button";
import Input from "../../components/form/components/input";
import SvgInput from "../../components/form/components/svgInput";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import TextArea from "../../components/form/components/textarea";
import { random } from "../../utils/function";

const PlanCreate = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState<any[]>([]);
  const [price, setPrice] = useState<any[]>([]);
  const [form, setForm] = useState({
    title: "",
    svg: "",
    value: "",
    description: "",
  });
  const [formPrice, setFormPrice] = useState({
    title: "",
    link: "",
    price: "",
    asPrice: "",
    asDesc: "",
  });
  const [errorPlan, setErrorPlan] = useState<{
    title: any;
    svg: any;
    value: any;
  }>({ title: false, svg: false, value: false });
  const [errorPrice, setErrorPrice] = useState<{
    link: any;
    price: any;
    title: any;
  }>({
    link: false,
    price: false,
    title: false,
  });
  const [editIdPrice, setEditIdPrice] = useState<number>(0);
  const [editId, setEditId] = useState<number>(0);

  const add = () => {
    if (!form.title || !form.svg || !form.value) {
      setErrorPlan({
        title: form.title ? false : { message: "عنوان ویژگی پلن اجباری است" },
        svg: form.svg ? false : { message: "svg اجباری است" },
        value: form.value ? false : { message: "مقدار ویژگی پلن اجباری است" },
      });
    } else {
      if (editId) {
        setErrorPlan({ title: false, svg: false, value: false });
        setProperties(
          properties.map(ele => {
            if (ele.id === editId) {
              return { ...ele, ...form };
            } else {
              return ele;
            }
          })
        );
        setForm({ title: "", svg: "", value: "", description: "" });
        setEditId(0);
      } else {
        setErrorPlan({ title: false, svg: false, value: false });
        setProperties([...properties, { ...form, id: random() }]);
        setForm({ title: "", svg: "", value: "", description: "" });
      }
    }
  };
  const remove = (id: string) => {
    setProperties([...properties.filter((ele: any) => ele.id !== id)]);
    setForm({ title: "", svg: "", value: "", description: "" });
  };
  const addPrice = () => {
    if (!formPrice.link || !formPrice.price || !formPrice.title) {
      setErrorPrice({
        link: formPrice.link ? false : { message: "لینک  اجباری است" },
        price: formPrice.price ? false : { message: "قیمت  اجباری است" },
        title: formPrice.title ? false : { message: "عنوان  اجباری است" },
      });
    } else {
      if (editIdPrice) {
        setErrorPrice({ link: false, price: false, title: false });
        setPrice(
          price.map(ele => {
            if (ele.id === editIdPrice) {
              return { ...ele, ...formPrice };
            } else {
              return ele;
            }
          })
        );
        setFormPrice({
          title: "",
          link: "",
          price: "",
          asPrice: "",
          asDesc: "",
        });
        setEditIdPrice(0);
      } else {
        setErrorPrice({ link: false, price: false, title: false });
        setPrice([...price, { ...formPrice, id: random() }]);
        setFormPrice({
          title: "",
          link: "",
          price: "",
          asPrice: "",
          asDesc: "",
        });
      }
    }
  };
  const removePrice = (id: string) => {
    setPrice([...price.filter((ele: any) => ele.id !== id)]);
    setFormPrice({
      title: "",
      link: "",
      price: "",
      asPrice: "",
      asDesc: "",
    });
  };

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(properties);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    setProperties(reorderedItems);
  };
  const handleOnDragEndPrice = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(price);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    setPrice(reorderedItems);
  };
  return (
    <CustomForm
      onEnd={() => {
        navigate("/plan-list");
      }}
      title="ایجاد پلن ها"
      btn={{ text: "ایجاد پلن" }}
      api={{ route: "/admin/plans" }}
      cards={[
        {
          title: "اطلاعات پلن",
          key: "1",
        },
        {
          title: "اطلاعات ویژگی پلن",
          key: "2",
        },
        {
          title: "اطلاعات قیمت",
          key: "3",
        },
      ]}
      notSerialize
      sortUpdate={state => {
        return {
          ...state,
          properties,
          price,
        };
      }}
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
          label: "محصول",
          name: "product_id",
          type: "multiSelectApi",
          cardKey: "1",
          col: "col-span-12",
          api: {
            route: "/admin/plans/create?select=product",
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
          label: "دسته بندی",
          name: "category_id",
          type: "multiSelectApi",
          cardKey: "1",
          col: "col-span-12 ",
          api: {
            route: "/admin/plans/create?select=category",
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
          label: "کشور",
          name: "group_id",
          type: "multiSelectApi",
          cardKey: "1",
          col: "col-span-12",
          exists: { keys: ["product_id"] },
          depend: {
            key: "product_id",
          },

          api: {
            route: "/admin/plans/create?select=group",
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
          label: "پرفروش ترین",
          type: "checkbox",
          cardKey: "1",
          name: "best_seller",
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
                    <Input
                      onChange={({ target: { value } }) =>
                        setForm({ ...form, title: value })
                      }
                      props={{ value: form.title }}
                      label="عنوان ویژگی پلن "
                      error={errorPlan.title}
                    />
                  </div>{" "}
                  <div className="col-span-12 md:col-span-6">
                    <Input
                      onChange={({ target: { value } }) =>
                        setForm({ ...form, value })
                      }
                      props={{ value: form.value }}
                      label="مقدار ویژگی پلن "
                      error={errorPlan.value}
                    />
                  </div>
                  <div className="col-span-12">
                    <SvgInput
                      onChange={({ target: { value } }) => {
                        setForm({ ...form, svg: value });
                      }}
                      value={form.svg}
                      label="svg"
                      error={errorPlan.svg}
                    />
                  </div>
                  <div className="col-span-12">
                    <TextArea
                      onChange={({ target: { value } }) => {
                        setForm({ ...form, description: value });
                      }}
                      value={form.description}
                      label="توضیحات"
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
                  <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="droppable-list">
                      {provided => (
                        <div
                          className="block"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            padding: "8px",
                            backgroundColor: "#f8f9fa",
                          }}
                        >
                          {properties.map((item: any, key: number) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={key}
                            >
                              {provided => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  key={key}
                                  className="col-span-4 mb-2"
                                  style={{
                                    userSelect: "none",
                                    padding: "16px",
                                    margin: "0 0 8px 0",
                                    minHeight: "50px",
                                    backgroundColor: "#ffffff",
                                    color: "#333",
                                    ...provided.draggableProps.style,
                                  }}
                                >
                                  <div className="flex items-center gap-2">
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: item.svg,
                                      }}
                                    ></div>
                                    <p>{item.title}</p>
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
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                </div>
              </div>
            );
          },
        },
        {
          type: "component",
          cardKey: "3",
          name: "",
          component: () => {
            return (
              <div className="col-span-12">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12 md:col-span-4">
                    <Input
                      onChange={({ target: { value } }) =>
                        setFormPrice({ ...formPrice, title: value })
                      }
                      props={{ value: formPrice.title }}
                      label="عنوان"
                      error={errorPrice.title}
                    />
                  </div>{" "}
                  <div className="col-span-12 md:col-span-4">
                    <Input
                      onChange={({ target: { value } }) =>
                        setFormPrice({ ...formPrice, link: value })
                      }
                      props={{ value: formPrice.link }}
                      label="لینک"
                      error={errorPrice.link}
                    />
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <Input
                      onChange={({ target: { value } }) =>
                        setFormPrice({ ...formPrice, price: value })
                      }
                      props={{ value: formPrice.price }}
                      label="قیمت"
                      error={errorPrice.price}
                    />
                  </div>
                  <div className="col-span-12">
                    <Input
                      onChange={({ target: { value } }) =>
                        setFormPrice({ ...formPrice, asPrice: value })
                      }
                      props={{ value: formPrice.asPrice }}
                      label="قیمت راه اندازی"
                    />
                  </div>
                  <div className="col-span-12">
                    <TextArea
                      onChange={({ target: { value } }) =>
                        setFormPrice({ ...formPrice, asDesc: value })
                      }
                      props={{ value: formPrice.asDesc }}
                      label="توضیحات راه اندازی"
                    />
                  </div>
                  <div className="col-span-12">
                    <Btn
                      onClick={addPrice}
                      classNames="h-[40px] mr-auto px-2 text-base ant-btn css-xu9wm8 ant-btn-default border-none bg-primary text-white hover:!bg-primary hover:!text-white"
                      text={editIdPrice ? "ویرایش" : "افزودن"}
                      rightIcon={() => (editIdPrice ? <Edit /> : <Plus />)}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <DragDropContext onDragEnd={handleOnDragEndPrice}>
                    <Droppable droppableId="prices-list">
                      {provided => (
                        <div
                          className="block"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            padding: "8px",
                            backgroundColor: "#f8f9fa",
                          }}
                        >
                          {price.map((item: any, key: number) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={key}
                            >
                              {provided => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  key={key}
                                  className="col-span-4 mb-2"
                                  style={{
                                    userSelect: "none",
                                    padding: "16px",
                                    margin: "0 0 8px 0",
                                    minHeight: "50px",
                                    backgroundColor: "#ffffff",
                                    color: "#333",
                                    ...provided.draggableProps.style,
                                  }}
                                >
                                  <div className="flex items-center gap-2">
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
                                    <p>{item.link}</p>
                                    <span
                                      onClick={() => removePrice(item.id)}
                                      className="mr-auto bg-red-600 p-2 rounded-lg cursor-pointer"
                                    >
                                      <Trash className="text-white" />
                                    </span>
                                    <span
                                      onClick={() => {
                                        setEditIdPrice(item.id);
                                        setFormPrice(item);
                                      }}
                                      className="bg-primary p-2 rounded-lg cursor-pointer"
                                    >
                                      <Edit className="text-white" />
                                    </span>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                </div>
              </div>
            );
          },
        },
      ]}
    />
  );
};

export default PlanCreate;
