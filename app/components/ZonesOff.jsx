import React from 'react';

export default class ZonesOff extends React.Component {
    render() {
        const phase = this.props.phaseselection;
        return (
            <div {...this.props}>
                <svg version="1.1" id="Layer_6" x="0px" y="0px"
                     width="916px" height="1360px" viewBox="0 0 916 1360" enableBackground="new 0 0 916 1360">
                        <rect className={phase === 16 ? "highlight-zone highlight-off" : ""} x="-1" y="2" opacity="0.3" width="916" height="471"/>
                        <rect className={phase === 14 ? "highlight-zone highlight-off" : ""} x="-1" y="895" opacity="0.3" width="916" height="465"/>
                        <rect className={phase === 15 ? "highlight-zone highlight-off" : ""} x="-1" y="473" opacity="0.3" width="916" height="422"/>
                        <line fill="none" stroke="#FFFFFF" strokeWidth="7" strokeMiterlimit="10" strokeDasharray="12" x1="0" y1="472.5" x2="916" y2="472.5"/>
                        <line fill="none" stroke="#FFFFFF" strokeWidth="8" strokeMiterlimit="10" strokeDasharray="12" x1="0" y1="895" x2="916" y2="895"/>
                        <text transform="matrix(1 0 0 1 389.1953 1048.0723)" fill="#FFFFFF" fontFamily="'HelveticaNeue-Medium'" fontSize="45">Fase 1</text>
                        <text transform="matrix(1 0 0 1 389.1953 660.5918)" fill="#FFFFFF" fontFamily="'HelveticaNeue-Medium'" fontSize="45">Fase 2</text>
                        <text transform="matrix(1 0 0 1 389.1953 339.6079)" fill="#FFFFFF" fontFamily="'HelveticaNeue-Medium'" fontSize="45">Fase 3</text>
                </svg>
            </div>
        )
    }
}
