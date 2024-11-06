import { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import HamburgerDrawer from "./HamburgerDrawer";
import HeaderMenu from "./HeaderMenu";
import LanguageSelection from "./LanguageSelection";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  position: relative;
`;
function SideBar() {
  const [isOpen, setOpen] = useState(false);
  const toggleDrawer = () => setOpen((open) => !open);
  // const isSmallScreen = useMediaQuery("(max-width:48em)");
  const isSmallScreen = useMediaQuery("(max-width:48em)");

  return (
    <>
      {isSmallScreen ? (
        <HamburgerDrawer
          setOpen={setOpen}
          open={isOpen}
          toggleDrawer={toggleDrawer}
        >
          <Logo />
          <MainNav toggleDrawer={toggleDrawer} />
          <HeaderMenu />
          <LanguageSelection />
        </HamburgerDrawer>
      ) : (
        <StyledSidebar>
          <Logo />
          <MainNav />
        </StyledSidebar>
      )}
    </>
  );
}

export default SideBar;
