import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

//! Compound Component
function AddCabin() {
  const { t } = useTranslation();
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>{t("Add new cabin")}</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
