import React from 'react';

export default class Eval extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.stringToHash(),
            number: parseInt(this.props.number),
            timestamp: this.props.timestamp,
            dateString: this.props.datestring
        }

        this.stringToHash = this.stringToHash.bind(this);
    }

    stringToHash() {
        let string = "Participant";
        let hash = 0;
        if (string.length === 0) return hash;
        for (let i = 0; i < string.length; i++) {
            let char = string.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash;
    }

    render() {
        return (
            <div {...this.props} />
        )
    }
}
