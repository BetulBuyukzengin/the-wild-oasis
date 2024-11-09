import { useTranslation } from "react-i18next";
import Filter from "../../ui/Filter";

function DashboardFilter() {
  const { t } = useTranslation();
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: t("Last 7 days") },
        { value: "30", label: t("Last 30 days") },
        { value: "90", label: t("Last 90 days") },
      ]}
    />
  );
}

export default DashboardFilter;
