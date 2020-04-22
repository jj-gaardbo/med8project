import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {getPhaseTitle} from "./Common.jsx";
import ButtonModal from "./ButtonModal.jsx";

export default class ModalElement extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState({isOpen: !this.state.isOpen});
    }

    render(){
        const {
            title,
            phaseSelection
        } = this.props;

        const phaseString = getPhaseTitle(phaseSelection)

        return(
            <div className={"modal-button"}>
                <ButtonModal handleClick={this.toggle} className={`modal-button ${this.state.isOpen ? "modal-is-open" : ""}`}>{title}</ButtonModal>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle} className={"modal-component modal-lg"}>
                    {title !== "" &&
                    <ModalHeader toggle={this.toggle}>{title} - {phaseString && phaseString}</ModalHeader>
                    }
                    <ModalBody>
                        {this.props.children}
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}
