import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import { useMediaQuery } from "usehooks-ts";
function Account() {
  const isSmallScreen = useMediaQuery("(max-width:48em)");

  return (
    <>
      <Heading as={isSmallScreen ? "h3" : "h1"}>Update your account</Heading>

      <Row>
        <Heading as={isSmallScreen ? "h5" : "h2"}>Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as={isSmallScreen ? "h5" : "h2"}>Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
