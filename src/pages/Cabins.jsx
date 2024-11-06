import { useTranslation } from "react-i18next";
import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useMediaQuery } from "usehooks-ts";

function Cabins() {
  const { t } = useTranslation();
  const isSmallScreen = useMediaQuery("(max-width:48em)");
  return (
    <>
      <Row type="horizontal">
        <Heading as={isSmallScreen ? "h5" : "h1"}>{t("All cabins")}</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
