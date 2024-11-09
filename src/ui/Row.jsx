import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  @media (max-width: 84.37em) {
    flex-direction: column;
  }
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
  @media (max-width:48em) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;
Row.defaultProps = { type: "vertical" };
export default Row;
