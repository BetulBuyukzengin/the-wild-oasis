/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import Menus from "../../ui/Menus";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import Spinner from "../../ui/Spinner";
import { useDeleteBooking } from "./useDeleteBooking";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "usehooks-ts";
import i18n from "../../i18n";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
  width: 100%;

  @media (max-width: 48em) {
    font-size: 1rem;
  }
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 22rem; //???????????????? Bak
  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
    @media (max-width: 48em) {
      font-size: 1rem;
    }
  }
  @media (max-width: 48em) {
    width: 18rem;
    text-align: center;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;
const StyledTagAmount = styled.span`
  display: flex;
  gap: 5rem;

  @media (max-width: 48em) {
  }
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests,
    cabins,
  },
}) {
  const navigate = useNavigate();
  const { checkout, isCheckingOut } = useCheckout();
  const { t } = useTranslation();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const guestName = guests?.fullName || t("Unknown guest");
  const email = guests?.email || t("No email provided");
  const cabinName = cabins?.name || t("Unknown cabin");
  // console.log(startDate);
  const smallScreenStartDate = startDate?.slice(0, 10);
  const smallScreenEndDate = endDate?.slice(0, 10);
  const isSmallScreen = useMediaQuery("(max-width:48em)");
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  const translatedStatusName = t(`statusNames.${status}`);
  const statusTr = t("{{status}}", {
    status: translatedStatusName,
  });
  const statusEn = t("{{status}}", { status });
  if (isCheckingOut) return <Spinner />;

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>
      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? t("Today")
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} {t("night stay")}
        </span>
        <span>
          {!isSmallScreen ? (
            <>
              {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
              {format(new Date(endDate), "MMM dd yyyy")}{" "}
            </>
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>{smallScreenStartDate}</span>
              <span>{smallScreenEndDate}</span>
            </div>
          )}
        </span>
      </Stacked>
      <StyledTagAmount>
        <Tag type={statusToTagName[status]}>
          {i18n.language === "tr"
            ? statusTr?.replace("-", " ")
            : statusEn?.replace("-", " ")}
        </Tag>
        <Amount>{formatCurrency(totalPrice)}</Amount>
      </StyledTagAmount>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              {t("See details")}
            </Menus.Button>

            {status === t("unconfirmed") && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                {t("Check in")}
              </Menus.Button>
            )}

            {status === "checked-in" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(bookingId)}
                disabled={isCheckingOut}
              >
                {t("Check out")}
              </Menus.Button>
            )}
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>
                {t("Delete booking")}
              </Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="booking"
            disabled={isDeleting}
            onConfirm={() => deleteBooking(bookingId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}
export default BookingRow;
