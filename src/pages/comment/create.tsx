import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";
import Modal from "../../components/modal";
import { userCreateForm } from "../user/create";
import { random } from "../../utils/function";
import { useDispatch } from "react-redux";
import { toggle } from "../../features/form";
import { categoryCreateForm } from "../categories/create";
const CommentCreate = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [reset, setReset] = useState("");
  delete userCreateForm.cards;
  delete userCreateForm.title;
  const dispatch = useDispatch();
  return (
    <>
      <CustomForm
        onEnd={() => {
          navigate("/comments-list");
        }}
        title="ایجاد نظر"
        btn={{ text: "ایجاد نظر" }}
        api={{ route: "/comments" }}
        cards={[
          {
            title: "اطلاعات نظر",
            key: "1",
          },
        ]}
        sortUpdate={(state) => {
          return {
            ...state,
          };
        }}
        notSerialize
        elements={[
          {
            label: "متن نظر",
            name: "content",
            validation: yup.string().required("متن نظر اجباری است"),
            type: "textarea",
            cardKey: "1",
            col: "col-span-12",
          },
          {
            type: "selectApi",
            label: "کاربر",
            name: "user_id",
            validation: yup.mixed().required("کاربر اجباری است"),
            api: {
              keys: ["users"],
              sort: (state) => {
                return state.users;
              },
            },
            col: "col-span-12",
            cardKey: "1",
            onAdd: () => {
              setIsOpen(true);
            },
          },
          {
            type: "selectApi",
            label: "دسته بندی",
            name: "category_id",
            api: {
              keys: ["categories"],
              sort: (state) => {
                return state.categories;
              },
            },
            col: "col-span-12",
            cardKey: "1",
            onAdd: () => {
              setIsOpenCategory(true);
            },
          },
          {
            name: "status",
            type: "select",
            label: "وضعیت",
            validation: yup.mixed().required("وضعیت اجباری است"),
            col: "col-span-12",
            cardKey: "1",
            options: [
              {
                label: "فعال",
                value: "published",
              },
              {
                label: "غیر فعال",
                value: "pending",
              },
            ],
          },
        ]}
      />
      <Modal
        isOpen={isOpen}
        className="!max-w-2xl"
        title="افزودن کاربر"
        onClose={() => {
          setIsOpen(false);
          setReset(random());
        }}
      >
        <CustomForm
          key={reset}
          {...userCreateForm}
          elements={userCreateForm.elements.filter((ele) => ele.validation)}
          onEnd={() => {
            setIsOpen(false);
            setReset(random());
            dispatch(toggle());
          }}
        />
      </Modal>
      <Modal
        isOpen={isOpenCategory}
        className="!max-w-2xl"
        title="افزودن دسته بندی"
        onClose={() => {
          setIsOpenCategory(false);
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

export default CommentCreate;
