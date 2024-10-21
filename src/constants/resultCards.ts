import { ResultCardProps } from "../types/card/result";

export const resultCards: ResultCardProps[] = [
  {
    title: "کارمندان",
    value: "3",
    icon: require("../assets/images/vector/1.svg").default,
    classNames: "bg-info text-primary",
  },
  {
    title: "مشتریان",
    value: "13",
    icon: require("../assets/images/vector/2.svg").default,
    classNames: "bg-yellowLight text-yellow",
  },
  {
    title: "پروژه ها",
    icon: require("../assets/images/vector/3.svg").default,
    value: "33",
    classNames: "bg-light text-lightBlue",
  },
  {
    title: "مناسبت ها",
    icon: require("../assets/images/vector/4.svg").default,
    value: "33",
    classNames: "bg-redLight text-red",
  },
  {
    title: "حقوق و دستمزد",
    icon: require("../assets/images/vector/5.svg").default,
    value: "13",
    classNames: "bg-greenLight text-green",
  },
  {
    value: "43",
    title: "گزارش ها",
    icon: require("../assets/images/vector/6.svg").default,
    classNames: "bg-info text-primary",
  },
];
