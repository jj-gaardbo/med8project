import React from 'react';

export default class Button extends React.Component {

    constructor(props) {
        super(props);

        //Bind the new methods to this current object
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.handleClick();
    }

    render() {
        const props = this.props;
        return (
            <button onClick={this.handleClick} {...props}>
                {this.props.children}
            </button>
        )
    }
}
