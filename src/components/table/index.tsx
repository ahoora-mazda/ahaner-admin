import { Button, Empty, Tooltip } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "tabler-icons-react";
import { TableProps } from "../../types/table";
import TopCard from "../card/top";
import CardWrapper from "../card/wrapper";
import Loader from "../loader";
import Pagination from "../pagination";
import DeleteModal from "./components/deleteModal";
import HeadCell from "./components/headCell";
import { useTable } from "./hooks/hook";
import "./style.scss";
import Btn from "../form/components/button";
import SearchBox from "./components/searchBox";
const CustomTable: React.FC<TableProps> = ({
  title,
  subTitle,
  headers,
  api,
  sort = (state, key) => state,
  sortAllData = (state) => state,
  add,
  pdf,
  minimal,
  accessPdf,
  accessAdd,
  onClickAdd,
  hero,
  dashboard,
  search,
  btn,
}) => {
  const handlePageChange = (page: number) => {
    changeObj("page", page);
  };
  const navigate = useNavigate();
  const { loading, table, render, deleted, changeObj, count, clear, check } =
    useTable({
      api,
      sortAllData,
    });
  const tableComponent = (
    // table.data.length === 0
    <div className="w-full overflow-x-auto md:overflow-visible table-wrapper  p-6 ">
      <table className=" border-collapse card-wrapper-shadow rounded-[8px]">
        <thead>
          <tr>
            {headers.map((ele, key) => {
              return <HeadCell key={key} head={ele} />;
            })}
          </tr>
        </thead>
        {loading.inner ? (
          <tbody>
            <tr>
              <td colSpan={headers.length}>
                <Loader height={"50vh"} />
              </td>
            </tr>
          </tbody>
        ) : table.rows.length === 0 ? (
          <tbody>
            <tr>
              <td colSpan={headers.length}>
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description="اطلاعاتی یافت نشده"
                />
                {count(window.location) > 0 && (
                  <div className="flex items-center justify-center">
                    <Btn
                      classNames="px-3 py-1 text-sm"
                      onClick={() => clear()}
                      text="حذف فیلتر ها"
                    />
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        ) : (
          <>
            <tbody>
              {table?.rows?.map((row: any, id: number) => {
                if (!deleted.includes(+row.id)) {
                  return (
                    <tr key={id}>
                      {headers.map((head, key) => {
                        return (
                          <td className="text-sm" key={key}>
                            {render(head, sort(row, id), id)}
                          </td>
                        );
                      })}
                    </tr>
                  );
                }
                return <></>;
              })}
            </tbody>
          </>
        )}
      </table>
    </div>
  );

  return (
    <>
      {title && <TopCard title={title} />}

      {loading.get ? (
        <Loader height={"200px"} classNames="mt-8" />
      ) : minimal ? (
        tableComponent
      ) : (
        <>
          {search && (
            <CardWrapper classNames="mt-8 p-6" title="جستجو">
              <SearchBox search={search} headers={headers} />
            </CardWrapper>
          )}

          <CardWrapper
            classNames="mt-4"
            title={subTitle}
            action={
              <>
                <div className="flex items-center gap-2">
                  {hero && hero()}
                  {typeof pdf === "string" && accessPdf && check(accessPdf) && (
                    <Tooltip
                      trigger={["hover", "focus"]}
                      title="دریافت گزارش پی دی اف"
                    >
                      <Button
                        onClick={() => navigate(pdf)}
                        className="h-[40px] px-2 text-base ant-btn css-xu9wm8 ant-btn-default border-none bg-primary text-white hover:!bg-primary hover:!text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1174_5352)">
                            <path
                              d="M17 17H19C19.5304 17 20.0391 16.7893 20.4142 16.4142C20.7893 16.0391 21 15.5304 21 15V11C21 10.4696 20.7893 9.96086 20.4142 9.58579C20.0391 9.21071 19.5304 9 19 9H5C4.46957 9 3.96086 9.21071 3.58579 9.58579C3.21071 9.96086 3 10.4696 3 11V15C3 15.5304 3.21071 16.0391 3.58579 16.4142C3.96086 16.7893 4.46957 17 5 17H7"
                              stroke="#fff"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M17 9V5C17 4.46957 16.7893 3.96086 16.4142 3.58579C16.0391 3.21071 15.5304 3 15 3H9C8.46957 3 7.96086 3.21071 7.58579 3.58579C7.21071 3.96086 7 4.46957 7 5V9"
                              stroke="#fff"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M15 13H9C7.89543 13 7 13.8954 7 15V19C7 20.1046 7.89543 21 9 21H15C16.1046 21 17 20.1046 17 19V15C17 13.8954 16.1046 13 15 13Z"
                              stroke="#fff"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1174_5352">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Button>
                    </Tooltip>
                  )}

                  {typeof add === "string" && check("accessAdd") && (
                    <Tooltip
                      trigger={["hover", "focus"]}
                      title="افزودن ردیف جدید"
                    >
                      <Button
                        type="text"
                        onClick={() => {
                          if (onClickAdd) {
                            onClickAdd();
                          } else {
                            navigate(add);
                          }
                        }}
                        className="h-[40px] px-2 text-base ant-btn css-xu9wm8 ant-btn-default border-none bg-primary text-white hover:!bg-primary hover:!text-white"
                      >
                        <Plus />
                      </Button>
                    </Tooltip>
                  )}
                  {btn && btn()}
                </div>
              </>
            }
          >
            {tableComponent}
            {!dashboard && (
              <div className="flex justify-center items-center pb-2 pagination mt-2">
                <Pagination
                  currentPage={table.currentPage}
                  totalPages={table.totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </CardWrapper>
        </>
      )}

      <DeleteModal />
    </>
  );
};

export default CustomTable;
