import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../../components/form";
import Modal from "../../../components/modal";
import { categoryCreateForm } from "../../categories/create";
import { random } from "../../../utils/function";
import { useDispatch } from "react-redux";
import { toggle } from "../../../features/form";
const HomeCategoryCreate = () => {
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
          navigate("/home-category-list");
        }}
        title="ایجاد دسته بندی صفحه اصلی"
        btn={{ text: "ایجاد دسته بندی صفحه اصلی" }}
        api={{ route: "/category-views" }}
        cards={[
          {
            title: "اطلاعات دسته بندی صفحه اصلی",
            key: "1",
          },
        ]}
        sortUpdate={(state) => {
          return {
            ...state,
            view_type: "landing",
          };
        }}
        elements={[
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
            onAdd: () => {
              setIsOpen(true);
            },
          },
          {
            label: "ترتیب",
            name: "view_order",
            type: "input",
            cardKey: "1",
            col: "col-span-12",
          },

          {
            label: "تصویر",
            name: "image",
            type: "fileUploader",
            cardKey: "1",
            col: "col-span-12",
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

export default HomeCategoryCreate;
