import { useState } from "react";
import { API } from "../server";
import { UsePost } from "../types/hooks/usePost";
import { serialize } from "object-to-formdata";
import { convertToFormData, p2e, removeFalsyKeys } from "../utils/function";
import { toast } from "react-toastify";

export const usePost = ({
  route,
  initial = {},
  initialState = {},
  redirect,
  message,
  setError = (err: any) => {},
  errorAction = (err: any, body: any) => {},
}: UsePost) => {
  const [form, setForm] = useState({ ...initialState });
  const [loading, setLoading] = useState({ send: false });

  const send = async (body: any, needToast?: boolean, ser?: boolean) => {
    try {
      let newBody = removeFalsyKeys({ ...initial, ...form, ...body });
      if (!ser) {
        newBody = convertToFormData(newBody);
      }
      setLoading({ ...loading, send: true });
      const { status, data } = await API.post(route, newBody);
      if (+status === 200 || +status === 201) {
        if (needToast) {
          toast.success(data.message);
        }
        if (redirect.status && redirect.action) {
          redirect.action(data, body);
        }
      }

      setForm({});
      setLoading({ ...loading, send: false });
    } catch (error: any) {
      console.log("er", error);
      errorAction(error, body);
      if (error?.response?.data) {
        setError(error?.response?.data);
      }
      setLoading({ ...loading, send: false });
    }
  };

  return [form, setForm, send, loading] as const;
};
