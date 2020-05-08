import React from 'react';
import Pitch from "../components/Pitch.jsx";
import {POS_KEEPER, POS_CENTERBACK, POS_FULLBACK, POS_CENTERMIDFIELDER, POS_MIDFIELDER, POS_STRIKER} from "../components/Common.jsx";
import {PHASE_DEF, PHASE_OFF} from "../components/Common.jsx";
import {PHASE_DEF_HIGH_PRESSURE,PHASE_DEF_MEDIUM_LOW_PRESSURE,PHASE_DEF_FIELD_DEFENCE,PHASE_DEF_CONVERSION,PHASE_OFF_PHASE_1,PHASE_OFF_PHASE_2,PHASE_OFF_PHASE_3,PHASE_OFF_CONVERSION} from "../components/Common.jsx";
import {PHASE_DEF_STANDARDS, PHASE_OFF_STANDARDS} from "../components/Common.jsx";
import PhaseNavigation from "../components/PhaseNavigation.jsx";
import DataHandler from "../components/DataHandler.jsx";
import ModalElement from "../components/Modal.jsx";
import HeaderComponent from "../components/HeaderComponent.jsx";
import PhaseDefHighPressure from "../data/Phases/10.jsx";
import PhaseDefMediumLowPressure from "../data/Phases/11.jsx";
import PhaseDefFieldDefence from "../data/Phases/12.jsx";
import PhaseDefConversion from "../data/Phases/13.jsx";
import PhaseDefStandards from "../data/Phases/8.jsx";
import PhaseOffStandards from "../data/Phases/9.jsx";
import PhaseOffPhase1 from "../data/Phases/14.jsx";
import PhaseOffPhase2 from "../data/Phases/15.jsx";
import PhaseOffPhase3 from "../data/Phases/16.jsx";
import PhaseOffConversion from "../data/Phases/17.jsx";
import {getPhaseTitle} from "../components/Common.jsx";
import Eval from "../components/Eval.jsx";
import $ from 'jquery';
import PhaseDefStandardsAcc from "../data/Phases/_8.jsx";
import PhaseOffStandardsAcc from "../data/Phases/_9.jsx";
import PhaseDefHighPressureAcc from "../data/Phases/_10.jsx";
import PhaseDefMediumLowPressureAcc from "../data/Phases/_11.jsx";
import PhaseDefFieldDefenceAcc from "../data/Phases/_12.jsx";
import PhaseDefConversionAcc from "../data/Phases/_13.jsx";
import PhaseOffPhase1Acc from "../data/Phases/_14.jsx";
import PhaseOffPhase2Acc from "../data/Phases/_15.jsx";
import PhaseOffPhase3Acc from "../data/Phases/_16.jsx";
import PhaseOffConversionAcc from "../data/Phases/_17.jsx";


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
            playerObject: null,
            participantNo: null,
            participantTimestamp: null,
            participantDateString: null
        }

        this.handlePlayerSelection = this.handlePlayerSelection.bind(this);
        this.handlePhaseSelection = this.handlePhaseSelection.bind(this);
        this.handleReturnPlayer = this.handleReturnPlayer.bind(this);
        this.handlePhaseDom = this.handlePhaseDom.bind(this);

    }

    componentDidMount() {
        let number = localStorage.getItem('number')
        let timestamp = localStorage.getItem('timestamp')
        let dateString = localStorage.getItem('dateString')
        if(number !== null && timestamp !== null && dateString !== null){
            this.setState({participantNo: number, participantTimestamp: timestamp, participantDateString: dateString});
        } else if(typeof this.props.location !== "undefined"){
            const { number, timestamp, dateString } = this.props.location.state;
            this.setState({participantNo: number, participantTimestamp: timestamp, participantDateString: dateString});
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //this.state.mouseclicks = this.props.mouseclicks;
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

        let body = $('body');
        body.removeClass('defence');
        body.removeClass('offence');
        switch(phase_cat){
            case PHASE_DEF:
                body.addClass('defence');
                break;
            case PHASE_OFF:
                body.addClass('offence');
                break;
            default:
                console.log("NULL");
                break;
        }
    }

    handlePhaseDom(phase_id){
        switch (phase_id) {
            case PHASE_DEF_HIGH_PRESSURE:
                return <PhaseDefHighPressureAcc theme={"theme-1"}/>
            case PHASE_DEF_MEDIUM_LOW_PRESSURE:
                return <PhaseDefMediumLowPressureAcc theme={"theme-1"}/>
            case PHASE_DEF_FIELD_DEFENCE:
                return <PhaseDefFieldDefenceAcc theme={"theme-1"}/>
            case PHASE_DEF_CONVERSION:
                return <PhaseDefConversionAcc theme={"theme-1"}/>
            case PHASE_OFF_PHASE_1:
                return <PhaseOffPhase1Acc theme={"theme-2"}/>
            case PHASE_OFF_PHASE_2:
                return <PhaseOffPhase2Acc theme={"theme-2"}/>
            case PHASE_OFF_PHASE_3:
                return <PhaseOffPhase3Acc theme={"theme-2"}/>
            case PHASE_OFF_CONVERSION:
                return <PhaseOffConversionAcc theme={"theme-2"}/>
            case PHASE_DEF_STANDARDS:
                return <PhaseDefStandardsAcc theme={"theme-1"}/>
            case PHASE_OFF_STANDARDS:
                return <PhaseOffStandardsAcc theme={"theme-2"}/>
        }
    }

    render() {
        return (
            <div className="player row">
                <div className="col-lg-12">

                    <DataHandler handleReturnPlayer={this.handleReturnPlayer} ref={"datahandler"} phaseCategory={this.state.phaseCategorySelection} phase={this.state.phaseSelection} player={this.state.playerSelection}/>

                    {this.state.participantNo !== null && this.state.participantTimestamp !== null && this.state.participantDateString !== null &&
                        <Eval mouseclicks={this.props.mouseclicks} chosenpos={this.state.playerSelection} number={this.state.participantNo} timestamp={this.state.participantTimestamp} datestring={this.state.participantDateString} />
                    }

                    {this.state.phaseSelection ? (
                        <div className="row">
                            <div className="col-xs-11 offset-1 col-lg-10 col-xl-10 offset-lg-2 offset-xl-2">
                                <h3 className={'chosen-phase-title'}>{getPhaseTitle(this.state.phaseSelection)}</h3>
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col-xs-11 offset-1 col-lg-10 col-xl-10 offset-lg-2 offset-xl-2">
                                <h3 className={'chosen-phase-title'}>Vælg fase</h3>
                            </div>
                        </div>
                    )}

{/*                    <HeaderComponent>
                        {this.state.playerObject && this.state.phaseSelection &&
                        <ModalElement icon={"user"} title={"Din rolle"} phaseSelection={this.state.phaseSelection} className={"theme-"+this.state.phaseCategorySelection}>
                            <div dangerouslySetInnerHTML={{__html: this.state.playerObject.toHtml(this.state.phaseSelection)}}/>
                        </ModalElement>
                        }

                        {this.state.phaseSelection &&
                        this.handlePhaseDom(this.state.phaseSelection)
                        }
                    </HeaderComponent>*/}


                    <div className="row full-height">
                        <div className="col-xl-6">
                            <Pitch phaseSelection={this.state.phaseSelection} phaseCategory={this.state.phaseCategorySelection} handlePlayerSelection={this.handlePlayerSelection} />
                        </div>

                        <div className="col-xl-6">
                            {this.state.phaseSelection &&
                                this.handlePhaseDom(this.state.phaseSelection)
                            }
                        </div>
                    </div>


                    <PhaseNavigation handlePhaseSelection={this.handlePhaseSelection}>
                        <h4>Vælg spil fase</h4>
                    </PhaseNavigation>

                </div>
            </div>
        )
    }
}
