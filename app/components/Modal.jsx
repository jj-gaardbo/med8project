import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {getPhaseTitle} from "./Common.jsx";

const ModalElement = (props) => {
    const {
        title,
        phaseSelection
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const phaseString = getPhaseTitle(phaseSelection)

    return (
        <div className={"modal-button"}>
            <div onClick={toggle}><button>{title}</button></div>
            <Modal isOpen={modal} toggle={toggle} className={"modal-component modal-lg"}>
                {title !== "" &&
                    <ModalHeader toggle={toggle}>{title} - {phaseString && phaseString}</ModalHeader>
                }
                <ModalBody>
                    {props.children}
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ModalElement;
