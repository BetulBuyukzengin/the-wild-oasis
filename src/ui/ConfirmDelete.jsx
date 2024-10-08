/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import { useTranslation } from "react-i18next";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  const { t } = useTranslation();
  return (
    <StyledConfirmDelete>
      <Heading as="h3">
        {t("Delete {{resourceName}}", { resourceName })}
      </Heading>
      <p>
        {t(
          "Are you sure you want to delete this {{resourceName}} permanently? This action cannot be undone.",
          { resourceName }
        )}
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          // taken from modal (clone element)
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
