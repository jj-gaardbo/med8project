import pitchBackground from "../data/images/SoccerPitchPortrait.png";
import React from "react";
import Selection from "./Selection.jsx";

export default class Pitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: true
        }
    }

    render() {
        return (
            <div className="pitch_selection pitch">
                <img src={pitchBackground} alt="Pitch" className={"pitch_background"}/>
                {this.state.selection &&
                    <Selection />
                }
            </div>
        )
    }
}
