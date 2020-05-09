import React from 'react';
import $ from 'jquery';

export default class AccordionCardComponent extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        $('.card-header').removeClass('active-acc')
        let collapse = $('#'+this.props.parentId+'-c'+this.props.index);
        let header = $('#'+this.props.parentId+'-h'+this.props.index);
        if(collapse.attr('aria-expanded') === 'true'){
            header.addClass('active-acc')
        }
    }

    render(){
        return(
            <div className={`card ${this.props.className ? this.props.className : ""}`}>
                <div className="card-header" id={`${this.props.parentId}-h${this.props.index}`}>
                    <h2 className={'mb-0'}>
                        <button
                            type="button"
                            onClick={this.handleClick}
                            className="btn btn-link"
                            data-toggle="collapse"
                            data-target={`#${this.props.parentId}-c${this.props.index}`}>
                            {this.props.header}
                        </button>
                    </h2>
                </div>
                <div
                    className="collapse"
                    id={`${this.props.parentId}-c${this.props.index}`}
                    aria-labelledby={`${this.props.parentId}-h${this.props.index}`}
                    data-parent={`#${this.props.parentId}`}
                    aria-expanded={false}>
                    <div className="card-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
