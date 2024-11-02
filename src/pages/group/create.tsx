import * as yup from "yup";
import CustomForm from "../../components/form";
import { useNavigate } from "react-router-dom";

const GroupCreate = () => {
  const navigate = useNavigate();
  return (
    <CustomForm
      onEnd={() => {
        navigate("/group-list");
      }}
      title="ایجاد گروه"
      btn={{ text: "ایجاد گروه" }}
      api={{ route: "/groups" }}
      cards={[
        {
          title: "اطلاعات گروه",
          key: "1",
        },
      ]}
      sortUpdate={(state) => {
        return {
          ...state,
          show_in_homepage: state.show_in_homepage ? 1 : 0,
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
        {
          name: "seo_title",
          label: "عنوان صفحه",
          type: "input",
          cardKey: "1",
          col: "col-span-12",
        },
        {
          name: "seo_description",
          label: "توضیحات صفحه",
          type: "textarea",
          cardKey: "1",
          col: "col-span-12",
        },

        {
          name: "seo_schema",
          label: "schema",
          cardKey: "1",
          type: "textarea",
          col: "col-span-12",
        },
      ]}
    />
  );
};

export default GroupCreate;
