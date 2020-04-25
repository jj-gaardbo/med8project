import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {getPhaseTitle} from "./Common.jsx";
import ButtonModal from "./ButtonModal.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faUsers} from '@fortawesome/free-solid-svg-icons'
import {modalOpenCheck} from "./Common.jsx";

export default class ModalElement extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        if(modalOpenCheck() && !this.state.isOpen){
            return;
        }
        this.setState({isOpen: !this.state.isOpen});
    }

    getIcon(icon){
        if(icon === "user"){
            return(<FontAwesomeIcon icon={faUser} />);
        } else if(icon === "users"){
            return(<FontAwesomeIcon icon={faUsers} />);
        }
    }

    render(){
        const {
            title,
            phaseSelection
        } = this.props;

        const phaseString = getPhaseTitle(phaseSelection)

        return(
            <div className={"modal-button"}>
                <ButtonModal title={title} handleClick={this.toggle} className={`modal-button ${this.state.isOpen ? "modal-is-open" : ""}`}>
                    {this.props.icon &&
                        this.getIcon(this.props.icon)
                    }
                </ButtonModal>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle} className={"modal-component modal-lg"}>
                    {title !== "" &&
                    <ModalHeader toggle={this.toggle}>{title} - {phaseString && phaseString}</ModalHeader>
                    }
                    <ModalBody>
                        {this.props.modalTabs}
                        {this.props.children}
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}
