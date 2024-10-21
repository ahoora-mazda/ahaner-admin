import { HomeItem } from "../types/homeItem";

export const homeItems: HomeItem[] = [
  {
    title: "مدیریت همکاران",
    classNames: "bg-info",
    accessKey: ["admin_create", "admin_list"],
    links: [
      {
        title: "لیست همکاران",
        accessKey: ["admin_list"],
        to: "/admins-list",
      },
      {
        title: "افزودن همکاران",
        to: "/admin-create",
        accessKey: ["admin_create"],
      },
    ],
  },
  {
    title: "مدیریت اعضا صندوق",
    classNames: "bg-green text-white",
    accessKey: ["user_create", "user_list"],
    links: [
      {
        title: "لیست اعضا صندوق",
        to: "/users-list",
        accessKey: ["user_list"],
      },
      {
        title: "افزودن اعضا صندوق",
        to: "/user-create",
        accessKey: ["user_create"],
      },
    ],
  },
  {
    title: "مدیریت گروه حساب",
    classNames: "bg-redLight",
    accessKey: ["group_account_create", "group_account_list"],
    links: [
      {
        title: "لیست گروه حساب",
        to: "/group-accounts-list",
        accessKey: ["group_account_list"],
      },
      {
        title: "افزودن گروه حساب",
        to: "/group-account-create",
        accessKey: ["group_account_create"],
      },
    ],
  },
  {
    title: "مدیریت حساب",
    classNames: "bg-subPrimary text-white",
    accessKey: ["account_list"],
    links: [
      {
        title: "لیست حساب",
        accessKey: ["account_list"],
        to: "/accounts-list",
      },
    ],
  },
  {
    title: "مدیریت دسته چک",
    classNames: "bg-yellowLight",
    accessKey: ["cheque_create", "cheque_list"],
    links: [
      {
        title: "لیست دسته چک",
        to: "/cheques-list",
        accessKey: ["cheque_list"],
      },
      {
        title: "افزودن دسته چک",
        to: "/cheque-create",
        accessKey: ["cheque_create"],
      },
    ],
  },
  {
    title: "پیکیربندی اسناد",
    classNames: "bg-subPrimary text-white",
    accessKey: ["cheque_create", "cheque_list"],
    links: [
      {
        title: "پیکیربندی اسناد هوشمند",
        to: "/smart-doc",
        accessKey: ["cheque_list"],
      },
      {
        title: "افزودن سند عادی",
        to: "/doc-create",
        accessKey: ["cheque_create"],
      },
      {
        title: "لیست اسناد عادی",
        to: "/normal-doc",
        accessKey: ["cheque_create"],
      },
    ],
  },
  {
    title: "مدیریت تسهیلات",
    classNames: "bg-redLight",
    accessKey: ["cheque_create", "cheque_list"],
    links: [
      {
        title: "افزودن تسهیلات",
        to: "/facilities-create",
        accessKey: ["cheque_create"],
      },
      {
        title: "لیست تسهیلات",
        to: "/facilities-list",
        accessKey: ["cheque_create"],
      },
    ],
  },
  {
    title: "مدیریت سال مالی",
    classNames: "bg-info",
    accessKey: ["cheque_create", "cheque_list"],
    links: [
      {
        title: "افزودن سال مالی",
        to: "/facilities-create",
        accessKey: ["cheque_create"],
      },
      {
        title: "لیست سال مالی",
        to: "/facilities-list",
        accessKey: ["cheque_create"],
      },
    ],
  },
];
