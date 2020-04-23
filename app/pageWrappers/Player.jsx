import React from 'react';
import Pitch from "../components/Pitch.jsx";
import {POS_KEEPER, POS_CENTERBACK, POS_FULLBACK, POS_CENTERMIDFIELDER, POS_MIDFIELDER, POS_STRIKER} from "../components/Common.jsx";
import {PHASE_DEF, PHASE_OFF} from "../components/Common.jsx";
import PhaseNavigation from "../components/PhaseNavigation.jsx";
import DataHandler from "../components/DataHandler.jsx";
import ModalElement from "../components/Modal.jsx";
import HeaderComponent from "../components/HeaderComponent.jsx";

/**
 * This is a simple example of a simple subpage
 */
export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerSelection: null,
            phaseCategorySelection: null,
            phaseSelection: null,
            playerObject: null
        }

        this.handlePlayerSelection = this.handlePlayerSelection.bind(this);
        this.handlePhaseSelection = this.handlePhaseSelection.bind(this);
        this.handleReturnPlayer = this.handleReturnPlayer.bind(this);

    }

    handleReturnPlayer(player){
        this.setState({playerObject : player});
    }

    handlePlayerSelection(selection){
        this.setState({playerSelection: selection}, function(){
            this.refs.datahandler.update(this.state);
        });
        switch(selection){
            case POS_KEEPER:
                console.log("Keeper chosen");
                break;
            case POS_CENTERMIDFIELDER:
                console.log("Central midfielder chosen");
                break;
            case POS_MIDFIELDER:
                console.log("Midfielder chosen");
                break;
            case POS_CENTERBACK:
                console.log("Center back chosen");
                break;
            case POS_STRIKER:
                console.log("Striker chosen");
                break;
            case POS_FULLBACK:
                console.log("Fullback chosen");
                break;
            default:
                console.log("NULL");
                break;
        }
    }

    handlePhaseSelection(phase_id, phase_cat){
        this.setState({phaseCategorySelection: phase_cat, phaseSelection: phase_id},function(){
            this.refs.datahandler.update(this.state);
        });
        switch(phase_cat){
            case PHASE_DEF:
                console.log("Defence selected "+ phase_id);
                break;
            case PHASE_OFF:
                console.log("Offence selected "+ phase_id);
                break;
            default:
                console.log("NULL");
                break;
        }
    }

    render() {
        return (
            <div className="player row">
                <div className="col-lg-12">
                    <DataHandler handleReturnPlayer={this.handleReturnPlayer} ref={"datahandler"} phaseCategory={this.state.phaseCategorySelection} phase={this.state.phaseSelection} player={this.state.playerSelection}/>
                    <Pitch handlePlayerSelection={this.handlePlayerSelection} />
                    <PhaseNavigation handlePhaseSelection={this.handlePhaseSelection}>
                        <HeaderComponent>
                            {this.state.playerObject && this.state.phaseSelection &&
                            <ModalElement icon={"user"} title={"Din rolle"} phaseSelection={this.state.phaseSelection}>
                                <div dangerouslySetInnerHTML={{__html: this.state.playerObject.toHtml(this.state.phaseSelection)}}/>
                            </ModalElement>
                            }

                            {this.state.phaseSelection &&
                            <ModalElement icon={"users"} title={"Holdets rolle"} phaseSelection={this.state.phaseSelection}>
                                HOLDETS ROLLE
                            </ModalElement>
                            }
                        </HeaderComponent>
                    </PhaseNavigation>
                </div>
            </div>
        )
    }
}
