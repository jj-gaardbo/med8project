import React from 'react';
import {PHASE_OFF, PHASE_DEF, PHASE_DEF_HIGH_PRESSURE, PHASE_DEF_MEDIUM_LOW_PRESSURE, PHASE_DEF_FIELD_DEFENCE, PHASE_DEF_CONVERSION, PHASE_OFF_PHASE_1, PHASE_OFF_PHASE_2, PHASE_OFF_PHASE_3, PHASE_OFF_CONVERSION} from "./Common.jsx";
import {getPhaseTitle} from "./Common.jsx";

export default class PlayerRole{

    data;

    constructor(data) {
        this.data = data;
        this.objectMap = this.objectMap.bind(this);
        this.toHtml = this.toHtml.bind(this);
    }

    objectMap(object, mapFn) {
        return Object.keys(object).reduce(function(result, key) {
            result[key] = mapFn(object[key])
            return result
        }, {})
    }

    toHtml(phase_id){
        if(typeof phase_id === "undefined"){return null;}
        let data = this.get(phase_id);

        let listDOM = "<h1>";
        listDOM += getPhaseTitle(phase_id);
        listDOM += "</h1>";
        listDOM += "<ul>";
        if(parseInt(phase_id) === PHASE_OFF_CONVERSION) {
            let phaseKeys = Object.keys(data);
            for(let k = 0; k < phaseKeys.length; k++){
                listDOM += "<li>";
                listDOM += "<span key='" + k + "' class='phase_item_" + phase_id + "'>";
                listDOM += "<strong>";
                listDOM += phaseKeys[k];
                listDOM += "</strong>";
                listDOM += "<ul class='phase_sub_list'>";
                this.objectMap(data[phaseKeys[k]], (v) => {
                    listDOM += "<li>";
                    listDOM += v;
                    listDOM += "</li>";
                })
                listDOM += "</ul>";
                listDOM += "</span>";
                listDOM += "</li>";
            }
        } else {
            for(let k = 0; k < data.length; k++){
                listDOM += "<li>";
                listDOM += "<span key='" + k + "' class='phase_item_" + phase_id + "'>";
                listDOM += data[k];
                listDOM += "</span>";
                listDOM += "</li>";
            }
        }
        listDOM += "</ul>";
        return listDOM;
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
