import { useState } from "react";
import { toast } from "react-toastify";
import { API } from "../server";
import { UsePost } from "../types/hooks/usePost";
import { convertToFormData, removeFalsyKeys } from "../utils/function";

export const usePost = ({
  route,
  initial = {},
  initialState = {},
  redirect,
  message,
  isProgress,
  setError = (err: any) => {},
  errorAction = (err: any, body: any) => {},
}: UsePost) => {
  const [form, setForm] = useState({ ...initialState });
  const [loading, setLoading] = useState({ send: false });
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const send = async (body: any, needToast?: boolean, ser?: boolean) => {
    try {
      let newBody = { ...initial, ...form, ...body };
      if (!ser) {
        newBody = convertToFormData(newBody);
      }
      setLoading({ ...loading, send: true });
      const { status, data } = await API.post(route, newBody, {
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total && isProgress) {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          }
        },
      });
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
      errorAction(error, body);
      if (error?.response?.data) {
        setError(error?.response?.data.errors);
      }
      setLoading({ ...loading, send: false });
    }
  };

  return [form, setForm, send, loading, uploadProgress] as const;
};
