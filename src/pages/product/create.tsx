import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";
import Modal from "../../components/modal";
import { categoryCreateForm } from "../categories/create";
import { random } from "../../utils/function";
import { useDispatch } from "react-redux";
import { toggle } from "../../features/form";
import Input from "../../components/form/components/input";
import { API } from "../../server";
import { groupCreateForm } from "../group/create";

const ProductCreate = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenGroup, setIsOpenGroup] = useState(false);
  const [reset, setReset] = useState("");
  delete categoryCreateForm.cards;
  delete categoryCreateForm.title;
  delete groupCreateForm.cards;
  delete groupCreateForm.title;
  const dispatch = useDispatch();
  const [properties, setProperties] = useState<any[]>([]);

  const getProperties = async (id: any) => {
    const { data } = await API.get(`categories/${id}`);
    setProperties(data.data.Properties);
  };
  return (
    <>
      {" "}
      <CustomForm
        onEnd={() => {
          navigate("/product-list");
        }}
        title="ایجاد محصول"
        btn={{ text: "ایجاد محصول" }}
        api={{ route: "/products" }}
        notSerialize
        cards={[
          {
            title: "اطلاعات محصول",
            key: "1",
          },
          {
            title: "ویژگی های محصول",
            key: "2",
          },
        ]}
        sortUpdate={(state) => {
          return {
            ...state,
            show_in_homepage: state.show_in_homepage ? "1" : "0",

            property_values: properties
              .map((p) => {
                if (p.value) {
                  return {
                    property_id: p.id,
                    property_value: p.value,
                  };
                }
                return false;
              })
              .filter(Boolean),
          };
        }}
        elements={[
          {
            label: "عنوان",
            name: "name",
            validation: yup.string().required("عنوان اجباری است"),
            type: "input",
            cardKey: "1",
            col: "col-span-12 md:col-span-6",
          },
          {
            label: "اسلاگ",
            name: "slug",
            validation: yup.string().required("اسلاگ اجباری است"),
            type: "input",
            ltr: true,
            cardKey: "1",
            help: "انگلیسی وارد کنید و فاصله را با - وارد کنید",
            col: "col-span-12 md:col-span-6",
          },
          {
            label: "دسته بندی",
            name: "category_id",
            validation: yup.string().required("دسته بندی اجباری است"),
            type: "selectApi",
            onChange: (e) => {
              getProperties(e);
            },
            cardKey: "1",
            col: "col-span-12",
            api: {
              keys: ["categories"],
              sort: (state) => {
                return state.categories;
              },
            },
            onAdd: () => {
              setIsOpen(true);
            },
            addPermission: "admin_category_create",
          },
          {
            label: "گروه",
            name: "group_id",
            type: "selectApi",
            api: {
              keys: ["groups"],
              sort: (state) => {
                return state.groups.map((ele: any) => {
                  return {
                    value: ele.value,
                    label: ele.label,
                  };
                });
              },
            },
            cardKey: "1",
            col: "col-span-12",
            validation: yup.string().required("گروه اجباری است"),
            onAdd: () => {
              setIsOpenGroup(true);
            },
            addPermission: "admin_group_create",
          },
          {
            name: "description",
            label: "توضیحات",
            cardKey: "1",
            type: "textarea",
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
            type: "checkbox",
            name: "seoNeed",
            label: "ساخت اسکیما",
            cardKey: "1",
            col: "col-span-12",
          },
          {
            name: "seo_title",
            label: "عنوان صفحه",
            type: "input",
            cardKey: "1",
            validation: yup.string().when("seoNeed", {
              is: true,
              then: () => yup.string().required("عنوان اجباری است"),
            }),

            col: "col-span-12",
            exists: { keys: ["seoNeed"] },
          },
          {
            name: "seo_description",
            label: "توضیحات صفحه",
            type: "textarea",
            cardKey: "1",
            exists: { keys: ["seoNeed"] },
            col: "col-span-12",
          },

          {
            name: "seo_schema",
            label: "schema",
            cardKey: "1",
            type: "textarea",
            exists: { keys: ["seoNeed"] },
            col: "col-span-12",
          },
          {
            type: "component",
            cardKey: "2",
            name: "",
            component: () => {
              return (
                <div className="col-span-12">
                  <div className="mt-4">
                    {properties.map((item: any, key: number) => {
                      return (
                        <div key={key} className="flex items-center gap-5">
                          <div className="">
                            <p>{item.name} : </p>
                          </div>
                          <div className="flex-1">
                            <Input
                              onChange={({ target: { value } }) => {
                                setProperties(
                                  [...properties].map((p) => {
                                    if (p.id === item.id) {
                                      return { ...p, value };
                                    } else {
                                      return { ...p };
                                    }
                                  })
                                );
                              }}
                              props={{ value: item.value }}
                              label={`مقدار ${item.name}`}
                            />
                          </div>{" "}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            },
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
      <Modal
        isOpen={isOpenGroup}
        className="!max-w-2xl"
        title="افزودن گروه"
        onClose={() => {
          setIsOpenGroup(false);
          setReset(random());
        }}
      >
        <CustomForm
          key={reset}
          {...groupCreateForm}
          elements={groupCreateForm.elements.filter((ele) => ele.validation)}
          onEnd={() => {
            setIsOpenGroup(false);
            setReset(random());
            dispatch(toggle());
          }}
        />
      </Modal>
    </>
  );
};

export default ProductCreate;
