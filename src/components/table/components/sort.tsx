import { ArrowDown, ArrowUp } from "tabler-icons-react";
import { useQuery } from "../../../hooks/useQuery";

const Sort = ({
  sort: { key },
}: {
  sort: { key: string; defaultValue?: boolean };
}) => {
  const { searchParams, changeObj } = useQuery();

  const isAscending = searchParams.get("sort") === key;
  const isDescending = searchParams.get("sort") === `-${key}`;
  const isDateKey = key === "date"; // چک می‌کنیم که آیا کلید date است یا خیر

  return (
    <button
      onClick={() => {
        if (isDateKey) {
          // اگر کلید date است، ترتیب برعکس
          if (!searchParams.get("sort")) {
            changeObj("sort", `${key}`); // دفعه اول منفی تنظیم کن
          } else if (isDescending) {
            changeObj("sort", key); // به صعودی تغییر کن
          } else {
            changeObj("sort", `-${key}`); // به نزولی تغییر کن
          }
        } else {
          // برای سایر کلیدها، به صورت عادی toggle کن
          if (!searchParams.get("sort")) {
            changeObj("sort", `-${key}`); // دفعه اول مثبت تنظیم کن
          } else if (isAscending) {
            changeObj("sort", `-${key}`);
          } else {
            changeObj("sort", key);
          }
        }
      }}
    >
      {/* نمایش آیکون بالا به عنوان پیش‌فرض */}
      {(!searchParams.get("sort") || isAscending) && !isDateKey ? (
        <ArrowUp size={"1rem"} />
      ) : (isDescending && isDateKey) ||
        (!searchParams.get("sort") && isDateKey) ? (
        <ArrowUp size={"1rem"} />
      ) : (
        <ArrowDown size={"1rem"} />
      )}
    </button>
  );
};

export default Sort;
