/* eslint-disable react/prop-types */
import { Sling } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import styled from "styled-components";

const StyledSpan = styled.span`
  /* position: relative; */
  background-color: var(--color-grey-0);
  padding: 0.4rem;
  border-bottom: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  top: 0;
  left: 0;
  position: absolute;
`;
function HamburgerDrawer({ children, setOpen, open, toggleDrawer }) {
  return (
    <StyledSpan>
      <Sling
        label="appSidebar"
        rounded
        size={16}
        color="var(--color-grey-900)"
        toggle={() => setOpen(!open)}
        toggled={open}
      />
      <Drawer
        style={{
          width: "25rem",
          backgroundColor: "var(--color-grey-0)",
          padding: "3.2rem 2.4rem",
          borderRight: "1px solid var(--color-grey-100)",
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          alignItems: "center",
        }}
        lockBackgroundScroll
        open={open}
        onClose={toggleDrawer}
        direction="left"
      >
        <span
          style={{
            position: "absolute",
            top: "0",
            right: "0",
          }}
        >
          <Sling
            label="appSidebar"
            rounded
            size={16}
            color="var(--color-grey-900)"
            toggle={() => setOpen(!open)}
            toggled={open}
          />
        </span>
        {children}
      </Drawer>
    </StyledSpan>
  );
}

export default HamburgerDrawer;
