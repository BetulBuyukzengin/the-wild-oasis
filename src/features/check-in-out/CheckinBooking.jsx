/* eslint-disable no-unused-vars */
import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Checkbox from "../../ui/Checkbox";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";
import { useTranslation } from "react-i18next";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const moveBack = useMoveBack();
  const [confirmPaid, setConfirmPaid] = useState(false);
  const { booking, isLoading } = useBooking();
  const [addBreakfast, setAddBreakfast] = useState(false);

  const { settings, isLoading: isLoadingSetting } = useSettings();

  // Component is not mounted yet, after mount set it true
  useEffect(() => {
    setConfirmPaid(booking?.isPaid ?? false);
  }, [booking?.isPaid]);

  const { checkin, isCheckingIn } = useCheckin();
  const { t } = useTranslation();
  if (isLoading || isLoadingSetting) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice =
    settings.breakfastPrice * numNights * numGuests;

  function handleCheckin() {
    if (!confirmPaid) return;

    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">
          {t("Check in booking")} #{bookingId}
        </Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
            id="breakfast"
          >
            {t("Want to add breakfast for")}{" "}
            {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </Box>
      )}
      <Box>
        <Checkbox
          checked={confirmPaid}
          disabled={confirmPaid || isCheckingIn}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          id="confirm"
        >
          {!addBreakfast
            ? t(
                "I confirm that {{guestName}} has paid the total amount of {{totalAmount}}",
                {
                  guestName: guests.fullName,
                  totalAmount: formatCurrency(totalPrice),
                }
              )
            : t(
                "I confirm that {{guestName}} has paid the total amount of {{totalAmount}} ({{baseAmount}} + {{breakfastAmount}})",
                {
                  guestName: guests.fullName,
                  totalAmount: formatCurrency(
                    totalPrice + optionalBreakfastPrice
                  ),
                  baseAmount: formatCurrency(totalPrice),
                  breakfastAmount: formatCurrency(optionalBreakfastPrice),
                }
              )}
        </Checkbox>
      </Box>
      <ButtonGroup>
        <Button disabled={!confirmPaid || isCheckingIn} onClick={handleCheckin}>
          {t("Check in booking")} #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          {t("Back")}
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
