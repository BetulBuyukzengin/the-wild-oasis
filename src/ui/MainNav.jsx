/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiHome,
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { useTranslation } from "react-i18next";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;

    @media (max-width: 48em) {
      padding: 0.6rem;
    }

    /* This works because react-router places the active class on the active NavLink */
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
      color: var(--color-grey-800);
      background-color: var(--color-grey-50);
      border-radius: var(--border-radius-sm);
    }

    & svg {
      width: 2.4rem;
      height: 2.4rem;
      color: var(--color-grey-400);
      transition: all 0.3s;
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
      color: var(--color-brand-600);
    }
  }
`;
function MainNav({ toggleDrawer }) {
  const { t } = useTranslation();

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard" onClick={toggleDrawer}>
            <HiHome />
            <span>{t("Home")}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings" onClick={toggleDrawer}>
            <HiOutlineCalendarDays />
            <span>{t("Bookings")}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cabins" onClick={toggleDrawer}>
            <HiOutlineHomeModern />
            <span>{t("Cabins")}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users" onClick={toggleDrawer}>
            <HiOutlineUsers />
            <span>{t("Users")}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings" onClick={toggleDrawer}>
            <HiOutlineCog6Tooth />
            <span>{t("Settings")}</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}
export default MainNav;
