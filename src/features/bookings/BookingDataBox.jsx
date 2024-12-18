/* eslint-disable react/prop-types */
import styled from "styled-components";
import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import { getDateLocale } from "../../../src/i18n.js";
import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";
import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";
import { useTranslation } from "react-i18next";

const StyledBookingDataBox = styled.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 84.37em) {
    flex-direction: column;
    padding: 1rem;
    text-align: center;
  }
  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
  @media (max-width: 84.37em) {
    padding: 1.2rem 1rem 1.2rem;
  }
`;

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
  @media (max-width: 84.37em) {
    flex-direction: column;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(props) =>
    props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(props) =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};
  @media (max-width: 84.37em) {
    padding: 0.6rem 0.2rem;
    margin-top: 1.4rem;
    flex-direction: column;
  }
  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`;
const StyledDiv = styled.div`
  @media (max-width: 84.37em) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1rem;
  }
`;
const StyledP = styled.p`
  @media (max-width: 84.37em) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.2rem;
  }
`;
const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
  @media (max-width: 84.37em) {
    padding: 1.6rem 1rem;
    text-align: center;
  }
`;
const StyledGuestP = styled.p`
  @media (max-width: 84.37em) {
    font-size: 1.3rem;
  }
`;

function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests,
    cabins,
  } = booking;
  const { t } = useTranslation();
  if (!guests || !cabins) return null;
  const {
    fullName: guestName,
    email,
    country,
    countryFlag,
    nationalID,
  } = guests;
  const { name: cabinName } = cabins;
  return (
    <StyledBookingDataBox>
      <Header>
        <StyledDiv>
          <HiOutlineHomeModern />
          <StyledP>
            {numNights} {t("nights in Cabin")} {cabinName}
          </StyledP>
        </StyledDiv>
        <StyledP>
          {format(new Date(startDate), "EEE, MMM dd yyyy", {
            locale: getDateLocale(),
          })}{" "}
          (
          {isToday(new Date(startDate))
            ? t("Today")
            : formatDistanceFromNow(startDate)}
          ) &mdash;{" "}
          {format(new Date(endDate), "EEE, MMM dd yyyy", {
            locale: getDateLocale(),
          })}
        </StyledP>
      </Header>

      <Section>
        <Guest>
          {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
          <StyledGuestP>
            {guestName}{" "}
            {numGuests > 1 ? `+ ${numGuests - 1} ${t("guests")}` : ""}
          </StyledGuestP>
          <span>&bull;</span>
          <StyledGuestP>{email}</StyledGuestP>
          <span>&bull;</span>
          <StyledGuestP>
            {t("National ID")} {nationalID}
          </StyledGuestP>
        </Guest>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label={t("Observations")}
          >
            {observations}
          </DataItem>
        )}

        <DataItem
          icon={<HiOutlineCheckCircle />}
          label={t("Breakfast included?")}
        >
          {hasBreakfast ? t("Yes") : t("No")}
        </DataItem>

        <Price isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={t("Total price")}>
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} ${t("cabin")} + ${formatCurrency(
                extrasPrice
              )} ${t("breakfast")})`}
          </DataItem>

          <p>{isPaid ? t("Paid") : t("Will pay at property")}</p>
        </Price>
      </Section>

      <Footer>
        <p>
          {t("Booked")}{" "}
          {format(new Date(created_at), "EEE, MMM dd yyyy, p", {
            locale: getDateLocale(),
          })}
        </p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
