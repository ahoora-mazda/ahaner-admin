import { useAllData } from "../../hooks/useAllData";
import { renderMonth, timeout, toDate } from "../../utils/function";
import PdfLoading from "../pdfLoading";
import "./style.scss";
interface Props {
  headers: Head[];
  route: string;
  sort: (state: any) => {};
}
interface Head {
  title: string;
  key: string;
  type?: "enum" | "date" | "month";
  enum?: any;
}
const Pdf = ({
  headers,
  route,
  sort = state => {
    return state;
  },
}: Props) => {
  const { data, loading, setLoading, print, info } = useAllData({
    route,
    sort,
  });

  if (loading.show) {
    return (
      <PdfLoading
        onClose={async () => {
          timeout(500).then(() => {
            setLoading({ get: false, show: false });
          });
          timeout(2000).then(() => {
            print();
          });
        }}
        show={loading.get}
      />
    );
  }
  return (
    <div className="page">
      <div className="box-header">
        <div className="box" style={{}}>
          <img
            src={require("../../assets/images/logo/logo.png")}
            alt="logo"
            width={100}
            style={{ objectFit: "contain" }}
          />
        </div>
        {/* <div className="box" style={{ minWidth: 210, maxWidth: 210 }}>
          <h3 className="typography">بارکد اطلاعات گزارش</h3>
        </div> */}
        <div className="box">
          <h2 className="title">سامانه </h2>
          <h3 className="title">گزارش متمرکز از سامانه</h3>
          <h4 className="badge">{info?.type}</h4>
        </div>
        <div className="box list" style={{}}>
          <p className="item">
            تاریخ گزارش: <span>{toDate(info.date)}</span>
          </p>
          <p className="item">
            زمان گزارش: <span>{info.time}</span>
          </p>
          <p className="item">
            شماره گزارش: <span>{info.number}</span>
          </p>
          <p className="item">ایجاد کننده گزارش:{info.creator}</p>
        </div>
      </div>
      <div></div>
      {/*-----------------------HEADER END ------------------*/}
      <div
        style={{
          border: "1.5px solid #000",
          width: "97%",
          margin: "auto",
          marginTop: 45,
          marginBottom: 100,
        }}
      >
        <table className="table">
          <thead>
            <tr>
              <th>ردیف</th>
              {headers.map((item, key) => {
                return <th key={key}>{item.title}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.data.map((item: any, key: number) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  {headers.map((cell, _id) => {
                    switch (cell.type) {
                      case "enum":
                        return <td>{cell.enum[item[cell.key]] || " - "}</td>;

                      case "date":
                        return (
                          <td key={_id}>{toDate(item[cell.key]) || " - "}</td>
                        );
                      case "month":
                        return <td key={_id}>{renderMonth(item[cell.key])}</td>;

                      default:
                        return <td key={_id}>{item[cell.key] || " - "}</td>;
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="footer">
        <p className="title-footer">
          - گزارش شماره <span>{info.number}</span> مورخه{" "}
          <span>{toDate(info.date)}</span> در ردیف <span>{info.row}</span>
          سیستمی بایگانی و قابل استعلام است -
        </p>
        <p
          className="title-footer"
          style={{ border: "none", padding: 0, paddingTop: 5, fontSize: 12 }}
        >
          طراحی و توسعه در شرکت نرم افزاری داده نگار فن آوران پارس - نسخه نرم
          افزار v2.0.1 - آزمایش 42239 - مستقر سرور مرکزی داده پردازپارس
        </p>
      </div>
    </div>
  );
};

export default Pdf;
