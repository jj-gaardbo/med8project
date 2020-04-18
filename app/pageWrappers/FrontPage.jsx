import React from 'react';
import Logo from "../components/Logo.jsx";
import {Link} from "react-router-dom";

/**
 * This is the Home page file / index
 */
export default class FrontPage extends React.Component {
    render() {
        return (
            <div className="frontpage row">
                <div className="col-lg-12">
                    <Logo />
                    <h1>Spillestilen.</h1>

                    <Link className={"btn btn-lg btn-secondary"} to={"/player"}>
                        Spiller
                    </Link>
                </div>
            </div>
        )
    }
}
