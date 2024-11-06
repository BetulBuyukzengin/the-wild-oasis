import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  @media (max-width: 48em) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export default TableOperations;
