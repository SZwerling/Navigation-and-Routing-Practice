import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage(){
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    return(
        <div>
            <Button onClick={handleClick} primary>open modal</Button>
            {showModal && <Modal />}
        </div>
    )
}

export default ModalPage;


// This parent component will have the button and the state to show the button or not