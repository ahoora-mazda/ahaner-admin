import { useState } from "react";
import Btn from "../../components/form/components/button";
import Modal from "../../components/modal";
import CustomTable from "../../components/table";
import { API } from "../../server";
import { random } from "../../utils/function";
const RequestPrices = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [depend, setDepend] = useState<string>("");
  const [status, setStatus] = useState("");
  const changeStatus = async () => {
    try {
      setLoading(true);
      await API.post(`/tickets/${id}`, {
        status: status === "active" ? "inactive" : "active",
      });
      setLoading(false);
      setModal(false);
      setId(0);
      setDepend(random());
    } catch (error) {
      setLoading(false);
      setModal(false);
      setId(0);
    }
  };
  return (
    <>
      <CustomTable
        title="لیست درخواست ها"
        subTitle="درخواست ها"
        api={{ route: "/price-request" }}
        sort={(state) => {
          return {
            ...state,
            ...state.user,
            mobile: (
              <a className="text-primary" href={`tel:${state?.user?.mobile}`}>
                {state?.user?.mobile}
              </a>
            ),
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
            key: "name",
            title: "نام",
          },
          {
            key: "mobile",
            title: "موبایل",
          },
          {
            key: "message",
            title: "پیام",
          },
          {
            key: "status",
            title: "وضعیت",
            type: "enum",
            enum: {
              waiting: "در انتظار",
              readed: "بررسی شده",
            },
          },
          {
            key: "",
            title: "عملیات",
            type: "operation",
            options: [
              {
                title: "حذف",
                type: "delete",
                route: "/tickets",
                accessKey: "admin_price_request_delete",
              },
              {
                title: "تغییر وضعیت",
                type: "custom",
                accessKey: "admin_price_request_status_update",

                onClick: (id, data) => {
                  setId(+id);
                  setModal(true);
                  setStatus(data.status);
                },
              },
            ],
          },
        ]}
      />
      <Modal
        title={status === "active" ? "رد نظر" : "تایید نظر"}
        isOpen={modal}
        onClose={() => {
          setModal(false);
          setId(0);
        }}
      >
        <h2 className="text-right mb-2">آیا برای تغییر وضعیت مطمين هستید؟ </h2>
        <p className="text-xs text-right">
          بعد از تغییر وضعیت به خوانده شده از این لیست حذف میشود!
        </p>
        <div className="flex items-center gap-2 mt-4">
          <Btn
            loading={loading}
            text="تایید"
            classNames="bg-red py-1 px-6 text-white"
            onClick={changeStatus}
          />
          <Btn
            text="بستن"
            classNames="bg-info py-1 px-6"
            onClick={() => setModal(false)}
          />
        </div>
      </Modal>
    </>
  );
};

export default RequestPrices;
