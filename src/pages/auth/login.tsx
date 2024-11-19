import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Btn from "../../components/form/components/button";
import Input from "../../components/form/components/input";
import { login } from "../../features/user";
import { usePost } from "../../hooks";
import { AuthProps } from "../../types/auth";
const schema = yup
  .object({
    mobile: yup.string().required("ایمیل اجباری است"),
    password: yup.string().required("رمز عبور اجباری است"),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthProps>({
    resolver: yupResolver(schema),
    defaultValues: { mobile: "09155519848", password: "123456" },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [, , send, loading] = usePost({
    route: "/login",
    redirect: {
      status: true,
      action: (data) => {
        console.log({ data });
        navigate("/");
        dispatch(
          login({ token: data.token, permissions: data.Role.Permissions })
        );
      },
    },
    setError: (ob) => {
      console.log({ ob });
      if (ob) {
        Object.keys(ob).forEach((key) => {
          setError(key, { message: ob[key][0] });
        });
      }
    },
  });
  const onSubmit = (data: AuthProps) => send({ ...data }, false, true);
  return (
    <div>
      <div>
        <h3 className="font-bold	text-2xl	my-4 w-[300px] ">خوش آمدید!</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="موبایل"
          props={{
            ...register("mobile" as const),
          }}
          error={errors.mobile}
        />
        <Input
          type="password"
          label="رمز عبور"
          props={{
            ...register("password" as const),
          }}
          error={errors.password}
        />
        <Btn
          text="ورود"
          type="submit"
          loading={loading.send}
          classNames="bg-primary mt-6 hover:bg-subPrimary text-white w-full justify-center  px-6 py-2 "
        />
      </form>
    </div>
  );
};

export default Login;
