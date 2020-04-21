import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalElement = (props) => {
    const {
        title
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className={"modal-button"}>
            <div onClick={toggle}><button>Open</button></div>
            <Modal isOpen={modal} toggle={toggle} className={"modal-component"}>
                {title !== "" &&
                    <ModalHeader toggle={toggle}>{title}</ModalHeader>
                }
                <ModalBody>
                    {props.children}
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ModalElement;
