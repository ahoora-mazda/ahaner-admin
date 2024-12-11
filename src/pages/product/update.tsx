import { Tabs, TabsProps } from "antd";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Edit, History } from "tabler-icons-react";
import * as yup from "yup";
import CustomForm from "../../components/form";
import Input from "../../components/form/components/input";
import CustomTable from "../../components/table";
import Modal from "../../components/modal";
import { useDispatch } from "react-redux";
import { formattedPrice, random, unFormattedPrice } from "../../utils/function";
import { toggle } from "../../features/table";
import { Button, Tooltip } from "antd";
import { FileExcelOutlined } from "@ant-design/icons";
import { API } from "../../server";

const ProductCreate = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState<any[]>([]);

  const items: TabsProps["items"] = [
    {
      key: "membershipـright",
      label: (
        <div className="flex gap-2">
          <Edit />
          <p>ویرایش محصول</p>
        </div>
      ),
      children: (
        <>
          {" "}
          <CustomForm
            onEnd={() => {
              navigate("/product-list");
            }}
            btn={{ text: "ویرایش محصول" }}
            api={{
              route: "/products",
              get: "/products/:id",
              update: "/products/:id",
            }}
            update
            accessUpdate={"admin_product_update"}
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
              delete state.Product_Core;
              delete state.Property_Values;
              delete state.Group;
              return {
                ...state,
                show_in_homepage: state.show_in_homepage ? 1 : 0,
                property_values: properties.map((p) => {
                  return {
                    property_id: p.id,
                    property_value: p.value,
                  };
                }),
              };
            }}
            sortGet={(state) => {
              setProperties(
                state.Property_Values.map((p: any) => {
                  return { name: p.Property?.name, id: p.id, value: p.value };
                })
              );
              return {
                ...state,

                seoNeed: state.seo_id ? true : false,
                seo_title: state?.Seo_Datum?.title,
                seo_description: state?.Seo_Datum?.description,
                seo_schema: state?.Seo_Datum?.schema,
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
                label: "محصول اصلی",
                name: "product_core_id",
                type: "selectApi",
                api: {
                  keys: ["product_cores"],
                  sort: (state) => {
                    return state.product_cores.map((ele: any) => {
                      return {
                        value: ele.value,
                        label: ele.label,
                        properties: ele.Properties,
                      };
                    });
                  },
                },
                cardKey: "1",
                validation: yup.string().required("محصول اصلی اجباری است"),
                col: "col-span-12",
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
        </>
      ),
    },
    {
      key: "normal",
      label: (
        <div className="flex gap-2">
          <History />
          <p>تاریخچه قیمت</p>
        </div>
      ),
      children: (
        <>
          <HistoryTab />
        </>
      ),
    },
  ];
  return (
    <>
      <Tabs className="mt-4" defaultActiveKey="1" items={items} />
    </>
  );
};

