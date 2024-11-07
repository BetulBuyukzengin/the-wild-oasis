import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
import { useMediaQuery } from "usehooks-ts";
import { useTranslation } from "react-i18next";

function NewUsers() {
  const isSmallScreen = useMediaQuery("(max-width:48em)");
  const { t } = useTranslation();
  return (
    <>
      <Heading as={isSmallScreen ? "h5" : "h1"}>
        {t("Create a new user")}
      </Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
