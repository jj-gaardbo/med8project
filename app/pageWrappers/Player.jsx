import React from 'react';
import Pitch from "../components/Pitch.jsx";
import {POS_KEEPER, POS_CENTERBACK, POS_FULLBACK, POS_CENTERMIDFIELDER, POS_MIDFIELDER, POS_STRIKER} from "../components/Common.jsx";
import {PHASE_DEF, PHASE_OFF} from "../components/Common.jsx";
import PhaseNavigation from "../components/PhaseNavigation.jsx";
import DataHandler from "../components/DataHandler.jsx";

/**
 * This is a simple example of a simple subpage
 */
export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerSelection: null,
            phaseCategorySelection: null,
            phaseSelection: null
        }

        this.handlePlayerSelection = this.handlePlayerSelection.bind(this);
        this.handlePhaseSelection = this.handlePhaseSelection.bind(this);
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
                    <DataHandler ref={"datahandler"} phaseCategory={this.state.phaseCategorySelection} phase={this.state.phaseSelection} player={this.state.playerSelection}/>
                    <Pitch handlePlayerSelection={this.handlePlayerSelection} />
                    <PhaseNavigation handlePhaseSelection={this.handlePhaseSelection}></PhaseNavigation>
                </div>
            </div>
        )
    }
}
