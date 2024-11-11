/* eslint-disable react/prop-types */
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
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
function SideBar({ isOpen, setOpen, toggleDrawer }) {
  // const [isOpen, setOpen] = useState(false);
  // const toggleDrawer = () => setOpen((open) => !open);
  // const isSmallScreen = useMediaQuery("(max-width:48em)");
  const isSmallScreen = useMediaQuery("(max-width:84.37em)");

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
          <HeaderMenu toggleDrawer={toggleDrawer} />
          <LanguageSelection />
        </HamburgerDrawer>
      ) : (
        <StyledSidebar>
          <Logo />
          <MainNav toggleDrawer={toggleDrawer} />
        </StyledSidebar>
      )}
    </>
  );
}

export default SideBar;
