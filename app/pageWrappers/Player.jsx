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
import {getPhaseTitle, getPlayerPosString} from "../components/Common.jsx";
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
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faUsers, faSignInAlt} from '@fortawesome/free-solid-svg-icons'

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
import Button from "../components/Button.jsx";

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
            participantDateString: null,
            isVisiblePlayerRole: false,
            isVisibleTeamRole: true,
            externalOverlay: null
        }

        this.handlePlayerSelection = this.handlePlayerSelection.bind(this);
        this.handlePhaseSelection = this.handlePhaseSelection.bind(this);
        this.handleReturnPlayer = this.handleReturnPlayer.bind(this);
        this.handlePhaseDom = this.handlePhaseDom.bind(this);
        this.handleRoleToggle = this.handleRoleToggle.bind(this);
        this.handleExternalOverlay = this.handleExternalOverlay.bind(this)
        this.addBodyClasses = this.addBodyClasses.bind(this)

    }

    handleExternalOverlay(index){
        this.setState({externalOverlay: index}, function(){
            this.setState({externalOverlay: null});
        });
    }

    handleRoleToggle(index){
        if(this.state.playerObject === null){
            return;
        }

        if(index === 0){
            this.setState({isVisiblePlayerRole: false, isVisibleTeamRole: true});
        }
        else if(index === 1){
            this.setState({isVisiblePlayerRole: true, isVisibleTeamRole: false});
        }


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
                this.setState({isVisiblePlayerRole: true, isVisibleTeamRole: false});
                break;
            case POS_CENTERMIDFIELDER:
                this.setState({isVisiblePlayerRole: true, isVisibleTeamRole: false});
                break;
            case POS_MIDFIELDER:
                this.setState({isVisiblePlayerRole: true, isVisibleTeamRole: false});
                break;
            case POS_CENTERBACK:
                this.setState({isVisiblePlayerRole: true, isVisibleTeamRole: false});
                break;
            case POS_STRIKER:
                this.setState({isVisiblePlayerRole: true, isVisibleTeamRole: false});
                break;
            case POS_FULLBACK:
                this.setState({isVisiblePlayerRole: true, isVisibleTeamRole: false});
                break;
            default:
                this.setState({isVisiblePlayerRole: false, isVisibleTeamRole: true});
                break;
        }
    }

    addBodyClasses(phase_id){
        let body = $('body');
        body.removeClass('defence offence def-high-pressure def-medium-low-pressure def-field-defence def-conversion off-phase-1 off-phase-2 off-phase-3 off-conversion def-standards off-standards');
        switch (phase_id) {
            case PHASE_DEF_HIGH_PRESSURE:
                body.addClass('def-high-pressure defence');
                break;
            case PHASE_DEF_MEDIUM_LOW_PRESSURE:
                body.addClass('def-medium-low-pressure defence');
                break;
            case PHASE_DEF_FIELD_DEFENCE:
                body.addClass('def-field-defence defence');
                break;
            case PHASE_DEF_CONVERSION:
                body.addClass('def-conversion defence');
                break;
            case PHASE_OFF_PHASE_1:
                body.addClass('off-phase-1 offence');
                break;
            case PHASE_OFF_PHASE_2:
                body.addClass('off-phase-2 offence');
                break;
            case PHASE_OFF_PHASE_3:
                body.addClass('off-phase-3 offence');
                break;
            case PHASE_OFF_CONVERSION:
                body.addClass('off-conversion offence');
                break;
            case PHASE_DEF_STANDARDS:
                body.addClass('def-standards defence');
                break;
            case PHASE_OFF_STANDARDS:
                body.addClass('off-standards offence');
                break;
        }
    }

    handlePhaseSelection(phase_id, phase_cat){
        this.setState({phaseCategorySelection: phase_cat, phaseSelection: phase_id},function(){
            this.refs.datahandler.update(this.state);
        });

        this.addBodyClasses(phase_id);
    }

    handlePhaseDom(phase_id){
        this.addBodyClasses(phase_id);
        switch (phase_id) {
            case PHASE_DEF_HIGH_PRESSURE:
                return <PhaseDefHighPressureAcc theme={"theme-1"}/>
            case PHASE_DEF_MEDIUM_LOW_PRESSURE:
                return <PhaseDefMediumLowPressureAcc theme={"theme-1"}/>
            case PHASE_DEF_FIELD_DEFENCE:
                return <PhaseDefFieldDefenceAcc externalOverlay={() => this.handleExternalOverlay(4)} theme={"theme-1"}/>
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
                return <PhaseDefStandardsAcc externalOverlay={() => this.handleExternalOverlay(5)} theme={"theme-1"}/>
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
                            <div className="col-xs-11 offset-xs-0 offset-sm-0 offset-md-0 col-lg-6 col-xl-5 offset-lg-0 offset-xl-2">
                                <h3 className={'chosen-phase-title'}>{getPhaseTitle(this.state.phaseSelection)}</h3>
                            </div>

                            {this.state.playerSelection &&
                                <div className="col-sm-12 col-md-4 col-lg-6 col-xl-5 toggle-role-bottons">
                                    <Button className={`${"theme-"+this.state.phaseCategorySelection} btn btn-primary${this.state.isVisibleTeamRole ? " btn-highlight" : ""}`} handleClick={() => this.handleRoleToggle(0)}>
                                        <FontAwesomeIcon icon={faUsers} /> Holdets principper
                                    </Button>
                                    <Button className={`${"theme-"+this.state.phaseCategorySelection} btn btn-primary${this.state.isVisiblePlayerRole ? " btn-highlight" : ""}`} handleClick={() => this.handleRoleToggle(1)}>
                                        <FontAwesomeIcon icon={faUser} /> Din rolle
                                    </Button>
                                </div>
                            }
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
                        <div className="col-xs-11 offset-xs-0 offset-sm-0 offset-md-0 col-lg-6 col-xl-5 offset-lg-0 offset-xl-2">
                            <Pitch externalOverlay={this.state.externalOverlay} phaseSelection={this.state.phaseSelection} phaseCategory={this.state.phaseCategorySelection} handlePlayerSelection={this.handlePlayerSelection} />
                        </div>

                        {this.state.phaseSelection && isMobile ? (
                                <ModalElement icon={"users"} title={"Holdets principper"} phaseSelection={this.state.phaseSelection} className={"theme-"+this.state.phaseCategorySelection}>
                                    <div className="col-xl-5 content-col">
                                        {this.handlePhaseDom(this.state.phaseSelection)}
                                    </div>
                                </ModalElement>
                        )
                        : this.state.playerObject && this.state.phaseSelection && this.state.isVisiblePlayerRole ? (
                                <div className={"col-sm-12 col-md-4 col-lg-6 col-xl-5"}>
                                    <div className={`${"theme-"+this.state.phaseCategorySelection} content-col player-role-content`}>
                                        <h3>{getPlayerPosString(this.state.playerSelection)}</h3>
                                        <div dangerouslySetInnerHTML={{__html: this.state.playerObject.toHtml(this.state.phaseSelection)}}/>
                                    </div>
                                </div>
                        )
                        : this.state.phaseSelection && this.state.isVisibleTeamRole ? (
                                <div className="col-sm-12 col-md-4 col-lg-6 col-xl-5">
                                    <div className="content-col">
                                        {this.handlePhaseDom(this.state.phaseSelection)}
                                    </div>
                                </div>
                        )
                        : ""}

{/*
                        {this.state.phaseSelection && BrowserView ? (
                                <div className="col-xl-5 content-col">
                                    {this.handlePhaseDom(this.state.phaseSelection)}
                                </div>
                            ) : (
                                <div className="col-xl-5 content-col">
                                    {this.handlePhaseDom(this.state.phaseSelection)}
                                </div>
                            )
                        }*/}
                    </div>


                    <PhaseNavigation handlePhaseSelection={this.handlePhaseSelection}>
                        <h4>Vælg spil fase</h4>
                    </PhaseNavigation>

                </div>
            </div>
        )
    }
}
