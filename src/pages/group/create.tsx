import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";
import Modal from "../../components/modal";
import { categoryCreateForm } from "../categories/create";
import { random } from "../../utils/function";
import { useDispatch } from "react-redux";
import { toggle } from "../../features/form";
import { Form } from "../../types/form";
export const groupCreateForm: Form = {
  title: "ایجاد گروه",
  btn: { text: "ایجاد گروه" },
  api: { route: "/groups" },
  cards: [
    {
      title: "اطلاعات گروه",
      key: "1",
    },
  ],
  sortUpdate: (state) => {
    return {
      ...state,
      show_in_homepage: state.show_in_homepage ? "1" : "0",
    };
  },
  notSerialize: true,
  elements: [
    {
      label: "عنوان",
      name: "name",
      validation: yup.string().required("عنوان اجباری است"),
      type: "input",
      cardKey: "1",
      col: "col-span-12",
    },
    {
      type: "selectApi",
      label: "دسته بندی",
      name: "category_id",
      validation: yup.mixed().required("دسته بندی اجباری است"),
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
      col: "col-span-12",
      cardKey: "1",
      addPermission: "admin_category_create",
    },
    {
      name: "description",
      label: "توضیحات",
      cardKey: "1",
      type: "editor",
      col: "col-span-12",
    },
    {
      type: "checkbox",
      name: "show_in_homepage",
      label: "مشاهده در صفحه اصلی",
      cardKey: "1",
      col: "col-span-12",
    },
  ],
};
const GroupCreate = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [reset, setReset] = useState("");
  delete categoryCreateForm.cards;
  delete categoryCreateForm.title;
  const dispatch = useDispatch();
  return (
    <>
      {" "}
      <CustomForm
        onEnd={() => {
          navigate("/group-list");
        }}
        {...groupCreateForm}
        elements={groupCreateForm.elements.map((ele) => {
          if (ele.name === "category_id") {
            return {
              ...ele,
              onAdd: () => {
                setIsOpen(true);
              },
            };
          }
          return ele;
        })}
      />
      <Modal
        isOpen={isOpen}
        className="!max-w-2xl"
        title="افزودن دسته بندی"
        onClose={() => {
          setIsOpen(false);
          setReset(random());
        }}
      >
        <CustomForm
          key={reset}
          {...categoryCreateForm}
          elements={categoryCreateForm.elements.filter((ele) => ele.validation)}
          onEnd={() => {
            setIsOpen(false);
            setReset(random());
            dispatch(toggle());
          }}
        />
      </Modal>
    </>
  );
};

export default GroupCreate;
