import { HomeItem } from "../types/homeItem";

export const homeItems: HomeItem[] = [
  {
    title: "مدیریت کاربران",
    classNames: "bg-info",
    accessKey: ["admin_create", "admin_list"],
    links: [
      {
        title: "لیست کاربران",
        accessKey: ["admin_list"],
        to: "/user-list",
      },
      {
        title: "افزودن کاربران",
        to: "/user-create",
        accessKey: ["admin_create"],
      },
    ],
  },
  {
    title: "مدیریت اعضا",
    classNames: "bg-green text-white",
    accessKey: ["user_create", "user_list"],
    links: [
      {
        title: "لیست اعضا",
        to: "/team-list",
        accessKey: ["user_list"],
      },
      {
        title: "افزودن اعضا",
        to: "/team-create",
        accessKey: ["user_create"],
      },
    ],
  },
  {
    title: "مدیریت دسته بندی ها",
    classNames: "bg-redLight",
    accessKey: ["group_account_create", "group_account_list"],
    links: [
      {
        title: "لیست دسته بندی ها",
        to: "/category-list",
        accessKey: ["group_account_list"],
      },
      {
        title: "افزودن دسته بندی ها",
        to: "/category-create",
        accessKey: ["group_account_create"],
      },
    ],
  },
  {
    title: "مدیریت محصولات",
    classNames: "bg-subPrimary text-white",
    accessKey: ["account_list"],
    links: [
      {
        title: "لیست محصولات",
        accessKey: ["account_list"],
        to: "/product-list",
      },
      {
        title: "افزودن محصولات",
        to: "/product-create",
        accessKey: ["group_account_create"],
      },
    ],
  },
  {
    title: "مدیریت گروه ها",
    classNames: "bg-yellowLight",
    accessKey: ["cheque_create", "cheque_list"],
    links: [
      {
        title: "لیست گروه ها",
        to: "/group-list",
        accessKey: ["cheque_list"],
      },
      {
        title: "افزودن گروه ها",
        to: "/group-create",
        accessKey: ["cheque_create"],
      },
    ],
  },
  {
    title: "پیکیربندی ویژگی های محصول",
    classNames: "bg-subPrimary text-white",
    accessKey: ["cheque_create", "cheque_list"],
    links: [
      {
        title: "افزودن ویژگی های محصول",
        to: "/property-create",
        accessKey: ["cheque_create"],
      },
      {
        title: "لیست ویژگی های محصول",
        to: "/property-doc",
        accessKey: ["cheque_create"],
      },
    ],
  },
];
