import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import styled from "styled-components";

import ButtonIcon from "../ui/ButtonIcon";
import Logout from "../features/authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";
const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
`;

export default function HeaderMenu({ toggleDrawer }) {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon
          onClick={() => {
            toggleDrawer();
            navigate("/account");
          }}
        >
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}
