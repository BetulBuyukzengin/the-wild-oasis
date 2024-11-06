import { useMediaQuery } from "usehooks-ts";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Settings() {
  const isSmallScreen = useMediaQuery("(max-width:48em)");
  return (
    <Row>
      <Heading as={isSmallScreen ? "h5" : "h1"}>Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;
