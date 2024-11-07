import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import { useMediaQuery } from "usehooks-ts";
import { useTranslation } from "react-i18next";
function Account() {
  const isSmallScreen = useMediaQuery("(max-width:48em)");
  const { t } = useTranslation();
  return (
    <>
      <Heading as={isSmallScreen ? "h3" : "h1"}>
        {t("Update your account")}
      </Heading>

      <Row>
        <Heading as={isSmallScreen ? "h5" : "h2"}>
          {t("Update user data")}
        </Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as={isSmallScreen ? "h5" : "h2"}>
          {t("Update password")}
        </Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
