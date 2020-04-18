import pitchBackground from "../data/images/SoccerPitchPortrait.png";
import React from "react";
import Selection from "./Selection.jsx";
import Channels from "./Channels.jsx";
import ZonesDef from "./ZonesDef.jsx";
import ZonesOff from "./ZonesOff.jsx";

export default class Pitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: false,
            channels: false,
            zonesDef: false,
            zonesOff: true
        }
    }

    render() {
        return (
            <div className="pitch_selection pitch">
                <img src={pitchBackground} alt="Pitch" className={"pitch_background"}/>
                {this.state.selection &&
                    <Selection />
                }

                {this.state.channels &&
                    <Channels/>
                }

                {this.state.zonesDef &&
                    <ZonesDef/>
                }

                {this.state.zonesOff &&
                    <ZonesOff/>
                }
            </div>
        )
    }
}
