import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import { useTranslation } from "react-i18next";

function CabinTableOperations() {
  const { t } = useTranslation();
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: t("All") },
          { value: "no-discount", label: t("No discount") },
          { value: "with-discount", label: t("With discount") },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: t("Sort by name (A-Z)") },
          { value: "name-desc", label: t("Sort by name (Z-A)") },
          { value: "regularPrice-asc", label: t("Sort by price (low first)") },
          {
            value: "regularPrice-desc",
            label: t("Sort by price (high first)"),
          },
          {
            value: "maxCapacity-asc",
            label: t("Sort by capacity (low first)"),
          },
          {
            value: "maxCapacity-desc",
            label: t("Sort by capacity (high first)"),
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
