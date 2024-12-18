import { useTranslation } from "react-i18next";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useMediaQuery } from "usehooks-ts";

function Bookings() {
  const { t } = useTranslation();
  const isSmallScreen = useMediaQuery("(max-width:48em)");
  const isMediumScreen = useMediaQuery("(max-width:84.37em)");

  return (
    <>
      <Row type="horizontal">
        <Heading as={isSmallScreen ? "h5" : isMediumScreen ? "h4" : "h1"}>
          {t("All bookings")}
        </Heading>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;
