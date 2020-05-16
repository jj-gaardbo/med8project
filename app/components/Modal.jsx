import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {getPhaseTitle} from "./Common.jsx";
import ButtonModal from "./ButtonModal.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faUsers, faSignInAlt, faPlay} from '@fortawesome/free-solid-svg-icons'

import {modalOpenCheck} from "./Common.jsx";

export default class ModalElement extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }

        this.toggle = this.toggle.bind(this);
    }

    isOpen(){
        return this.state.isOpen;
    }

    toggle(){
        if(modalOpenCheck() && !this.state.isOpen){
            return;
        }
        let self = this;
        this.setState({isOpen: !this.state.isOpen}, function(){
            if(self.props.callback){
                self.props.callback()
            }
        });
    }

    getIcon(icon){
        if(icon === "user"){
            return(<FontAwesomeIcon icon={faUser} />);
        } else if(icon === "users"){
            return(<FontAwesomeIcon icon={faUsers} />);
        } else if(icon === "summary"){
            return(<FontAwesomeIcon icon={faSignInAlt} />);
        } else if(icon === "play"){
            return(<FontAwesomeIcon icon={faPlay} />);
        }
    }

    render(){
        const {
            title,
            phaseSelection,
            className
        } = this.props;

        const phaseString = getPhaseTitle(phaseSelection)

        return(
            <div className={"modal-button"}>
                <ButtonModal title={title} handleClick={this.toggle} className={`btn btn-primary modal-btn ${this.state.isOpen ? "modal-is-open" : ""} ${this.props.theme}`}>
                    {this.props.icon &&
                        this.getIcon(this.props.icon)
                    }
                </ButtonModal>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle} className={"modal-component modal-auto " + className}>
                    {title !== "" &&
                    <ModalHeader toggle={this.toggle}>{phaseString && phaseString+" - "}{title}</ModalHeader>
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
