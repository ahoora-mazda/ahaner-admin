import React, { useEffect, useMemo, useState } from "react";
import { API } from "../../server";
import Loader from "../../components/loader";
import { renderPrice, toDate } from "../../utils/function";
import PieChart from "../../components/pieChart";
import CustomTable from "../../components/table";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const UserDashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>({});
  const [payment, setPayment] = useState<any>(false);
  const [step, setStep] = useState<number>(1);
  const { id } = useSelector((state: RootState) => state.userReducer);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await API.get("/subscriber/dashboard/get");
        setData(data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <div className="flex relative items-center justify-start text-white rounded-lg px-4 py-2 mb-2 h-[200px] overflow-hidden">
        <div
          className="relative z-10  p-2 rounded-lg"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <h1 className="text-[30px] font-bold text-white ">پرداخت ماهانه</h1>
          <button
            onClick={() => {
              setPayment({ id });
            }}
            className="bg-primary w-full rounded-lg mt-2 py-2"
          >
            ثبت پرداخت
          </button>
        </div>

        <img
          alt=""
          className="absolute w-full h-full right-0 top-0 object-cover z-[1]"
        />
        <div className="bg-primary z-[2] w-full h-full left-0 top-0 absolute opacity-[0.4]"></div>
      </div>
      {loading ? (
        <Loader classNames="w-full" height={"50vh"} />
      ) : (
        <>
          {" "}
          <div className="">
            <h1 className="mb-2 text-lg font-bold">شاخص مالی پایه شما</h1>
            <div className="grid grid-cols-12 gap-2">
              {[
                {
                  label: "حق عضویت",
                  value: renderPrice(
                    data.active_fiscal_year.fiscal_year_item
                      .amount_membership_fee,
                    true
                  ),
                  className: "bg-info",
                },
                {
                  label: "حق اشتراک ماهانه",
                  value: renderPrice(
                    +data.active_fiscal_year.fiscal_year_item
                      .amount_membershipـright_month *
                      data.info.subscriber.status_portion,
                    true
                  ),
                  help: `به ازای ${data.info.subscriber.status_portion} سهم `,
                  keyActive: "monthly_subscription",
                  className: "bg-green text-white",
                },
                {
                  label: "حق مشارکت ماهانه",
                  value: renderPrice(
                    +data.active_fiscal_year.fiscal_year_item
                      .amount_participate_right,
                    true
                  ),
                  keyActive: "participationـrights",
                  className: "bg-redLight",
                },
                {
                  label: "حق کسر انگیزشی",
                  value: renderPrice(
                    +data.active_fiscal_year.fiscal_year_item
                      .amount_motivational,
                    true
                  ),
                  keyActive: "motivational",
                  className: "bg-subPrimary text-white",
                },
              ].map(item => {
                if (item.keyActive) {
                  if (data.info.subscriber[item.keyActive] === "active") {
                    return (
                      <div
                        className={`px-4 py-2 col-span-12 md:col-span-4 lg:col-span-3 rounded-lg mb-2 ${item.className}`}
                      >
                        {" "}
                        <div className="">
                          <h3 className="text-lg font-semibold mb-2 text-center">
                            {item.label}
                          </h3>
                          <p className="text-center">{item.value}</p>
                          <p className="text-center text-sm">{item.help}</p>
                        </div>
                      </div>
                    );
                  }
                  return <></>;
                } else {
                  return (
                    <div
                      className={`px-4 py-2 col-span-12 md:col-span-4 lg:col-span-3 rounded-lg mb-2 ${item.className}`}
                    >
                      {" "}
                      <div className="">
                        <h3 className="text-lg font-semibold mb-2 text-center">
                          {item.label}
                        </h3>
                        <p className="text-center">{item.value}</p>
                        <p className="text-center text-sm">{item.help}</p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>{" "}
          <div className="">
            <h1 className="mb-2 text-lg font-bold mt-4">وضعیت تسهیلات شما</h1>
            <div className="grid grid-cols-12 gap-2">
              {[
                {
                  label: "تسهیلات دریافت شما",
                  value: `${data.facilities.received_facility.count} عدد`,
                  value2: renderPrice(
                    data.facilities.received_facility.total_amount,
                    true
                  ),
                  className: "bg-info",
                },
                {
                  label: "تسهیلات جاری فعال",
                  value: `${data.facilities.current_facility.count} عدد`,
                  value2: renderPrice(
                    data.facilities.current_facility.total_amount,
                    true
                  ),
                  className: "bg-green text-white",
                },
                {
                  label: "اقساط پرداخت شده تسهیلات جاری",
                  value: `${data.facilities.current_facility.payment_installment.count} عدد`,
                  value2: renderPrice(
                    data.facilities.current_facility.payment_installment
                      .total_amount,
                    true
                  ),
                  className: "bg-redLight",
                },
                {
                  label: "اقساط باقی مانده تسهیلات جاری",
                  value: `${data.facilities.current_facility.remaining_installment.count} عدد`,
                  value2: renderPrice(
                    data.facilities.current_facility.remaining_installment
                      .total_amount,
                    true
                  ),
                  className: "bg-subPrimary text-white",
                },
              ].map(item => {
                return (
                  <div
                    className={`px-4 py-2 col-span-12 md:col-span-4 lg:col-span-3 rounded-lg mb-2 ${item.className}`}
                  >
                    {" "}
                    <div className="">
                      <h3 className="text-lg font-semibold mb-2 text-center">
                        {item.label}
                      </h3>
                      <p className="text-center">{item.value}</p>
                      <p className="text-center">{item.value2}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>{" "}
          <div className="">
            <h1 className="mb-2 text-lg font-bold mt-4">
              آخرین پرداخت شما به صندوق
            </h1>
            <div className="grid grid-cols-12 gap-2">
              {[
                {
                  label: "بابت حق عضویت",
                  value: toDate(
                    data?.last_payment?.initial_membership?.payment_date
                  ),
                  value2: renderPrice(
                    data?.last_payment?.initial_membership?.payment_amount,
                    true
                  ),
                  check: data?.last_payment?.initial_membership?.payment_date,
                  className: "bg-info",
                },
                {
                  label: "بابت حق اشتراک ماهانه",
                  value: toDate(
                    data?.last_payment?.membershipـright?.payment_date
                  ),
                  value2: renderPrice(
                    data?.last_payment?.membershipـright?.payment_amount,
                    true
                  ),
                  check: data?.last_payment?.membershipـright?.payment_date,

                  className: "bg-green text-white",
                },
                {
                  label: "بابت حق مشارکت ماهانه",
                  value: toDate(
                    data?.last_payment?.participate_right?.payment_date
                  ),
                  value2: renderPrice(
                    data?.last_payment?.participate_right?.payment_amount,
                    true
                  ),
                  check: data?.last_payment?.participate_right?.payment_date,
                  className: "bg-redLight",
                },
                {
                  label: "بابت حق کسر انگیزشی",
                  value: toDate(data?.last_payment?.motivational?.payment_date),
                  value2: renderPrice(
                    data?.last_payment?.motivational?.payment_amount,
                    true
                  ),
                  check: data?.last_payment?.motivational?.payment_date,
                  className: "bg-subPrimary text-white",
                },
              ].map(item => {
                if (item.check) {
                  return (
                    <div
                      className={`px-4 py-2 col-span-12 md:col-span-4 lg:col-span-3 rounded-lg mb-2 ${item.className}`}
                    >
                      {" "}
                      <div className="">
                        <h3 className="text-lg font-semibold mb-2 text-center">
                          {item.label}
                        </h3>
                        <p className="text-center">{item.value}</p>
                        <p className="text-center">{item.value2}</p>
                      </div>
                    </div>
                  );
                }
                return <></>;
              })}
            </div>
          </div>{" "}
          {data.last_receipt && (
            <div className="">
              <h1 className="mb-2 text-lg font-bold mt-4">
                آخرین دریافت شما از صندوق
              </h1>
              <div className="grid grid-cols-12 gap-2">
                {[
                  {
                    label: "بابت",
                    value2: data?.last_receipt?.cheque_sheet?.description,
                    className: "bg-info",
                  },
                  {
                    label: "مبلغ دریافت شده",
                    value2: renderPrice(
                      data?.last_receipt?.cheque_sheet?.amount,
                      true
                    ),
                    className: "bg-green text-white",
                  },
                  {
                    label: "تاریخ دریافت",
                    value: toDate(data?.last_receipt?.cheque_sheet?.date),
                    className: "bg-redLight",
                  },
                  {
                    label: "شناسه دریافت",
                    value: data?.last_receipt?.cheque_sheet?.national_code,
                    value2: `${data?.last_receipt?.creator.firstname} ${data?.last_receipt?.creator.lastname}`,
                    className: "bg-subPrimary text-white",
                  },
                ].map(item => {
                  return (
                    <div
                      className={`px-4 py-2 col-span-12 md:col-span-4 lg:col-span-3 rounded-lg mb-2 ${item.className}`}
                    >
                      {" "}
                      <div className="">
                        <h3 className="text-lg font-semibold mb-2 text-center">
                          {item.label}
                        </h3>
                        <p className="text-center">{item.value}</p>
                        <p className="text-center">{item.value2}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 gap-2">
            <div className="md:col-span-1 col-span-2">
              <CustomTable
                subTitle="لیست آخرین اعلان ها"
                dashboard
                sortAllData={all => {
                  return {
                    ...all,
                    data: all.last_broadcast_notify_list.map(
                      (ele: any, key: number) => {
                        return {
                          ...ele,
                        };
                      }
                    ),
                  };
                }}
                sort={state => {
                  return {
                    sender: state.sender.fullname,
                    message: state.message.message,
                    file: state.message.file,
                    id: state.message_box.id,
                  };
                }}
                headers={[
                  {
                    key: "sender",
                    title: "ارسال کننده",
                  },
                  {
                    key: "message",
                    title: "پیام",
                  },
                  {
                    key: "file",
                    title: "فایل",
                  },
                  {
                    key: "",
                    title: "عملیات",
                    type: "operation",
                    options: [
                      {
                        title: "مشاهده",
                        type: "edit",
                        route: "/notifications",
                        accessKey: "subscriber",
                      },
                    ],
                  },
                ]}
                api={{ route: "/subscriber/dashboard/get" }}
              />
            </div>
            <div className="md:col-span-1 col-span-2">
              <PieChart
                data={[
                  data.chart.total_payment_initial_membership,
                  data.chart.total_payment_membershipـright,
                  data.chart.total_payment_motivational,
                  data.chart.total_payment_participate_right,
                ]}
                labels={[
                  "حق عضویت اولیه",
                  "حق اشتراک",
                  "کسر انگیزشی",
                  "حق مشارکت",
                ]}
                title="نمودار تجزیه پرداخت های شما"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDashboard;
