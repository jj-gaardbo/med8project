import React from 'react';
import {NavLink} from "react-router-dom";

/**
 * This is a simple example of a simple subpage
 */
export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.createNavigation = this.createNavigation.bind(this);
    }


    createNavigation(){
        let nav = [];
        let children = [];
        let pages = Object.keys(this.props.children);
        let paths = Object.values(this.props.children);
        for (let i = 0; i < pages.length; i++) {
            children.push(<li key={i} className={"nav-item"}>
                <NavLink exact={i === 0 ? true : false} className={"nav-link"} to={paths[i]}>{pages[i]}</NavLink>
            </li>)

        }
        nav.push(<ul key={0} className={"nav"}>{children}</ul>)
        return nav
    }


    render() {
        return (
            <nav>
                {this.createNavigation()}
            </nav>
        )
    }
}