const HistoryTab = () => {
  const { id } = useParams();
  const [addModal, setAddModal] = useState<boolean | number>(false);
  const [updateData, setUpdateData] = useState<any>({});
  const navigate = useNavigate();
  const [reset, setReset] = useState("");
  const dispatch = useDispatch();
  const [exportModal, setExportModal] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <CustomTable
        onClickAdd={() => {
          setAddModal(true);
        }}
        btn={() => {
          return (
            <Tooltip trigger={["hover", "focus"]} title="افزودن ردیف جدید">
              <Button
                type="text"
                onClick={() => {
                  setExportModal(true);
                }}
                icon={<FileExcelOutlined size={30} />}
                className="h-[40px] px-2  text-base ant-btn css-xu9wm8 ant-btn-default border-none bg-primary text-white hover:!bg-primary hover:!text-white"
              ></Button>
            </Tooltip>
          );
        }}
        accessAdd={"admin_product_price_history_create"}
        add="/"
        subTitle="تاریخچه قیمت"
        api={{ route: `/product-price-history?product_id=${id}` }}
        sort={(state) => {
          return {
            ...state.Product,
            ...state,
          };
        }}
        headers={[
          {
            title: "ردیف",
            type: "_idx",
            key: "",
            filterType: "sort",
          },
          {
            key: "price",
            title: "قیمت",
            type: "price",
            sort: {
              key: "price",
            },
          },
          {
            key: "price_date",
            title: "تاریخ",
            type: "date",
            sort: {
              key: "price_date",
            },
          },
          {
            key: "created_at",
            title: "تاریخ ایجاد",
            type: "date",
            sort: {
              key: "date",
            },
          },
          {
            key: "",
            title: "عملیات",
            type: "operation",
            options: [
              {
                title: "ویرایش",
                type: "custom",
                route: "/history-list/:id",
                accessKey: "permission_show",
                onClick: (id, data) => {
                  setAddModal(+id);
                  setUpdateData(data);
                },
              },
              {
                title: "حذف",
                type: "delete",
                route: "/product-price-history",
                accessKey: "cheque_remove",
              },
            ],
          },
        ]}
      />
      <Modal
        title="خروجی اکسل قیمت ها"
        isOpen={exportModal}
        onClose={() => setExportModal(false)}
      >
        <CustomForm
          notSerialize
          key={reset}
          btn={{ text: "دریافت اکسل", loading }}
          api={{
            route: "/product-price-history/export",
            onSubmit: async (data) => {
              try {
                setLoading(true);
                const response = await API.post(
                  "/product-price-history/export",
                  { ...data, product_id: id },
                  {
                    responseType: "blob",
                  }
                );

                const url = window.URL.createObjectURL(
                  new Blob([response.data])
                );
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", `price-history-${id}.xlsx`); // نام فایل
                document.body.appendChild(link);
                link.click();
                link.remove();
              } finally {
                setLoading(true);

                setExportModal(false);
              }
            },
          }}
          sortUpdate={(state) => {
            return {
              ...state,
              product_id: id,
            };
          }}
          onEnd={() => {
            setAddModal(false);
            setReset(random());
          }}
          elements={[
            {
              label: "تاریخ شروع",
              name: "start_date",
              validation: yup.string().required("تاریخ شروع اجباری است"),
              type: "datePicker",
              cardKey: "1",
              col: "col-span-12",
            },
            {
              label: "تاریخ پایان",
              name: "end_date",
              validation: yup.string().required("تاریخ پایان اجباری است"),
              type: "datePicker",
              cardKey: "1",
              col: "col-span-12",
            },
          ]}
        />
      </Modal>
      <Modal
        title={
          typeof addModal === "number"
            ? "ویرایش تاریخچه قیمت"
            : "افزودن تاریخچه قیمت"
        }
        isOpen={addModal ? true : false}
        onClose={() => {
          setAddModal(false);
          setUpdateData({});
        }}
        className="!max-w-3xl"
      >
        <CustomForm
          notSerialize
          key={reset}
          btn={{ text: typeof addModal === "number" ? "ویرایش" : "ثبت" }}
          api={{
            route: "/product-price-history",
            get: `/product-price-history/${updateData?.id}`,
            update: `/product-price-history/${updateData?.id}`,
          }}
          update={typeof addModal === "number"}
          accessUpdate={"account_update"}
          sortUpdate={(state) => {
            return {
              ...state,
              product_id: id,
              price: unFormattedPrice(state.price),
            };
          }}
          sortGet={(state) => {
            return {
              ...state,
              price: formattedPrice(state.price),
            };
          }}
          onEnd={() => {
            setAddModal(false);
            setReset(random());
            setUpdateData({});
            dispatch(toggle());
          }}
          elements={[
            {
              label: "قیمت",
              name: "price",
              validation: yup.string().required("قیمت اجباری است"),
              type: "priceInput",
              cardKey: "1",
              col: "col-span-12",
            },
            {
              label: "تاریخ",
              name: "price_date",
              validation: yup.string().required("تاریخ اجباری است"),
              type: "datePicker",
              cardKey: "1",
              col: "col-span-12",
              time: true,
            },
          ]}
        />
      </Modal>
    </>
  );
};

export default ProductCreate;
