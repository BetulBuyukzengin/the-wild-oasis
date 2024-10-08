import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
// import CabinTable from "./CabinTable";

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

        {/* <Modal.Open opens="cabin-table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="cabin-table">
        <CabinTable />
      </Modal.Window> */}
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
