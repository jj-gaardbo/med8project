import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const TooltipElement = (props) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <div>
            <div href="#" id={props.target}>{props.element}</div>
            <Tooltip placement="right" isOpen={tooltipOpen} target={props.target} toggle={toggle}>
                {props.tip}
            </Tooltip>
        </div>
    );
}

export default TooltipElement;
