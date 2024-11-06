import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
import { useMediaQuery } from "usehooks-ts";

function NewUsers() {
  const isSmallScreen = useMediaQuery("(max-width:48em)");

  return (
    <>
      <Heading as={isSmallScreen ? "h5" : "h1"}>Create a new user</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
