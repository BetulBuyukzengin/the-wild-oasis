/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
  @media (max-width: 48em) {
    grid-template-columns: ${(props) =>
      props.updateHotel ? "9rem 1fr 1.2fr" : "1fr 1fr"};
    justify-content: ${(props) =>
      props.passwordForm ? "flex-start!important" : "flex-end"};
  }
`;
const Label = styled.label`
  font-weight: 500;
  @media (max-width: 48em) {
    font-size: 1.2rem;
  }
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ label, error, children, passwordForm, updateHotel }) {
  return (
    <StyledFormRow passwordForm={passwordForm} updateHotel={updateHotel}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
