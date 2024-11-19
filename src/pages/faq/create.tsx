import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";
import Modal from "../../components/modal";
import { toggle } from "../../features/form";
import { random } from "../../utils/function";
import { categoryCreateForm } from "../categories/create";

const FaqCreate = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [reset, setReset] = useState("");
  delete categoryCreateForm.cards;
  delete categoryCreateForm.title;
  const dispatch = useDispatch();

  return (
    <>
      <CustomForm
        onEnd={() => {
          navigate("/faq-list");
        }}
        sortUpdate={(state) => {
          return {
            ...state,
          };
        }}
        title="ایجاد سوالات متداول"
        btn={{ text: "ایجاد سوالات متداول" }}
        api={{ route: "/faqs" }}
        cards={[
          {
            title: "اطلاعات سوالات متداول",
            key: "1",
          },
        ]}
        notSerialize
        elements={[
          {
            name: "question",
            label: "سوال",
            type: "textarea",
            col: "col-span-12",
            cardKey: "1",
            validation: yup.string().required("سوال اجباری است"),
          },
          {
            name: "answer",
            label: "پاسخ",
            type: "textarea",
            col: "col-span-12",
            cardKey: "1",
            validation: yup.string().required("پاسخ اجباری است"),
          },
          {
            label: "دسته بندی",
            name: "category_id",
            type: "selectApi",
            api: {
              keys: ["categories"],
              sort: (state) => {
                return state.categories;
              },
            },
            cardKey: "1",
            col: "col-span-12",
            onAdd: () => {
              setIsOpen(true);
            },
            addPermission: "admin_category_create",
          },
        ]}
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

export default FaqCreate;
