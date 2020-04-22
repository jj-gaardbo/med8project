import React from 'react';

export default class ButtonModal extends React.Component {

    constructor(props) {
        super(props);

        //Bind the new methods to this current object
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(open){
        this.props.handleClick();
    }

    render() {
        const props = this.props;
        return (
            <button onClick={this.handleClick} className={props.className}>
                {this.props.children}
            </button>
        )
    }
}
