import pitchBackground from "../data/images/SoccerPitchPortrait.png";
import React from "react";
import Selection from "./Selection.jsx";
import Channels from "./Channels.jsx";
import ZonesDef from "./ZonesDef.jsx";
import ZonesOff from "./ZonesOff.jsx";
import Button from "./Button.jsx";
import $ from 'jquery';
import {PHASE_DEF, PHASE_OFF} from "./Common.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle, faLocationArrow} from '@fortawesome/free-solid-svg-icons'
import TooltipElement from "./Tooltip.jsx";

export default class Pitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index:0,
            overlays: [
                true,
                false,
                false,
                false
            ],
            chosenPhase: null,
            chosenPosition: null,
            timer: null,
            timeout: 3000,
            progressTimer: null
        }

        this.disableOverlay = this.disableOverlay.bind(this);
        this.toggleOverlay = this.toggleOverlay.bind(this);
        this.handlePlayerSelection = this.handlePlayerSelection.bind(this);
        this.handlePhaseSelection = this.handlePhaseSelection.bind(this);
    }

    handlePlayerSelection(select){
        if(select === this.state.chosenPosition){
            this.setState({chosenPosition: null});
            this.props.handlePlayerSelection(null);
        } else {
            this.setState({chosenPosition: select});
            this.props.handlePlayerSelection(select);
        }
    }

    handlePhaseSelection(select){
        this.setState({chosenPhase: select});
        this.props.handlePhaseSelection(select);
    }

    disableOverlay(){
        this.setState({overlays:[false,false,false,false]});
    }

    progress(timeleft, timetotal, $element) {
        let self = this;
        let progressBarWidth = timeleft * $element.width() / timetotal;
        $element.find('div').animate({ width: progressBarWidth }, timeleft === timetotal ? 0 : 1000, 'linear');
        if(timeleft > 0) {
            this.state.progressTimer = setTimeout(function() {
                self.progress(timeleft - 1000, timetotal, $element);
            }, 500);
        } else {
            clearTimeout(self.state.progressTimer);
        }
    };

    toggleOverlay(showOverlay = 0){
        if(this.state.progressTimer !== null){ console.log("!"); return;}
        let self = this;
        let overlays = [false,false,false,false];
        overlays[showOverlay] = true;
        this.setState({overlays: overlays});

        if(showOverlay !== 0){
            this.progress(this.state.timeout, this.state.timeout, $('#progress'));
            this.state.timer = setTimeout(function(){
                self.setState({progressTimer:null});
                self.toggleOverlay(0);
                clearTimeout(self.state.timer);
            }, this.state.timeout);
        }
    }

    render() {
        return (
            <div className="pitch_selection pitch">

                <div id="progress" className={`${this.state.progressTimer !== null ? "shown" : "hidden"}`}><div/></div>

                <img src={pitchBackground} alt="Pitch" className={"pitch_background"}/>

                <Selection className={`overlay selection ${this.state.overlays[0] ? "shown" : "hidden"}`} onSelect={this.handlePlayerSelection} highlight={this.state.chosenPosition} />

                <Channels className={`overlay channels ${this.state.overlays[1] ? "shown" : "hidden"}`}/>

                <ZonesDef phaseSelection={this.props.phaseSelection} className={`overlay zones-def ${this.state.overlays[2] ? "shown" : "hidden"}`}/>

                <ZonesOff phaseSelection={this.props.phaseSelection} className={`overlay zones-off ${this.state.overlays[3] ? "shown" : "hidden"}`}/>

                {/*<Button className={"btn btn-primary btn-overlay"} handleClick={() => this.toggleOverlay(1)}>Channels</Button>*/}

                {this.props.phaseCategory === 1 &&
                    <TooltipElement
                        element={<Button className={"btn btn-primary btn-overlay"} handleClick={() => this.toggleOverlay(2)}><FontAwesomeIcon icon={faLocationArrow} /></Button>}
                        tip={<p>Hvor på banen?</p>}
                        target={"def-zones-tip"}
                    />
                }

                {this.props.phaseCategory === 2 &&
                    <TooltipElement
                        element={<Button className={"btn btn-primary btn-overlay"} handleClick={() => this.toggleOverlay(3)}><FontAwesomeIcon icon={faLocationArrow} /></Button>}
                        tip={<p>Hvor på banen?</p>}
                        target={"off-zones-tip"}
                    />
                }

            </div>
        )
    }
}
