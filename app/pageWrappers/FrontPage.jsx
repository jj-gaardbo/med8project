import React from 'react';
import Logo from "../components/Logo.jsx";
import {Link} from "react-router-dom";

/**
 * This is the Home page file / index
 */
export default class FrontPage extends React.Component {

    /**
     * These two methods is an example of how functionality can be added to an instance of the Button component
     */
    handleButton1Click(){
        alert("Button1 was clicked")
    }

    handleButton2Click(){
        alert("Button2 was clicked")
    }

    render() {
        return (
            <div className="frontpage row">
                <div className="col-lg-12">
                    <Logo />
                    <h1>Spillestilen.</h1>

                    <Link className={"btn btn-lg btn-secondary"} to={"/position"}>
                        Spiller
                    </Link>
                </div>
            </div>
        )
    }
}
