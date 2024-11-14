import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;
      width: 95%;

      @media (max-width: 84.37em) {
        padding: 1rem;
      }
      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
      @media (max-width: 48em) {
        padding: 2.4rem 1rem;
        grid-template-columns: 1fr;
        display: grid;
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 90%;
      @media (max-width: 84.37em) {
        width: 100%;
      }
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
