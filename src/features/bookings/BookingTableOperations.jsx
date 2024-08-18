import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
import { useTranslation } from "react-i18next";

function BookingTableOperations() {
  const { t } = useTranslation();
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: t("All") },
          { value: "checked-out", label: t("Checked out") },
          { value: "checked-in", label: t("Checked in") },
          { value: "unconfirmed", label: t("Unconfirmed") },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: t("Sort by date (recent first)") },
          { value: "startDate-asc", label: t("Sort by date (earlier first)") },
          {
            value: "totalPrice-desc",
            label: t("Sort by amount (high first)"),
          },
          { value: "totalPrice-asc", label: t("Sort by amount (low first)") },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
