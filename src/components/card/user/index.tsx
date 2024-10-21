import React from "react";
import FormLayout from "../../form/components/layout";
interface Props {
  user: any;
  btn?: () => JSX.Element;
}
const UserCard: React.FC<Props> = ({ user, btn }) => {
  return (
    <div className="mb-4">
      <FormLayout title="اطلاعات گیرنده">
        <div className="flex items-center gap-4">
          <div className="border rounded-full p-2">
            <img
              alt=""
              src={
                user.avatar ||
                require("../../../assets/images/avatars/1.svg").default
              }
              className="w-12 h-12"
            />
          </div>
          <div className="flex flex-1 items-center gap-10 flex-wrap">
            {[
              {
                key: "firstname",
                label: "نام",
              },
              {
                key: "lastname",
                label: "نام خانوادگی",
              },
              {
                key: "mobile",
                label: "شماره موبایل",
              },
              {
                key: "nationalcode",
                label: "کد ملی",
              },
              {
                key: "status_employee",
                label: "وضعیت",
              },
              {
                key: "created_at",
                label: "تاریخ عضویت",
              },
            ].map(ele => {
              return (
                <div key={ele.key}>
                  <p className="text-sm">{ele.label}</p>
                  <p className="font-semibold text-sm mt-2">{user[ele.key]}</p>
                </div>
              );
            })}
            {btn && btn()}
          </div>
        </div>
      </FormLayout>
    </div>
  );
};

export default UserCard;
