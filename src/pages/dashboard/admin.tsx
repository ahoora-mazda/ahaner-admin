import { Link } from "react-router-dom";
import { ChevronLeft } from "tabler-icons-react";
import { homeItems } from "../../constants/homeItems";
import { usePermission } from "../../hooks/usePermission";

const Dashboard = () => {
  const { check } = usePermission();
  return (
    <div className="grid grid-cols-12 gap-2">
      {homeItems.map((item, key) => {
        if (check(item.accessKey)) {
          return (
            <div
              className={`px-4 py-2 col-span-12 md:col-span-6 lg:col-span-4 rounded-lg mb-2 ${item.classNames}`}
              key={key}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              </div>
              <div className="flex flex-col">
                {item.links.map((item, key) => {
                  if (check(item.accessKey)) {
                    return (
                      <Link
                        key={key}
                        className="text-xs flex items-center"
                        to={item.to}
                      >
                        {item.title}
                        <ChevronLeft size={"1rem"} />
                      </Link>
                    );
                  }
                  return <></>;
                })}
              </div>
            </div>
          );
        }
        return <></>;
      })}
    </div>
  );
};

export default Dashboard;
