import React from 'react';
import $ from 'jquery';
import {
    HashRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import FrontPage from "./FrontPage.jsx";
import Player from "./Player.jsx";
import Navigation from "../components/Navigation.jsx";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

/**
 * This file handles all the routings between the different pageWrappers
 * It also contains the main navigation
 * Every time a new page is added you need to add it to the pages array and add a new route and define its URL
 */
const pages = {
    "Home":"/",
    "Player":"/player"
};
export default class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mouseclicks: 0
        }
    }

    componentDidMount() {
        let self = this;
        $('body').on('click', function(){
            if(!$(this).hasClass('stop-count')){
                let clicks = self.state.mouseclicks+1;
                self.setState({mouseclicks:clicks});
            }
        });

        if(isMobile){
            $('body').addClass('mobile-view')
        }

    }

    render() {
        return (
            <Router>
                <div className="container-fluid">
{/*                    <Navigation>
                        {pages}
                    </Navigation>*/}

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path={pages.Home} exact>
                            <FrontPage/>
                        </Route>
                        {/*<Route path={pages.Player}>
                            <Player/>
                        </Route>*/}

                        <Route path={pages.Player} render={(props) => <Player mouseclicks={this.state.mouseclicks} {...props} />} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
