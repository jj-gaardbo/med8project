import React from 'react';

export default class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={"header-component header-player"}>
                {this.props.children}
            </div>
        )
    }
}
