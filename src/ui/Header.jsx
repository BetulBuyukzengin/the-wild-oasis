/* eslint-disable react/prop-types */
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import LanguageSelection from "./LanguageSelection";
import { useMediaQuery } from "usehooks-ts";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 48em) {
    padding: 1rem 4.8rem;
  }
`;
function Header({ toggleDrawer }) {
  const isSmallScreen = useMediaQuery("(max-width:84.37em)");
  return (
    <StyledHeader>
      {isSmallScreen ? (
        <>
          <UserAvatar />
        </>
      ) : (
        <>
          <UserAvatar />
          <HeaderMenu toggleDrawer={toggleDrawer} />
          <LanguageSelection />
        </>
      )}
    </StyledHeader>
  );
}

export default Header;
