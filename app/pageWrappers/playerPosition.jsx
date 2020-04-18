import React from 'react';
import PitchSelection from "../components/PitchSelection.jsx";

/**
 * This is a simple example of a simple subpage
 */
export default class PlayerPosition extends React.Component {
    render() {
        return (
            <div className="player_position row">
                <div className="col-lg-12">
                    <PitchSelection/>
                </div>
            </div>
        )
    }
}
