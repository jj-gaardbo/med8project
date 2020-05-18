import React from 'react';
import {PHASE_DEF_STANDARDS, PHASE_OFF_STANDARDS, PHASE_OFF, PHASE_DEF, PHASE_DEF_HIGH_PRESSURE, PHASE_DEF_MEDIUM_LOW_PRESSURE, PHASE_DEF_FIELD_DEFENCE, PHASE_DEF_CONVERSION, PHASE_OFF_PHASE_1, PHASE_OFF_PHASE_2, PHASE_OFF_PHASE_3, PHASE_OFF_CONVERSION} from "./Common.jsx";
import {getPhaseTitle, getPlayerPosString} from "./Common.jsx";
import {ListGroup, ListGroupItem} from "reactstrap";
import VideoElement from "./Video.jsx";
import ModalElement from "./Modal.jsx";
import IndgaaIGennembrudskombinationer from "../data/video/Afslutningsspil/Angriber/IndgåIGennembrudskombinationer.mp4"
import KommeIAfslutningspositioner from "../data/video/Afslutningsspil/Angriber/KommeIAfslutningspositioner.mp4"
import KommeIAfslutningspositioner2 from "../data/video/Afslutningsspil/Angriber/KommeIAfslutningspositioner2.mp4"
import ModstanderByggerOpMedTre from "../data/video/Def organisation/MiddelPres/Kant/ModstanderByggerOpMedTre.mp4"
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

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
        }, [])
    }

    getVideo(name, phase_id, index, idx){

        let url = "";
        switch (name) {
            case 'IndgåIGennembrudskombinationer':
                url = IndgaaIGennembrudskombinationer;
                break;
            case 'KommeIAfslutningspositioner':
                url = KommeIAfslutningspositioner;
                break;
            case 'KommeIAfslutningspositioner2':
                url = KommeIAfslutningspositioner2;
                break;
            case 'ModstanderByggerOpMedTre':
                url = ModstanderByggerOpMedTre;
                break;
        }

        return(<VideoElement
            id={"video-player-role-"+phase_id+"-"+index+"-"+idx}
            videoPlaying={false}
            videoURL={{'default':url}}
        />)
    }

    toHtml(phase_id){
        if(typeof phase_id === "undefined"){return null;}

        if(parseInt(phase_id) === PHASE_DEF_STANDARDS || parseInt(phase_id) === PHASE_OFF_STANDARDS){ return null; }

        let self = this;
        let data = this.get(phase_id);

        let idx = 0;
        let idx2 = 0;
        let DOM = (
            <ListGroup>
                {parseInt(phase_id) === PHASE_OFF_CONVERSION ? (
                    Object.keys(data).map((key) =>
                        <ListGroupItem key={idx}>
                            <span key={idx} className={'phase_item_'+phase_id}>
                                <strong>{key}</strong>
                                <ListGroup className={'phase_sub_list'}>
                                    {self.objectMap(data[Object.keys(data)[idx++]], (v) =>
                                        <ListGroupItem key={idx2++}>
                                            {v}
                                        </ListGroupItem>
                                    )}
                                </ListGroup>
                            </span>
                        </ListGroupItem>
                    )
                ) : (
                    data.map((el,index)=>
                        <ListGroupItem key={index}>
                            {typeof el === 'object' ? (
                                <span key={idx} className={`has-btn phase_item_${phase_id}${el.video.length > 1 ? ' multi':''}`}>
                                    <p>{el.str}</p>
                                    {el.video.map((str, mIndex) => (
                                        <div>
                                            {!isMobile ? (
                                                <ModalElement key={mIndex} className={phase_id > 13 ? 'theme-2' : 'theme-1'} theme={phase_id > 13 ? 'off' : 'def'} icon={"play"} title={el.str}>
                                                    {self.getVideo(str, phase_id, index, idx)}
                                                </ModalElement>
                                            ) : (
                                                <div>
                                                    {self.getVideo(str, phase_id, index, idx)}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </span>
                            ) : (
                                <span key={idx} className={'phase_item_'+phase_id}>
                                    {el}
                                </span>
                            )}
                        </ListGroupItem>
                    )
                )}
            </ListGroup>
        );

        return DOM;
    }

    get(phase){
        if(!this.data){ return; }

        if(parseInt(phase) === PHASE_DEF_STANDARDS || parseInt(phase) === PHASE_OFF_STANDARDS){ return; }

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
