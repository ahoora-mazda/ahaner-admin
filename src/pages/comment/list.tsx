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
  const [data, setData] = useState<any>({});
  const changeStatus = async () => {
    try {
      setLoading(true);
      await API.post(`/comments/${id}`, {
        ...data,
        status: status === "published" ? "pending" : "published",
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
        accessAdd={"admin_comment_create"}
        add="/comments-create"
        key={depend}
        title="لیست نظرات"
        subTitle="نظرات"
        api={{ route: "/comments" }}
        sort={(state) => {
          return {
            ...state?.User,
            user_id: state?.User?.id,
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
            key: "content",
            title: "متن نظر",
            type: "longText",
          },
          {
            key: "full_name",
            title: "کاربر",
          },
          {
            key: "mobile",
            title: "موبایل",
          },
          {
            key: "rate",
            title: "امتیاز",
            sort: {
              key: "rate",
            },
          },
          {
            key: "status",
            title: "وضعیت",
            type: "enum",
            enum: {
              published: "فعال",
              pending: "غیر فعال",
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
                title: "حذف",
                type: "delete",
                route: "/comments",
                accessKey: "admin_comment_delete",
              },
              {
                title: "ویرایش",
                type: "edit",
                route: "/comments-list/:id",
                accessKey: "admin_comment_read",
              },
              {
                title: "تغییر وضعیت",
                type: "custom",
                accessKey: "admin_comment_update",
                onClick: (id, data) => {
                  setId(+id);
                  setModal(true);
                  setStatus(data.status);
                  setData(data);
                },
              },
            ],
          },
        ]}
      />
      <Modal
        title={status === "published" ? "رد نظر" : "تایید نظر"}
        isOpen={modal}
        onClose={() => {
          setModal(false);
          setId(0);
        }}
      >
        <h2 className="text-right mb-2">
          آیا برای {status === "published" ? "رد نظر" : "تایید نظر"} مطمئن
          هستید؟
        </h2>
        <p className="text-xs text-right">
          {status === "published"
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
