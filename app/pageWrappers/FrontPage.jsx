'use strict';
import React from 'react';
import Logo from "../components/Logo.jsx";
import {Link} from "react-router-dom";
import NameForm from "../components/NameForm.jsx";

/**
 * This is the Home page file / index
 */
export default class FrontPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            timestamp: 0,
            dateString: ""
        }

        this.handleName = this.handleName.bind(this);
    }

    componentDidMount() {
        let number = localStorage.getItem('number')
        let timestamp = localStorage.getItem('timestamp')
        let dateString = localStorage.getItem('dateString')

        if(number !== null && timestamp !== null && dateString !== null){
            this.setState({number: number, timestamp: timestamp, dateString: dateString});
        }
    }

    handleName(value){
        let date = new Date();
        let timestamp = Math.floor(date.getTime() / 1000 );
        date.toISOString(); // EST would be 6 hour diff from GMT
        localStorage.setItem('number', value);
        localStorage.setItem('timestamp', timestamp);
        localStorage.setItem('dateString', date);
        this.setState({number: value, timestamp: timestamp, dateString: date});
    }

    render() {
        return (
            <div className="frontpage row">
                <div className="col-lg-12">
                    <Logo />
                    <h1>Spillestilen.</h1>

                    {this.state.timestamp === 0 ? (
                        <NameForm callback={this.handleName}/>
                    ) : (
                        <Link className={"btn btn-lg btn-secondary"} to={{
                            pathname: "/player",
                            state: {
                                number: this.state.number,
                                timestamp: this.state.timestamp,
                                dateString: this.state.dateString
                            }
                        }}>
                            Start
                        </Link>
                    )}
                </div>
            </div>
        )
    }
}
