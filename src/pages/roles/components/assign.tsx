import React from "react";
import CheckBox from "../../../components/form/components/checkbox";
import { permissions } from "../../../constants/permissens";
import {
  comparePartialArrays,
  removeElementsFromArray,
} from "../../../utils/function";
interface Props {
  update?: boolean;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}
const getPermissions = (key?: string) => {
  let currentPermissions: string[] = [];
  if (key) {
    currentPermissions = permissions[key].actions.map((ac: any) => ac.key);
    return currentPermissions;
  }
  Object.keys(permissions).forEach((key) => {
    currentPermissions = [
      ...currentPermissions,
      ...permissions[key].actions.map((ac: any) => ac.key),
    ];
  });
  return currentPermissions;
};
const Assign: React.FC<Props> = ({ update = false, selected, setSelected }) => {
  return (
    <div className="col-span-12">
      <div className="grid md:grid-cols-3 gap-5">
        <div className="md:col-span-3">
          <CheckBox
            label={"انتخاب همه"}
            onChange={() => {
              if (selected.length === getPermissions().length) {
                setSelected([]);
              } else {
                setSelected(getPermissions());
              }
            }}
            checked={selected.length === getPermissions().length}
          />
        </div>
        {Object.keys(permissions).map((key: any) => {
          return (
            <div className="border rounded p-2">
              <div className="flex items-center justify-between">
                <p className="mb-4">{permissions[key].title}</p>
                <CheckBox
                  label={"انتخاب همه"}
                  onChange={() => {
                    if (comparePartialArrays(selected, getPermissions(key))) {
                      setSelected(
                        removeElementsFromArray(selected, getPermissions(key))
                      );
                    } else {
                      setSelected([...selected, ...getPermissions(key)]);
                    }
                  }}
                  checked={comparePartialArrays(selected, getPermissions(key))}
                />
              </div>
              {permissions[key].actions.map((action: any) => {
                const isChecked = selected.includes(action.key);

                return (
                  <div className="mb-1">
                    <CheckBox
                      label={action.title}
                      onChange={() => {
                        if (isChecked) {
                          setSelected([
                            ...selected.filter(
                              (key: string) => key !== action.key
                            ),
                          ]);
                        } else {
                          setSelected([...selected, action.key]);
                        }
                      }}
                      checked={isChecked}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Assign;
