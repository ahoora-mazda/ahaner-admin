import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import CustomForm from "../../components/form";
import Assign from "./components/assign";
import { useEffect, useState } from "react";
import { API } from "../../server";
import Loader from "../../components/loader";
interface Permission {
  value: number;
  key: string;
}
const sort = (selected: string[], permissions: Permission[]) => {
  let res: number[] = [];
  permissions.forEach((pe) => {
    if (selected.includes(pe.key)) {
      res = [...res, pe.value];
    }
  });
  return res;
};
const RoleUpdate = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const { data } = await API.post("/requirements", {
        keys: ["permissions"],
      });
      setPermissions(data.data.permissions);
      setLoading(false);
    };
    getData();
  }, []);
  if (loading) {
    return <Loader height={"50vh"} />;
  }
  return (
    <>
      <CustomForm
        onEnd={() => {
          navigate("/role-list");
        }}
        title="ویرایش نقش"
        btn={{ text: "ویرایش نقش" }}
        update
        accessUpdate={"admin_role_update"}
        api={{
          route: "/roles",
          get: "/roles/:id",
          update: "/roles/:id",
        }}
        cards={[
          {
            title: "اطلاعات نقش",
            key: "1",
          },
          {
            title: "دسترسی ها",
            key: "2",
          },
        ]}
        notSerialize
        sortGet={(state) => {
          setSelected(state.Permissions.map((ele: any) => ele.name));
          return state;
        }}
        sortUpdate={(state) => {
          return {
            title: state.title,
            permissions: sort(selected, permissions),
          };
        }}
        elements={[
          {
            label: "عنوان",
            name: "title",
            validation: yup.string().required("عنوان اجباری است"),
            type: "input",
            cardKey: "1",
            col: "col-span-12",
          },
          {
            name: "",
            type: "component",
            classNames: "col-span-12",
            cardKey: "2",
            component: () => {
              return <Assign selected={selected} setSelected={setSelected} />;
            },
          },
        ]}
      />
    </>
  );
};

export default RoleUpdate;
