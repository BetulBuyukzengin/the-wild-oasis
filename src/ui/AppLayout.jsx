import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 48em) {
    grid-template-columns: none;
  }
`;
const Main = styled.main`
  background-color: var(--color-grey-50);
  overflow-y: scroll;
  padding: 4rem 4.8rem 6.4rem;
  @media (max-width: 48em) {
    padding: 4rem 2rem;
    height: 100%;
    overflow-x: hidden;
  }
`;
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
