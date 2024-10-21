import { useState } from "react";
import Btn from "../../components/form/components/button";
import Modal from "../../components/modal";
import CustomTable from "../../components/table";
import { API } from "../../server";
import { random } from "../../utils/function";

const CommentList = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [depend, setDepend] = useState<string>("");
  const [status, setStatus] = useState("");
  const changeStatus = async () => {
    try {
      setLoading(true);
      await API.put(`/admin/comments/${id}`, {
        _method: "PUT",
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
        key={depend}
        title="لیست نظرات"
        subTitle="نظرات"
        api={{ route: "/admin/comments" }}
        sort={state => {
          return {
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
            key: "name",
            title: "نام",
          },
          {
            key: "mobile",
            title: "موبایل",
          },
          {
            key: "body",
            title: "نظر",
          },
          {
            key: "status",
            title: "وضعیت",
            type: "enum",
            enum: {
              active: "فعال",
              inactive: "غیر فعال",
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
                route: "/admin/comments",
                accessKey: "cheque_remove",
              },
              {
                title: "ویرایش",
                type: "edit",
                route: "/comment-list/:id",
                accessKey: "permission_show",
              },
              {
                title: "تغییر وضعیت",
                type: "custom",
                accessKey: "",
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
        <h2 className="text-right mb-2">
          آیا برای {status === "active" ? "رد نظر" : "تایید نظر"} مطمئن هستید؟
        </h2>
        <p className="text-xs text-right">
          {status === "active"
            ? "بعد از رد، نظر در سایت قابل مشاهده نیست."
            : "بعد از تایید، نظر در سایت قابل مشاهده می باشد."}
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

export default CommentList;
