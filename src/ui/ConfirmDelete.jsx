/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { useMediaQuery } from "usehooks-ts";

const StyledConfirmDelete = styled.div`
  width: 100%;
  /* width: 40rem; */
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }
  @media (max-width: 48em) {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  & div {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    width: 100%;
    @media (max-width: 84.37em) {
      gap: 4rem;
      justify-content: center;
    }
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  const { t } = useTranslation();
  const translatedResourceName = t(`resourceNames.${resourceName}`);
  const isSmallScreen = useMediaQuery("(max-width:84.37em)");

  const messageTr = t("Delete {{resourceName}}", {
    resourceName: translatedResourceName,
  });
  const messageEn = t("Delete {{resourceName}}", { resourceName });
  const worningTr = t(
    "Are you sure you want to delete this {{resourceName}} permanently? This action cannot be undone.",
    {
      resourceName: translatedResourceName,
    }
  );
  const worningEn = t(
    "Are you sure you want to delete this {{resourceName}} permanently? This action cannot be undone.",
    { resourceName }
  );
  return (
    <StyledConfirmDelete>
      <Heading as={isSmallScreen ? "h3" : "h2"}>
        {i18n.language === "tr" ? messageTr : messageEn}
      </Heading>
      <p>{i18n.language === "tr" ? worningTr : worningEn}</p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          {t("Cancel")}
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          {t("Delete")}
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
