import $ from 'jquery';

export const POS_KEEPER = 1;
export const POS_CENTERBACK = 2;
export const POS_FULLBACK = 3;
export const POS_CENTERMIDFIELDER = 4;
export const POS_MIDFIELDER = 5;
export const POS_STRIKER = 6;

export const PHASE_DEF = 1;
export const PHASE_OFF = 2;

export const PHASE_DEF_HIGH_PRESSURE = 10;
export const PHASE_DEF_MEDIUM_LOW_PRESSURE = 11;
export const PHASE_DEF_FIELD_DEFENCE = 12;
export const PHASE_DEF_CONVERSION = 13;

export const PHASE_OFF_PHASE_1 = 14;
export const PHASE_OFF_PHASE_2 = 15;
export const PHASE_OFF_PHASE_3 = 16;
export const PHASE_OFF_CONVERSION = 17;

export const PHASE_DEF_HIGH_PRESSURE_STRING = "Højt pres";
export const PHASE_DEF_MEDIUM_LOW_PRESSURE_STRING = "Mellem/lavt pres";
export const PHASE_DEF_FIELD_DEFENCE_STRING = "Forsvaring af felt";
export const PHASE_DEF_CONVERSION_STRING = "Omstilling defensivt";

export const PHASE_OFF_PHASE_1_STRING = "Opbygningsspil Fase 1";
export const PHASE_OFF_PHASE_2_STRING = "Opbygningsspil Fase 2";
export const PHASE_OFF_PHASE_3_STRING = "Afslutningsspil Fase 3";
export const PHASE_OFF_CONVERSION_STRING = "Omstilling offensivt";

export function getPhaseTitle(phase_id){
    switch (phase_id) {
        case PHASE_DEF_HIGH_PRESSURE:
            return PHASE_DEF_HIGH_PRESSURE_STRING;
        case PHASE_DEF_MEDIUM_LOW_PRESSURE:
            return PHASE_DEF_MEDIUM_LOW_PRESSURE_STRING;
        case PHASE_DEF_FIELD_DEFENCE:
            return PHASE_DEF_FIELD_DEFENCE_STRING;
        case PHASE_DEF_CONVERSION:
            return PHASE_DEF_CONVERSION_STRING;
        case PHASE_OFF_PHASE_1:
            return PHASE_OFF_PHASE_1_STRING;
        case PHASE_OFF_PHASE_2:
            return PHASE_OFF_PHASE_2_STRING;
        case PHASE_OFF_PHASE_3:
            return PHASE_OFF_PHASE_3_STRING;
        case PHASE_OFF_CONVERSION:
            return PHASE_OFF_CONVERSION_STRING;
        default:
            return "";
    }
}

export function modalOpenCheck(){
    return $('.modal-open').length > 0;
}
