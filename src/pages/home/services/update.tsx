import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import { Edit, Plus, Trash } from "tabler-icons-react";
import * as yup from "yup";
import CustomForm from "../../../components/form";
import Btn from "../../../components/form/components/button";
import Input from "../../../components/form/components/input";
import { random } from "../../../utils/function";
const HomeServiceUpdate = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState<any[]>([]);
  const [form, setForm] = useState({ title: "" });
  const [editId, setEditId] = useState<number>(0);
  const [errorPlan, setErrorPlan] = useState<{
    title: any;
  }>({ title: false });

  const add = () => {
    if (!form.title) {
      setErrorPlan({
        title: form.title ? false : { message: "عنوان ویژگی پلن اجباری است" },
      });
    } else {
      if (editId) {
        setErrorPlan({ title: false });
        setProperties(
          properties.map((ele) => {
            if (ele.id === editId) {
              return { ...ele, ...form };
            } else {
              return ele;
            }
          })
        );
        setForm({ title: "" });
        setEditId(0);
      } else {
        setProperties([...properties, { ...form, id: random() }]);
        setForm({ title: "" });
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
        navigate("/home/services-list");
      }}
      update
      accessUpdate={"dwad"}
      title="ایجاد خدمات صفحه اصلی"
      btn={{ text: "ایجاد خدمات صفحه اصلی" }}
      api={{
        route: "/admin/home_services",
        get: "/admin/home_services/:id",
        update: "/admin/home_services/:id",
      }}
      // notSerialize
      sortUpdate={(state) => {
        return {
          ...state,
          properties,
        };
      }}
      sortGet={(state) => {
        setProperties(state.properties)
        return state
      }}
      cards={[
        {
          title: "اطلاعات خدمات صفحه اصلی",
          key: "1",
        },
        {
          title: "ویژگی ها",
          key: "2",
        },
      ]}
      elements={[
        {
          label: "عنوان",
          name: "title",
          validation: yup.string().required("نام و نام خانوادگی اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
        },
        {
          label: "تگ",
          name: "tag",
          validation: yup.string().required("متن اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
        },
        {
          label: "لینک",
          name: "link",
          validation: yup.string().required("متن اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12 md:col-span-4",
        },
        {
          label: "توضیحات",
          name: "description",
          validation: yup.string().required("متن اجباری است"),
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          label: "تصویر",
          name: "image",
          type: "fileUploader",
          validation: yup.mixed().required("تصویر اجباری است"),
          cardKey: "1",
          col: "col-span-12",
          route: "/admin/blogs/upload",
        },
        {
          type: "component",
          cardKey: "2",
          name: "",
          component: () => {
            return (
              <div className="col-span-12">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12">
                    <Input
                      onChange={({ target: { value } }) =>
                        setForm({ ...form, title: value })
                      }
                      props={{ value: form.title }}
                      label="ویژگی"
                      error={errorPlan.title}
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
                                  <div className="flex items-center gap-2">
                                    <p>{item.title}</p>
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
      ]}
    />
  );
};

export default HomeServiceUpdate;
