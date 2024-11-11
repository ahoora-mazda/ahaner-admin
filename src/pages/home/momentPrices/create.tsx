import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../../components/form";
import Modal from "../../../components/modal";
import { categoryCreateForm } from "../../categories/create";
import { random } from "../../../utils/function";
import { useDispatch } from "react-redux";
import { toggle } from "../../../features/form";
const MomentPriceCreate = () => {
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
          navigate("/home_momentPrices-list");
        }}
        title="ایجاد قیمت لحظه ای و رقابتی"
        btn={{ text: "ایجاد قیمت لحظه ای و رقابتی" }}
        api={{ route: "/moment-prices" }}
        cards={[
          {
            title: "اطلاعات قیمت لحظه ای و رقابتی",
            key: "1",
          },
        ]}
        elements={[
          {
            label: "عنوان",
            name: "text",
            validation: yup.string().required("عنوان اجباری است"),
            type: "input",
            cardKey: "1",
            col: "col-span-12",
          },
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
                    properties: ele.Properties,
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
            label: "تصویر",
            name: "image",
            validation: yup.mixed().required("تصویر اجباری است"),
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

export default MomentPriceCreate;
