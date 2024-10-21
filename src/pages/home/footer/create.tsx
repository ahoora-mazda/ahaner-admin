import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../../components/form";
import Input from "../../../components/form/components/input";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { Plus, Trash , Edit } from "tabler-icons-react";
import Btn from "../../../components/form/components/button";
import { random } from "../../../utils/function";

const FooterCreate = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", link: "" });
  const [properties, setProperties] = useState<any[]>([]);
  const [errorPlan, setErrorPlan] = useState<{
    title: any;
    link: any;
  }>({ title: false, link: false });
  const [editId, setEditId] = useState<number>(0);

  const add = () => {
    if (!form.title || !form.link) {
      setErrorPlan({
        title: form.title ? false : { message: "عنوان ویژگی پلن اجباری است" },
        link: form.link ? false : { message: "لینک اجباری است" },
      });
    } else {
      if (editId) {
        setForm({ title: "", link: "" });
        setProperties(
          properties.map(ele => {
            if (ele.id === editId) {
              return { ...ele, ...form };
            } else {
              return ele;
            }
          })
        );
        setForm({ title: "", link: "" });
        setEditId(0);

      } else {
        setErrorPlan({ title: false, link: false });
        setProperties([...properties, { ...form, id: random() }]);
        setForm({ title: "", link: "" });
      }
    }
  };
  const remove = (id: string) =>
    setProperties([...properties.filter((ele: any) => ele.id !== id)]);
  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(properties);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    setProperties(reorderedItems);
  };
  return (
    <CustomForm
      onEnd={() => {
        navigate("/footer-list");
      }}
      title="ایجاد اطلاعات فوتر    "
      btn={{ text: "ایجاد اطلاعات فوتر   " }}
      notSerialize
      api={{ route: "/admin/footers" }}
      sortUpdate={state => {
        return {
          ...state,
          links: properties,
        };
      }}
      cards={[
        {
          title: " اطلاعات فوتر",
          key: "1",
        },
        {
          title: "لینک ها",
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
                      label="عنوان"
                      error={errorPlan.title}
                    />
                  </div>{" "}
                  <div className="col-span-12 md:col-span-6">
                    <Input
                      onChange={({ target: { value } }) =>
                        setForm({ ...form, link: value })
                      }
                      props={{ value: form.link }}
                      label="لینک"
                      error={errorPlan.link}
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
                <DragDropContext onDragEnd={handleOnDragEnd}>
                  <Droppable droppableId="droppable-list">
                    {(provided) => (
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
                            {(provided) => (
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
                                <div key={key} className="col-span-4 mb-2">
                                  <div className="flex items-center gap-2">
                                    <p>{item.title}</p>
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
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            );
          },
        },
      ]}
    />
  );
};

export default FooterCreate;
