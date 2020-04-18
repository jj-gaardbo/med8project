import React from 'react';
import Pitch from "../components/Pitch.jsx";

/**
 * This is a simple example of a simple subpage
 */
export default class Player extends React.Component {
    render() {
        return (
            <div className="player row">
                <div className="col-lg-12">
                    <Pitch/>
                </div>
            </div>
        )
    }
}
