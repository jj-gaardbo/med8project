import React from 'react';
import {PHASE_OFF, PHASE_DEF, PHASE_DEF_HIGH_PRESSURE, PHASE_DEF_MEDIUM_LOW_PRESSURE, PHASE_DEF_FIELD_DEFENCE, PHASE_DEF_CONVERSION, PHASE_OFF_PHASE_1, PHASE_OFF_PHASE_2, PHASE_OFF_PHASE_3, PHASE_OFF_CONVERSION} from "./Common.jsx";

export default class PlayerRole{

    data;

    constructor(data) {
        this.data = data;
    }

    getAll(){
        return this.data;
    }

    get(phase){
        if(!this.data){ return; }

        if(parseInt(phase) === PHASE_DEF_HIGH_PRESSURE ||
            parseInt(phase) === PHASE_DEF_MEDIUM_LOW_PRESSURE ||
            parseInt(phase) === PHASE_DEF_FIELD_DEFENCE ||
            parseInt(phase) === PHASE_DEF_CONVERSION){
            return this.data[PHASE_DEF][phase];
        } else if(parseInt(phase) === PHASE_OFF_PHASE_1 ||
            parseInt(phase) === PHASE_OFF_PHASE_2 ||
            parseInt(phase) === PHASE_OFF_PHASE_3 ||
            parseInt(phase) === PHASE_OFF_CONVERSION) {
            return this.data[PHASE_OFF][phase];
        }
    }

}
