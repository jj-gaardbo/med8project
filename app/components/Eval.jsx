import React from 'react';
import ModalElement from "./Modal.jsx";
import {getPlayerPosString} from "./Common.jsx";
import $ from 'jquery';

export default class Eval extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.stringToHash(),
            number: parseInt(this.props.number),
            timestamp: this.props.timestamp,
            dateString: this.props.datestring,
            chosenPosition: null,
            now: null,
            minutesPassed: null,
            lastMouseClick: 0,
            isOpen: false
        }

        this.stringToHash = this.stringToHash.bind(this);
        this.isOpen = this.isOpen.bind(this);
        this.timediff = this.timediff.bind(this);
        this.getBody = this.getBody.bind(this);
    }

    getBody(){
        let pos = "Ingen position valgt"
        if(this.props.chosenpos !== null){
            pos = getPlayerPosString(this.props.chosenpos)
        }
        let body = "";
        body += "<table>";
        body += "<tr>";
        body += "<th>ID</th>";
        body += "<th>Nummer</th>";
        body += "<th>Timestamp</th>";
        body += "<th>Tid i alt</th>";
        body += "<th>Starttid</th>";
        body += "<th>Position</th>";
        body += "<th>Clicks</th>";
        body += "</tr>";

        body += "<tr>";
        body += "<td>"+this.state.id+"</td>";
        body += "<td>"+this.state.number+"</td>";
        body += "<td>"+this.state.timestamp+"</td>";
        body += "<td>"+this.state.minutesPassed+"</td>";
        body += "<td>"+this.state.dateString+"</td>";
        body += "<td>"+pos+"</td>";
        body += "<td>"+this.props.mouseclicks+" ("+ localStorage.getItem('clicksCount') +")</td>";
        body += "</tr>";
        body += "</table>";
        return body;
    }

    stringToHash() {
        let string = "p";
        let hash = 0;
        if (string.length === 0) return hash;
        for (let i = 0; i < string.length; i++) {
            let char = string.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return "p"+hash;
    }

    timediff(timestamp1, timestamp2) {
        let start = new Date(timestamp1*1000);
        let end = new Date(timestamp2*1000);
        let dif = (end - start);
        dif = Math.round((dif/1000)/60);

        let hours = Math.floor(dif / 60);
        let minutes = dif % 60;
        return hours + ":" + minutes;
    }

    isOpen(){
        let isOpen = this.refs.summarymodal.isOpen();
        if(isOpen){
            let date = new Date();
            let timestamp = Math.floor(date.getTime() / 1000);
            this.setState({now:timestamp, minutesPassed:this.timediff(this.state.timestamp, timestamp), lastMouseClick:this.props.mouseclicks, isOpen:isOpen});
            $('body').addClass("stop-count");
            if(typeof localStorage.getItem('clicksCount') === 'undefined'){
                localStorage.setItem('clicksCount', this.props.mouseclicks);
            } else if (localStorage.getItem('clicksCount') < this.props.mouseclicks){
                localStorage.setItem('clicksCount', this.props.mouseclicks);
            }
        } else {
            $('body').removeClass("stop-count");
        }
    }

    render() {
        return (
            <div className={"eval"} {...this.props}>
                <ModalElement callback={this.isOpen} ref={'summarymodal'} icon={'summary'} title={"Opsummering"} className={'eval-modal'}>
                    <table className={"table"}>
                        <tbody>
                        <tr>
                            <td>Number:</td><td>{this.state.number}</td>
                        </tr>
                        <tr>
                            <td>Starttid:</td><td>{this.state.timestamp}</td>
                        </tr>

                        {this.props.minutesPassed !== null &&
                        <tr>
                            <td>Tid gået:</td>
                            <td>{this.state.minutesPassed} min</td>
                        </tr>
                        }

                        <tr>
                            <td>Date:</td><td>{this.state.dateString}</td>
                        </tr>

                        {this.props.chosenpos !== null &&
                            <tr>
                                <td>Position({this.props.chosenpos}):</td><td>{getPlayerPosString(this.props.chosenpos)}</td>
                            </tr>
                        }
                        <tr>
                            <td>Clicks: </td><td>{this.props.mouseclicks} ({localStorage.getItem('clicksCount')})</td>
                        </tr>
                        </tbody>
                    </table>

                    {this.state.isOpen &&
                        <a className={'btn btn-primary'} href={"mailto:Med803kbh2020@create.aau.dk?subject=Deltager "+this.state.id+ " - Nummer:" +this.state.number+ "&body="+this.getBody()}>
                            Send resultat
                        </a>
                    }

                    {this.state.isOpen &&
                        <a className={'btn btn-warning'} href={"https://forms.gle/EuSQbg6g9LJBAtDD7"} target={'_blank'}>
                            Spørgeskema
                        </a>
                    }
                </ModalElement>
            </div>
        )
    }
}
