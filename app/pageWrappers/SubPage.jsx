import React from 'react';
import Logo from "../components/Logo.jsx";


/**
 * This is a simple example of a simple subpage
 */
export default class SubPage extends React.Component {
    render() {
        return (
            <header className="subpage">
                <Logo />
                <h1>This is a sub page.</h1>
            </header>
        )
    }
}
