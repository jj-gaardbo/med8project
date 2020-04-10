import React from 'react';
import Logo from "../components/Logo.jsx";


/**
 * This is a simple example of a simple subpage
 */
export default class SubPage extends React.Component {
    render() {
        return (
            <div className="subpage row">
                <div className="col-lg-12">
                    <Logo />
                    <h1>This is a sub page.</h1>
                </div>
            </div>
        )
    }
}
