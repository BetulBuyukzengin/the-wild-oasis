import { useMediaQuery } from "usehooks-ts";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

import styled from "styled-components";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  @media (max-width: 48em) {
    grid-template-columns: 28rem;
  }
`;

function Login() {
  const isSmallScreen = useMediaQuery("(max-width:48em)");
  return (
    <LoginLayout>
      <Logo />
      <Heading as={isSmallScreen ? "h3" : "h2"}>Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
