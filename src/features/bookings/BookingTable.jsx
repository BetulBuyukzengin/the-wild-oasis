/* eslint-disable no-unused-vars */
import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import { useBookings } from "./useBookings";
import Pagination from "../../ui/Pagination";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "usehooks-ts";

function BookingTable() {
  const { bookings, isLoading, count } = useBookings();
  const { t } = useTranslation();
  const isSmallScreen = useMediaQuery("(max-width:48em)");

  if (isLoading) return <Spinner />;
  if (!bookings?.length) return <Empty resourceName="bookings" />;

  return (
    <Menus>
      {/* <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem"> */}
      <Table
        columns={
          isSmallScreen
            ? "0.6fr 2fr 2.4fr 1.4fr 1fr .6rem"
            : "0.3fr 1.3fr 1.3fr 1fr 1fr 0.6fr"
        }
      >
        <Table.Header>
          <div>{t("Cabin")}</div>
          <div>{t("Guest")}</div>
          <div>{t("Dates")}</div>
          <div>{t("Status")}</div>
          <div>{t("Amount")}</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
