import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Btn from "../../components/form/components/button";
import Input from "../../components/form/components/input";
import { login, setPayment } from "../../features/user";
import { usePost } from "../../hooks";
import { AuthProps } from "../../types/auth";
const schema = yup
  .object({
    email: yup.string().email("ایمیل اشتباه است").required("ایمیل اجباری است"),
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
    defaultValues: { email: "admin@example.com", password: "123456" },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [, , send, loading] = usePost({
    route: "/login",
    redirect: {
      status: true,
      action: (data) => {
        navigate("/");
        dispatch(login({ token: data.token }));
      },
    },
    setError: (ob) => {
      if (ob) {
        Object.keys(ob).forEach((key) => {
          setError(key, { message: ob[key][0] });
        });
      }
    },
    errorAction: (response, body) => {
      if (+response?.response?.status === 318) {
        dispatch(
          setPayment({
            id: response?.response?.data?.data?.id,
            name: body.name,
            password: body.password,
            amount_membership_fee:
              response?.response?.data?.data?.amount_membership_fee,
          })
        );
        navigate(`/payment`);
      }
    },
  });
  const onSubmit = (data: AuthProps) => send({ ...data });
  return (
    <div>
      <div>
        <h3 className="font-bold	text-2xl	my-4 w-[300px] ">خوش آمدید!</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="ایمیل"
          props={{
            ...register("email" as const),
          }}
          error={errors.email}
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
          loading={true}
          classNames="bg-primary mt-6 hover:bg-subPrimary text-white w-full justify-center  px-6 py-2 "
        />
      </form>
    </div>
  );
};

export default Login;
