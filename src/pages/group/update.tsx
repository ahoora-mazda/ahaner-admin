import React from "react";
import CustomForm from "../../components/form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const GroupUpdate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      title="ایجاد گروه"
      btn={{ text: "ویرایش گروه" }}
      api={{
        route: "/groups",
        get: "/groups/:id",
        update: "/groups/:id",
      }}
      accessUpdate={"admin_group_update"}
      onEnd={() => {
        navigate("/group-list");
      }}
      cards={[
        {
          title: "اطلاعات گروه",
          key: "1",
        },
      ]}
      update={true}
      sortUpdate={(state) => {
        return {
          ...state,

          show_in_homepage: state.show_in_homepage ? "1" : "0",
        };
      }}
      sortGet={(state) => {
        return {
          ...state,
          category_ids: state?.Categories.map((ele: any) => ele.id),
        };
      }}
      notSerialize
      elements={[
        {
          label: "عنوان",
          name: "name",
          validation: yup.string().required("عنوان اجباری است"),
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          type: "multiSelectApi",
          label: "دسته بندی",
          name: "category_ids",
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
      ]}
    />
  );
};

export default GroupUpdate;
