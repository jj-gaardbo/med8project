import React from 'react';
import {
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

const phases = [
    {
        "name" : "Afslutningsspil Fase 3",
        "icon" : faBatteryFull,
        "phase_category" : PHASE_OFF,
        "phase_id" : PHASE_OFF_PHASE_3
    },
    {
        "name" : "Opbygningsspil Fase 2",
        "icon" : faBatteryHalf,
        "phase_category" : PHASE_OFF,
        "phase_id" : PHASE_OFF_PHASE_2
    },
    {
        "name" : "Opbygningsspil Fase 1",
        "icon" : faBatteryQuarter,
        "phase_category" : PHASE_OFF,
        "phase_id" : PHASE_OFF_PHASE_1
    },
    {
        "name" : "Omstilling offensivt",
        "icon" : faLevelUpAlt,
        "phase_category" : PHASE_OFF,
        "phase_id" : PHASE_OFF_CONVERSION
    },
    {
        "name" : "Omstilling defensivt",
        "icon" : faLevelDownAlt,
        "phase_category" : PHASE_DEF,
        "phase_id" : PHASE_DEF_CONVERSION
    },
    {
        "name" : "Højt pres",
        "icon" : faThermometerFull,
        "phase_category" : PHASE_DEF,
        "phase_id" : PHASE_DEF_HIGH_PRESSURE
    },
    {
        "name" : "Mellem/lavt pres",
        "icon" : faThermometerHalf,
        "phase_category" : PHASE_DEF,
        "phase_id" : PHASE_DEF_MEDIUM_LOW_PRESSURE
    },
    {
        "name" : "Forsvaring af felt",
        "icon" : faShieldAlt,
        "phase_category" : PHASE_DEF,
        "phase_id" : PHASE_DEF_FIELD_DEFENCE
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
        for (let i = 0; i < phases.length; i++) {
            children.push(<li key={i} className={"nav-item"}>
                <button
                    className={`phase-nav-link ${this.state.selectedPhase === phases[i].phase_id ? " chosen" : ""}`}
                    onClick={() => this.handlePhaseSelection(phases[i].phase_id, phases[i].phase_category)}>
                    <FontAwesomeIcon icon={phases[i].icon} />
                    {phases[i].name}
                </button>
            </li>)
        }
        nav.push(<ul key={0} className={"phase-nav-list"}>{children}</ul>)
        return nav
    }


    render() {
        return (
            <nav className={"phase-nav"}>
                {this.createPhaseNavigation()}
            </nav>
        )
    }
}
