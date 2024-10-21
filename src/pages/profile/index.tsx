import React from "react";
import CustomForm from "../../components/form";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { User, UserSearch } from "tabler-icons-react";
import { Tabs, TabsProps } from "antd";

const Profile = () => {
  const { roleOne, id } = useSelector((state: RootState) => state.userReducer);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex gap-2">
          <User />
          <p>اطلاعات شما</p>
        </div>
      ),
      children: (
        <CustomForm
          btn={{ text: "ویرایش پروفایل" }}
          api={{
            route: "/accountant/users/create",
            get: "/info",
            update:
              roleOne === "subscriber"
                ? `/subscriber/${id}/update`
                : "/colleague/update",
          }}
          accessUpdate={["admin_profile", "subscriber"]}
          sortUpdate={({ password, ...otherProps }) => {
            return {
              ...otherProps,
            };
          }}
          sortGet={state => {
            if (roleOne === "admin") {
              return {
                ...state,
                year: state.birth_date,
                state_id: +state.state_id,
                city_id: +state.city_id,
              };
            } else {
              return {
                ...state.subscriber,
                year: state?.subscriber?.birth_date,
                state_id: +state?.subscriber?.state_id,
                city_id: +state?.subscriber?.city_id,
              };
            }
          }}
          cards={[
            {
              title: "اطلاعات شناسنامه",
              key: "1",
            },
            {
              title: "اطلاعات ارتباطی",
              key: "2",
            },
            {
              title: "اطلاعات شغلی",
              key: "3",
            },
          ]}
          update={true}
          elements={[
            {
              label: "تصویر پروفایل",
              name: "avatar",
              type: "imageUploader",
              col: "col-span-12",
              wrapperClassName: "flex items-center justify-center",
              cardKey: "1",
            },
            {
              label: "نام",
              name: "firstname",
              validation: yup.string().required("نام اجباری است"),
              type: "input",
              cardKey: "1",
            },
            {
              label: "نام خانوادگی",
              name: "lastname",
              validation: yup.string().required("نام خانوادگی اجباری است"),
              type: "input",
              cardKey: "1",
            },
            {
              label: "کد ملی",
              name: "nationalcode",
              validation: yup.string().required("کد ملی اجباری است"),
              type: "input",
              cardKey: "1",
            },
            {
              label: "تاریخ صدور شناسنامه",
              name: "birth_certificate_id",
              // validation: yup.string().required("کد ملی اجباری است"),
              type: "datePicker",
              cardKey: "1",
            },
            {
              label: "وضعیت تاهل",
              name: "status_marital",
              // validation: yup.string().required("وضعیت تاهل اجباری است"),
              type: "select",
              options: [
                { value: "single", label: "مجرد" },
                { value: "married", label: "متاهل" },
              ],
              cardKey: "1",
            },
            {
              label: "نام پدر",
              name: "fathername",
              validation: yup.string().required("نام پدر اجباری است"),
              cardKey: "1",
              type: "input",
            },
            {
              label: "محل تولد",
              name: "place_birth",
              // validation: yup.string().required("محل تولد اجباری است"),
              cardKey: "1",
              type: "input",
            },
            {
              label: "محل صدور شناسنامه",
              name: "place_issuance_birth_certificate",
              // validation: yup.string().required("محل صدور شناسنامه اجباری است"),
              cardKey: "1",
              type: "input",
            },
            {
              label: "تاریخ تولد",
              name: "year",
              validation: yup.string().required("تاریخ تولد اجباری است"),
              cardKey: "1",
              type: "datePicker",
            },
            {
              label: "آدرس محل کار",
              name: "office_address",
              // validation: yup.string().required("آدرس محل کار اجباری است"),
              cardKey: "3",
              col: "col-span-12 ",
              type: "input",
            },
            {
              label: "کد پرسنلی",
              name: "personal_id",
              validation: yup.string().required("کد پرسنلی اجباری است"),
              cardKey: "3",
              type: "input",
              col: "col-span-12 md:col-span-6",
            },

            {
              label: "تاریخ استخدام",
              name: "date_employeement",
              // validation: yup.string().required("تاریخ استخدام اجباری است"),
              cardKey: "3",
              col: "col-span-12 md:col-span-6",
              type: "datePicker",
            },

            {
              label: "آدرس منزل",
              name: "home_address",
              // validation: yup.string().required("آدرس منزل اجباری است"),
              cardKey: "2",
              type: "input",
              col: "col-span-12",
            },
            {
              label: "کد پستی",
              name: "postalcode",
              // validation: yup.string().required("کد پستی اجباری است"),
              cardKey: "2",
              type: "input",
              col: "col-span-12 md:col-span-4",
            },
            {
              label: "شماره تماس",
              name: "phone",
              // validation: yup.string().required("شماره تماس اجباری است"),
              cardKey: "2",
              type: "input",
              col: "col-span-12 md:col-span-4",
            },
            {
              label: "شماره موبایل",
              name: "mobile",
              validation: yup.string().required("شماره موبایل اجباری است"),
              cardKey: "2",
              type: "input",
              col: "col-span-12 md:col-span-4",
            },
            {
              label: "استان",
              col: "col-span-12 md:col-span-6",
              name: "state_id",
              type: "selectApi",
              cardKey: "2",
              api: {
                route: "/state/list",
                sort: state => {
                  return state.map((ele: any) => {
                    return { value: ele.id, label: ele.title.trim() };
                  });
                },
              },
            },
            {
              label: "شهر",
              name: "city_id",
              type: "selectApi",
              col: "col-span-12 md:col-span-6",
              cardKey: "2",
              api: {
                route: "/city/list",
                sort: state => {
                  return state.map((ele: any) => {
                    return { value: +ele.id, label: ele.title.trim() };
                  });
                },
              },
              depend: {
                key: "state_id",
              },
            },
          ]}
        />
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex gap-2">
          <UserSearch />
          <p>اطلاعات افراد درجه یک</p>
        </div>
      ),
    },
  ];
  return (
    <>
      {roleOne === "subscriber" ? (
        <>
          <Tabs className="mt-4" defaultActiveKey="1" items={items} />
        </>
      ) : (
        <>
          {" "}
          <CustomForm
            btn={{ text: "ویرایش پروفایل" }}
            api={{
              route: "/accountant/users/create",
              get: "/info",
              update: "/colleague/update",
            }}
            accessUpdate={["admin_profile", "subscriber"]}
            sortUpdate={({ password, ...otherProps }) => {
              return {
                ...otherProps,
              };
            }}
            sortGet={state => {
              if (roleOne === "admin") {
                return {
                  ...state,
                  year: state.birth_date,
                  state_id: +state.state_id,
                  city_id: +state.city_id,
                };
              } else {
                return {
                  ...state.subscriber,
                  year: state?.subscriber?.birth_date,
                  state_id: +state?.subscriber?.state_id,
                  city_id: +state?.subscriber?.city_id,
                };
              }
            }}
            cards={[
              {
                title: "عملیات کنترلی",
                key: "4",
              },
              {
                title: "اطلاعات شناسنامه",
                key: "1",
              },
              {
                title: "اطلاعات ارتباطی",
                key: "2",
              },
              {
                title: "اطلاعات شغلی",
                key: "3",
              },
            ]}
            update={true}
            elements={[
              {
                label: "تصویر پروفایل",
                name: "avatar",
                type: "imageUploader",
                col: "col-span-12",
                wrapperClassName: "flex items-center justify-center",
                cardKey: "1",
              },
              {
                label: "نام",
                name: "firstname",
                validation: yup.string().required("نام اجباری است"),
                type: "input",
                cardKey: "1",
              },
              {
                label: "نام خانوادگی",
                name: "lastname",
                validation: yup.string().required("نام خانوادگی اجباری است"),
                type: "input",
                cardKey: "1",
              },
              {
                label: "کد ملی",
                name: "nationalcode",
                validation: yup.string().required("کد ملی اجباری است"),
                type: "input",
                cardKey: "1",
              },
              {
                label: "تاریخ صدور شناسنامه",
                name: "birth_certificate_id",
                // validation: yup.string().required("کد ملی اجباری است"),
                type: "datePicker",
                cardKey: "1",
              },
              {
                label: "وضعیت تاهل",
                name: "status_marital",
                // validation: yup.string().required("وضعیت تاهل اجباری است"),
                type: "select",
                options: [
                  { value: "single", label: "مجرد" },
                  { value: "married", label: "متاهل" },
                ],
                cardKey: "1",
              },
              {
                label: "نام پدر",
                name: "fathername",
                validation: yup.string().required("نام پدر اجباری است"),
                cardKey: "1",
                type: "input",
              },
              {
                label: "محل تولد",
                name: "place_birth",
                // validation: yup.string().required("محل تولد اجباری است"),
                cardKey: "1",
                type: "input",
              },
              {
                label: "محل صدور شناسنامه",
                name: "place_issuance_birth_certificate",
                // validation: yup.string().required("محل صدور شناسنامه اجباری است"),
                cardKey: "1",
                type: "input",
              },
              {
                label: "تاریخ تولد",
                name: "year",
                validation: yup.string().required("تاریخ تولد اجباری است"),
                cardKey: "1",
                type: "datePicker",
              },
              {
                label: "آدرس محل کار",
                name: "office_address",
                // validation: yup.string().required("آدرس محل کار اجباری است"),
                cardKey: "3",
                col: "col-span-12 ",
                type: "input",
              },
              {
                label: "کد پرسنلی",
                name: "personal_id",
                validation: yup.string().required("کد پرسنلی اجباری است"),
                cardKey: "3",
                type: "input",
                col: "col-span-12 md:col-span-6",
              },

              {
                label: "تاریخ استخدام",
                name: "date_employeement",
                // validation: yup.string().required("تاریخ استخدام اجباری است"),
                cardKey: "3",
                col: "col-span-12 md:col-span-6",
                type: "datePicker",
              },

              {
                label: "آدرس منزل",
                name: "home_address",
                // validation: yup.string().required("آدرس منزل اجباری است"),
                cardKey: "2",
                type: "input",
                col: "col-span-12",
              },
              {
                label: "کد پستی",
                name: "postalcode",
                // validation: yup.string().required("کد پستی اجباری است"),
                cardKey: "2",
                type: "input",
                col: "col-span-12 md:col-span-4",
              },
              {
                label: "شماره تماس",
                name: "phone",
                // validation: yup.string().required("شماره تماس اجباری است"),
                cardKey: "2",
                type: "input",
                col: "col-span-12 md:col-span-4",
              },
              {
                label: "شماره موبایل",
                name: "mobile",
                validation: yup.string().required("شماره موبایل اجباری است"),
                cardKey: "2",
                type: "input",
                col: "col-span-12 md:col-span-4",
              },

              {
                label: "وضعیت",
                name: "status",
                // validation: yup.string().required("وضعیت اجباری است"),
                col: "col-span-12 md:col-span-6",
                type: "select",
                cardKey: "4",
                options: [
                  {
                    label: "فعال",
                    value: "active",
                  },
                  {
                    label: "غیر فعال",
                    value: "deactive",
                  },
                ],
              },
              {
                label: "استان",
                col: "col-span-12 md:col-span-6",
                name: "state_id",
                type: "selectApi",
                cardKey: "2",
                api: {
                  route: "/state/list",
                  sort: state => {
                    return state.map((ele: any) => {
                      return { value: ele.id, label: ele.title.trim() };
                    });
                  },
                },
              },
              {
                label: "شهر",
                name: "city_id",
                type: "selectApi",
                col: "col-span-12 md:col-span-6",
                cardKey: "2",
                api: {
                  route: "/city/list",
                  sort: state => {
                    return state.map((ele: any) => {
                      return { value: +ele.id, label: ele.title.trim() };
                    });
                  },
                },
                depend: {
                  key: "state_id",
                },
              },
            ]}
          />
        </>
      )}
    </>
  );
};

export default Profile;
