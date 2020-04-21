import React from 'react';
import data from '../data/player_roles.json';
import PlayerRole from "./PlayerRole.jsx";
import {PHASE_DEF_HIGH_PRESSURE, PHASE_DEF_MEDIUM_LOW_PRESSURE, PHASE_DEF_FIELD_DEFENCE, PHASE_DEF_CONVERSION, PHASE_OFF_PHASE_1, PHASE_OFF_PHASE_2, PHASE_OFF_PHASE_3, PHASE_OFF_CONVERSION} from "./Common.jsx";

/*
player data template
{"1" : {
      "1" : {
        "10" : [],
        "11" : [],
        "12" : [],
        "13" : []
      },
      "2" : {
        "14" : [],
        "15" : [],
        "16" : [],
        "17" : [
          {
            "Kontra": [
            ],
            "Fastholde/etablere": [
            ]
          }
        ]
      }
}},
* */

export default class DataHandler extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            playerSelection: null,
            phaseCategorySelection: null,
            phaseSelection: null,
            playerData:[],
            playerRole: null
        }

        this.readJson = this.readJson.bind(this);
        this.createPlayerRole = this.createPlayerRole.bind(this);
    }

    update(newState){
        let self = this;
        this.setState({
            playerSelection: newState.playerSelection,
            phaseCategorySelection: newState.phaseCategorySelection,
            phaseSelection: newState.phaseSelection
            }
        , function(){
                self.readJson();
            });
    }

    createPlayerRole(player_data){
        let player = new PlayerRole(player_data);
        this.setState({playerRole: player});
        this.props.handleReturnPlayer(player);
    }

    readJson(){
        let self = this;
        let player_data = null;
        if(this.state.playerSelection){
            data.player_roles.map( (data) => {
                player_data = data[self.state.playerSelection.toString()];
                if(typeof player_data !== "undefined"){
                    self.setState({playerData: player_data});
                    self.createPlayerRole(player_data);
                }
            });
        }
    }

    render() {
        return (
            <span className={"datahandler"}/>
        )
    }
}
