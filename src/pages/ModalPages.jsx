import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
   const [showModal, setShowModal] = useState(false);

   const handleClick = () => {
      setShowModal(true);
   };

   const onClose = () => {
      setShowModal(false);
   };

   const actionBar = <Button onClick={onClose} primary>I accept</Button>;

   const modal = (
      <Modal onClose={onClose} actionBar={actionBar}>
         <p>Here is an important agreement for you to accept.</p>
      </Modal>
   );

   return (
      <div>
         <Button onClick={handleClick} primary>
            open modal
         </Button>
         {showModal && modal}
      </div>
   );
}

export default ModalPage;

// This parent component will have the button and the state to show the button or not
