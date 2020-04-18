import pitchBackground from "../data/images/SoccerPitchPortrait.png";
import React from "react";
import Selection from "./Selection.jsx";
import Channels from "./Channels.jsx";
import ZonesDef from "./ZonesDef.jsx";
import ZonesOff from "./ZonesOff.jsx";
import Button from "./Button.jsx";

export default class Pitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index:0,
            overlays: [
                false,
                false,
                false,
                false
            ],
            chosenPosition: null
        }

        this.disableOverlay = this.disableOverlay.bind(this);
        this.toggleOverlay = this.toggleOverlay.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(select){
        if(select === this.state.chosenPosition){
            this.setState({chosenPosition: null});
        } else {
            this.setState({chosenPosition: select});
        }
    }

    disableOverlay(){
        this.setState({overlays:[false,false,false,false]});
    }

    toggleOverlay(){
        this.disableOverlay();

        if(this.state.index < this.state.overlays.length){
            this.setState({index: this.state.index+1});
        }
        else {
            this.setState({index: 0});
        }

        let temp = [false,false,false,false];
        for(let i = 0; i < this.state.overlays.length; i++){
            temp[this.state.index] = true;
            this.setState({overlays:temp})
        }
    }

    render() {
        return (
            <div className="pitch_selection pitch">
                <Button className={"pull-up btn btn-primary"} handleClick={this.toggleOverlay}>Toggle</Button>
                <img src={pitchBackground} alt="Pitch" className={"pitch_background"}/>
                {this.state.overlays[0] &&
                    <Selection onSelect={this.handleSelection} highlight={this.state.chosenPosition} />
                }

                {this.state.overlays[1] &&
                    <Channels/>
                }

                {this.state.overlays[2] &&
                    <ZonesDef/>
                }

                {this.state.overlays[3] &&
                    <ZonesOff/>
                }
            </div>
        )
    }
}
