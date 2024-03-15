/* eslint-disable no-undef */
import styled, { css } from "styled-components";

// const test = `text-align:center`;
// const deneme = css`
//   ${10 < 5 && " background-color: red"}
// `;
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `} /* font-size: 30px;
  font-weight: 600;
  color: #c5c594;
  ${test} ${deneme} */
${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
`;

export default Heading;
