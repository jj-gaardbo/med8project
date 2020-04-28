import React from 'react';
import {
    PHASE_OFF_STANDARDS,
    PHASE_DEF_STANDARDS,
    PHASE_DEF,
    PHASE_DEF_HIGH_PRESSURE,
    PHASE_OFF,
    PHASE_DEF_CONVERSION,
    PHASE_DEF_FIELD_DEFENCE,
    PHASE_DEF_MEDIUM_LOW_PRESSURE,
    PHASE_OFF_CONVERSION,
    PHASE_OFF_PHASE_1,
    PHASE_OFF_PHASE_2,
    PHASE_OFF_PHASE_3
} from "./Common.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLevelUpAlt, faLevelDownAlt, faBatteryQuarter, faBatteryHalf, faBatteryFull, faThermometerFull, faThermometerHalf,faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { faUser, faUsers} from '@fortawesome/free-solid-svg-icons'
import {
    PHASE_DEF_CONVERSION_STRING,
    PHASE_DEF_FIELD_DEFENCE_STRING,
    PHASE_DEF_HIGH_PRESSURE_STRING,
    PHASE_DEF_MEDIUM_LOW_PRESSURE_STRING,
    PHASE_OFF_CONVERSION_STRING,
    PHASE_OFF_PHASE_1_STRING,
    PHASE_OFF_PHASE_2_STRING,
    PHASE_OFF_PHASE_3_STRING,
    PHASE_OFF_STANDARDS_STRING,
    PHASE_DEF_STANDARDS_STRING,
} from "./Common.jsx";


const phases = [
    {
        "name" : PHASE_OFF_STANDARDS_STRING,
        "icon" : faShieldAlt,
        "phase_category" : PHASE_OFF,
        "phase_id" : PHASE_OFF_STANDARDS,
        "phase_class" : "offensive-phase"
    },
    {
        "name" : PHASE_OFF_PHASE_3_STRING,
        "icon" : faBatteryFull,
        "phase_category" : PHASE_OFF,
        "phase_id" : PHASE_OFF_PHASE_3,
        "phase_class" : "offensive-phase"
    },
    {
        "name" : PHASE_OFF_PHASE_2_STRING,
        "icon" : faBatteryHalf,
        "phase_category" : PHASE_OFF,
        "phase_id" : PHASE_OFF_PHASE_2,
        "phase_class" : "offensive-phase"
    },
    {
        "name" : PHASE_OFF_PHASE_1_STRING,
        "icon" : faBatteryQuarter,
        "phase_category" : PHASE_OFF,
        "phase_id" : PHASE_OFF_PHASE_1,
        "phase_class" : "offensive-phase"
    },
    {
        "name" : PHASE_OFF_CONVERSION_STRING,
        "icon" : faLevelDownAlt,
        "phase_category" : PHASE_OFF,
        "phase_id" : PHASE_OFF_CONVERSION,
        "phase_class" : "offensive-phase"
    },
    {
        "name" : PHASE_DEF_CONVERSION_STRING,
        "icon" : faLevelUpAlt,
        "phase_category" : PHASE_DEF,
        "phase_id" : PHASE_DEF_CONVERSION,
        "phase_class" : "defensive-phase"
    },
    {
        "name" : PHASE_DEF_HIGH_PRESSURE_STRING,
        "icon" : faThermometerFull,
        "phase_category" : PHASE_DEF,
        "phase_id" : PHASE_DEF_HIGH_PRESSURE,
        "phase_class" : "defensive-phase"
    },
    {
        "name" : PHASE_DEF_MEDIUM_LOW_PRESSURE_STRING,
        "icon" : faThermometerHalf,
        "phase_category" : PHASE_DEF,
        "phase_id" : PHASE_DEF_MEDIUM_LOW_PRESSURE,
        "phase_class" : "defensive-phase"
    },
    {
        "name" : PHASE_DEF_FIELD_DEFENCE_STRING,
        "icon" : faShieldAlt,
        "phase_category" : PHASE_DEF,
        "phase_id" : PHASE_DEF_FIELD_DEFENCE,
        "phase_class" : "defensive-phase"
    },
    {
        "name" : PHASE_DEF_STANDARDS_STRING,
        "icon" : faShieldAlt,
        "phase_category" : PHASE_DEF,
        "phase_id" : PHASE_DEF_STANDARDS,
        "phase_class" : "defensive-phase"
    }
];

export default class PhaseNavigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPhase: null,
            selected_phase_cat: null
        };

        this.createPhaseNavigation = this.createPhaseNavigation.bind(this);
        this.handlePhaseSelection = this.handlePhaseSelection.bind(this);
    }

    handlePhaseSelection(phase_id, phase_category){
        this.setState({selectedPhase: phase_id, selected_phase_cat: phase_category});
        this.props.handlePhaseSelection(phase_id, phase_category);
    }

    createPhaseNavigation(){
        let nav = [];
        let children = [];
        let phaseClass = "";
        children.push(<li className={"category cat-off"}><strong>Offensive faser</strong></li>)
        for (let i = 0; i < phases.length; i++) {
            if(i === (parseInt(phases.length/2) - 1)){
                phaseClass = phases[i].phase_class + " offensive-end";
            }
            else if(i === parseInt(phases.length/2)){
                phaseClass = phases[i].phase_class + " defensive-start";
            } else {
                phaseClass = phases[i].phase_class;
            }
            children.push(<li key={i} className={"nav-item"}>
                <button
                    className={`phase-nav-link ${this.state.selectedPhase === phases[i].phase_id ? " chosen" : ""} ${phaseClass}`}
                    onClick={() => this.handlePhaseSelection(phases[i].phase_id, phases[i].phase_category)}>
                    <FontAwesomeIcon icon={phases[i].icon} />
                    {phases[i].name}
                </button>
            </li>)
        }
        children.push(<li className={"category cat-def"}><strong>Defensive faser</strong></li>)
        nav.push(<ul key={0} className={"phase-nav-list"}>{children}</ul>)
        return nav
    }


    render() {
        return (
            <nav className={"phase-nav"}>
                {this.props.children}
                {this.createPhaseNavigation()}
            </nav>
        )
    }
}
