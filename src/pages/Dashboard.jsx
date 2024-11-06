import { useMediaQuery } from "usehooks-ts";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const { t } = useTranslation();
  const isSmallScreen = useMediaQuery("(max-width:48em)");

  return (
    <>
      <Row type="horizontal">
        <Heading as={isSmallScreen ? "h5" : "h1"}>{t("Dashboard")}</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
