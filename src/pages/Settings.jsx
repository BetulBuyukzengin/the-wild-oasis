import { useMediaQuery } from "usehooks-ts";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";

function Settings() {
  const isSmallScreen = useMediaQuery("(max-width:48em)");
  const { t } = useTranslation();
  return (
    <Row>
      <Heading as={isSmallScreen ? "h5" : "h1"}>
        {t("Update hotel settings")}
      </Heading>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;
