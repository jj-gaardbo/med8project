'use strict';

import React, {Component} from 'react';
import $ from 'jquery';

class VideoElement extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: props.videoURL
        }

        this.play = this.play.bind(this);
    }

    play(){
        //$("#"+this.props.id).play();
    }

    componentDidMount() {
        this.play();
    }

    render () {
        return (
            <video id={this.props.id} muted controls={true} className="example-video">
                <source src={this.props.videoURL.default} type="video/mp4" />
                <source src={this.props.videoURL.default} type="video/ogg" />
                <source src={this.props.videoURL.default} type="video/mov" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default VideoElement;
