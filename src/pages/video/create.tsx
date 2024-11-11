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

export const videoCreateForm: Form = {
  title: "ایجاد ویدیو",
  btn: { text: "ایجاد ویدیو" },
  api: { route: "/videos" },
  cards: [
    {
      title: "اطلاعات ویدیو",
      key: "1",
    },
  ],
  sortUpdate: (state) => {
    return {
      ...state,
    };
  },
  isProgress: true,
  elements: [
    {
      name: "title",
      label: "عنوان",
      cardKey: "1",
      col: "col-span-12",
      validation: yup.string().required("عنوان اجباری است"),
      type: "input",
    },
    {
      name: "content",
      cardKey: "1",
      label: "محتوا",
      col: "col-span-12",
      type: "textarea",
    },
    {
      label: "دسته بندی",
      name: "category_id",
      type: "selectApi",
      cardKey: "1",
      col: "col-span-12",
      api: {
        keys: ["categories"],
        sort: (state) => {
          return state.categories;
        },
      },
    },
    {
      label: "ویدیو",
      name: "video",
      type: "fileUploader",
      validation: yup.mixed().required("ویدیو اجباری است"),
      cardKey: "1",
      col: "col-span-12",
      route: "/blogs/upload",
    },
  ],
};
const VideoCreate = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [reset, setReset] = useState("");
  delete categoryCreateForm.cards;
  delete categoryCreateForm.title;
  const dispatch = useDispatch();
  return (
    <>
      <CustomForm
        {...videoCreateForm}
        elements={videoCreateForm.elements.map((ele) => {
          return ele.name === "category_id"
            ? {
                ...ele,
                onAdd: () => {
                  setIsOpen(true);
                },
              }
            : ele;
        })}
        onEnd={() => {
          navigate("/videos-list");
        }}
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

export default VideoCreate;
