import React, { FC, useEffect, useState } from "react";
import Modal from "../../modal";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useDispatch } from "react-redux";
import { clear, close, deleted } from "../../../features/modalDelete";
import Btn from "../../form/components/button";
import { usePost } from "../../../hooks";
import { API } from "../../../server";
import { useLocale } from "antd/es/locale";
import { useLocation } from "react-router-dom";
interface Props {}
const DeleteModal: FC<Props> = () => {
  const { isOpen, id, route } = useSelector((state: RootState) => {
    return state.modalDelete;
  });
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const deleteRow = async () => {
    setLoading(true);
    await API.delete(`${route}/${id}`);
    dispatch(deleted(id));
    setLoading(false);
  };
  useEffect(() => {
    dispatch(clear());
  }, [pathname, dispatch]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          dispatch(close());
        }}
        title={`حذف اطلاعات #${id}`}
      >
        <h2 className="text-right mb-2">آیا برای حذف این ردیف مطمئن هستید؟</h2>
        <p className="text-xs text-right">
          حذف بعضی اطلاعات موجب حذف اطلاعات مرتبط می شود.
        </p>
        <div className="flex items-center gap-2 mt-4">
          <Btn
            loading={loading}
            text="حذف"
            classNames="bg-red py-1 px-6 text-white"
            onClick={deleteRow}
          />
          <Btn
            text="بازگشت"
            classNames="bg-info py-1 px-6"
            onClick={() => dispatch(close())}
          />
        </div>
      </Modal>
    </>
  );
};

export default DeleteModal;
