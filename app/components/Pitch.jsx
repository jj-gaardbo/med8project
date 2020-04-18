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
            ]
        }

        this.disableOverlay = this.disableOverlay.bind(this);
        this.toggleOverlay = this.toggleOverlay.bind(this);
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
                    <Selection />
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
