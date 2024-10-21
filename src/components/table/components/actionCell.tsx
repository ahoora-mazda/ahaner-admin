import { Menu, Transition } from "@headlessui/react";
import { FC, Fragment } from "react";
import { OptionHeader } from "../../../types/table";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { open } from "../../../features/modalDelete";
import { usePermission } from "../../../hooks/usePermission";
interface Props {
  headers: OptionHeader[];
  row: any;
}
const ActionCell: FC<Props> = ({ headers, row }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { check } = usePermission();
  const onClickHandler = (op: OptionHeader) => {
    switch (op.type) {
      case "edit":
        navigate(op?.route?.replace(":id", row.id) || "");
        break;
      case "delete":
        dispatch(open({ ...row, route: op.route }));
        break;
      case "custom":
        if (op.onClick) {
          op.onClick(row.id, row);
        }
        break;
      default:
        break;
    }
  };
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-8 h-8 items-center rounded-full justify-center hover:bg-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <g id="vuesax/linear/more">
                <g id="more">
                  <path
                    id="Vector"
                    d="M14.5 4.99902C14.5 3.89902 13.6 2.99902 12.5 2.99902C11.4 2.99902 10.5 3.89902 10.5 4.99902C10.5 6.09902 11.4 6.99902 12.5 6.99902C13.6 6.99902 14.5 6.09902 14.5 4.99902Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                  />
                  <path
                    id="Vector_2"
                    d="M14.5 18.999C14.5 17.899 13.6 16.999 12.5 16.999C11.4 16.999 10.5 17.899 10.5 18.999C10.5 20.099 11.4 20.999 12.5 20.999C13.6 20.999 14.5 20.099 14.5 18.999Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                  />
                  <path
                    id="Vector_3"
                    d="M14.5 11.999C14.5 10.899 13.6 9.99902 12.5 9.99902C11.4 9.99902 10.5 10.899 10.5 11.999C10.5 13.099 11.4 13.999 12.5 13.999C13.6 13.999 14.5 13.099 14.5 11.999Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                  />
                </g>
              </g>
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute w-28 bg-white z-50 left-0 mt-2  origin-top-right divide-y divide-gray-100 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {headers.map((item, id) => {
              return (
                <div className="px-1 py-1" key={id}>
                  <Menu.Item>
                    <button
                      onClick={() => onClickHandler(item)}
                      className={`group flex w-full items-center  rounded-md px-2 py-2 text-sm`}
                    >
                      {item.title}
                    </button>
                  </Menu.Item>
                </div>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ActionCell;
