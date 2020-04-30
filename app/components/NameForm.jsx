import React from 'react';

export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.callback(this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={"participant-form"}>
                <div className="form-group">
                    <label htmlFor="number-participant">Deltager nummer</label>
                    <input value={this.state.value} onChange={this.handleChange} type="number" className="form-control" id="number-participant" aria-describedby="emailHelp" placeholder="Angiv nummer"/>
                </div>
                <button className="btn btn-primary" type="submit">Ok</button>
            </form>
        );
    }
}
