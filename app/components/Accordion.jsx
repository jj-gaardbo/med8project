import React from 'react';

export default class AccordionComponent extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            isOpen: -1
        }
    }

    render(){
        return(
            <div className={this.props.className}>
                <div className="accordion" id={this.props.id}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
