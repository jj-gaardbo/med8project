import React from 'react';
import {PHASE_OFF, PHASE_DEF, PHASE_DEF_HIGH_PRESSURE, PHASE_DEF_MEDIUM_LOW_PRESSURE, PHASE_DEF_FIELD_DEFENCE, PHASE_DEF_CONVERSION, PHASE_OFF_PHASE_1, PHASE_OFF_PHASE_2, PHASE_OFF_PHASE_3, PHASE_OFF_CONVERSION} from "./Common.jsx";
import {
    PHASE_DEF_CONVERSION_STRING,
    PHASE_DEF_FIELD_DEFENCE_STRING,
    PHASE_DEF_HIGH_PRESSURE_STRING,
    PHASE_DEF_MEDIUM_LOW_PRESSURE_STRING,
    PHASE_OFF_CONVERSION_STRING,
    PHASE_OFF_PHASE_1_STRING,
    PHASE_OFF_PHASE_2_STRING,
    PHASE_OFF_PHASE_3_STRING
} from "./Common.jsx";
import {parse} from "@fortawesome/fontawesome-svg-core";

export default class PlayerRole{

    data;

    constructor(data) {
        this.data = data;
        this.objectMap = this.objectMap.bind(this);
        this.handleData = this.handleData.bind(this);
        this.buildHtml = this.buildHtml.bind(this);
        this.toHtml = this.toHtml.bind(this);

        this.handleData();
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
        let listDOM = "<ul>";
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

    buildHtml(name, id, phase, object = false){
        let listDOM = "<ul>";
        if(object) {
            let phaseKeys = Object.keys(phase);
            for(let k = 0; k < phaseKeys.length; k++){
                listDOM += "<li>";
                listDOM += "<span key='" + k + "' class='phase_item_" + id + "'>";
                listDOM += "<strong>";
                listDOM += phaseKeys[k];
                listDOM += "</strong>";
                listDOM += "<ul class='phase_sub_list'>";
                this.objectMap(phase[phaseKeys[k]], (v) => {
                    listDOM += "<li>";
                    listDOM += v;
                    listDOM += "</li>";
                })
                listDOM += "</ul>";
                listDOM += "</span>";
                listDOM += "</li>";
            }
        } else {
            for(let k = 0; k < phase.length; k++){
                listDOM += "<li>";
                listDOM += "<span key='" + k + "' class='phase_item_" + id + "'>";
                listDOM += phase[k];
                listDOM += "</span>";
                listDOM += "</li>";
            }
        }
        listDOM += "</ul>";
    }

    handleData(){
        let dataKeys = Object.keys(this.data);
        let dataValues = Object.values(this.data);

        for(let i = 0; i < dataKeys.length; i++) {
            let phase = dataValues[i.toString()];
            let phaseKeys = Object.keys(phase);
            let phaseValues = Object.values(phase);
            for(let j = 0; j < phaseKeys.length; j++){
                switch(parseInt(phaseKeys[j])){
                    case PHASE_DEF_HIGH_PRESSURE:
                        this.buildHtml(PHASE_DEF_HIGH_PRESSURE_STRING, PHASE_DEF_HIGH_PRESSURE ,phaseValues[j]);
                        break;
                    case PHASE_DEF_MEDIUM_LOW_PRESSURE:
                        this.buildHtml(PHASE_DEF_MEDIUM_LOW_PRESSURE_STRING, PHASE_DEF_MEDIUM_LOW_PRESSURE, phaseValues[j]);
                        break;
                    case PHASE_DEF_FIELD_DEFENCE:
                        this.buildHtml(PHASE_DEF_FIELD_DEFENCE_STRING, PHASE_DEF_FIELD_DEFENCE, phaseValues[j]);
                        break;
                    case PHASE_DEF_CONVERSION:
                        this.buildHtml(PHASE_DEF_CONVERSION_STRING, PHASE_DEF_CONVERSION, phaseValues[j]);
                        break;
                    case PHASE_OFF_PHASE_1:
                        this.buildHtml(PHASE_OFF_PHASE_1_STRING, PHASE_OFF_PHASE_1, phaseValues[j]);
                        break;
                    case PHASE_OFF_PHASE_2:
                        this.buildHtml(PHASE_OFF_PHASE_2_STRING, PHASE_OFF_PHASE_2, phaseValues[j]);
                        break;
                    case PHASE_OFF_PHASE_3:
                        this.buildHtml(PHASE_OFF_PHASE_3_STRING, PHASE_OFF_PHASE_3, phaseValues[j]);
                        break;
                    case PHASE_OFF_CONVERSION:
                        this.buildHtml(PHASE_OFF_CONVERSION_STRING, PHASE_OFF_CONVERSION, phaseValues[j], true);
                        break;
                }
            }
        }
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
