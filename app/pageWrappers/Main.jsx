import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import FrontPage from "./FrontPage.jsx";
import SubPage from "./SubPage.jsx";


/**
 * This file handles all the routings between the different pageWrappers
 * It also contains the main navigation
 * Every time a new page is added you need to add it to the navigation and add a new route and define its URL
 */
export default class Main extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <nav>
                        <ul className={"nav"}>
                            <li className={"nav-item"}>
                                <Link className={"nav-link active"} to="/">Home</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link"} to="/subpage">Subpage</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/" exact>
                            <FrontPage/>
                        </Route>
                        <Route path="/subpage">
                            <SubPage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
