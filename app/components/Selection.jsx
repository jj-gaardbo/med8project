import React from 'react';
import {Link} from "react-router-dom";
import {POS_KEEPER, POS_CENTERBACK, POS_FULLBACK, POS_CENTERMIDFIELDER, POS_MIDFIELDER, POS_STRIKER} from "./Common.jsx";

export default class Selection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isKeeperHovered: false,
            isCenterBackHovered: false,
            isFullBackHovered: false,
            isCenterMidFielderHovered: false,
            isMidFielderHovedered: false,
            isStrikerHovered: false
        }

        //Bind the new methods to this current object
        this.handleClick = this.handleClick.bind(this);
        this.handleKeeperhover = this.handleKeeperhover.bind(this);
        this.handleKeeperMouseLeave = this.handleKeeperMouseLeave.bind(this)
        this.handleCenterBackhover = this.handleCenterBackhover.bind(this);
        this.handleCenterBackMouseLeave = this.handleCenterBackMouseLeave.bind(this)
        this.handleFullBackhover = this.handleFullBackhover.bind(this);
        this.handleFullBackMouseLeave = this.handleFullBackMouseLeave.bind(this)
        this.handleCenterMidFielderhover = this.handleCenterMidFielderhover.bind(this);
        this.handleCenterMidFielderMouseLeave = this.handleCenterMidFielderMouseLeave.bind(this)
        this.handleMidFielderhover = this.handleMidFielderhover.bind(this);
        this.handleMidFielderMouseLeave = this.handleMidFielderMouseLeave.bind(this)
        this.handleStrikerhover = this.handleStrikerhover.bind(this);
        this.handleStrikerMouseLeave = this.handleStrikerMouseLeave.bind(this)
    }

    handleKeeperhover(){
        this.setState({isKeeperHovered:true})
    }

    handleKeeperMouseLeave(){
        this.setState({isKeeperHovered:false})
    }

    handleCenterBackhover(){
        this.setState({isCenterBackHovered:true})
    }

    handleCenterBackMouseLeave(){
        this.setState({isCenterBackHovered:false})
    }

    handleFullBackhover(){
        this.setState({isFullBackHovered:true})
    }

    handleFullBackMouseLeave(){
        this.setState({isFullBackHovered:false})
    }

    handleCenterMidFielderhover(){
        this.setState({isCenterMidFielderHovered:true})
    }

    handleCenterMidFielderMouseLeave(){
        this.setState({isCenterMidFielderHovered:false})
    }

    handleMidFielderhover(){
        this.setState({isMidFielderHovered:true})
    }

    handleMidFielderMouseLeave(){
        this.setState({isMidFielderHovered:false})
    }

    handleStrikerhover(){
        this.setState({isStrikerHovered:true})
    }

    handleStrikerMouseLeave(){
        this.setState({isStrikerHovered:false})
    }


    handleClick(){
        this.props.handleClick();
    }

    render() {
        return (

            <svg version="1.1" id="Layer_3" x="0px" y="0px"
                 width="916px" height="1360px" viewBox="0 0 916 1360" enableBackground="new 0 0 916 1360">
                <Link onClick={() => this.props.onSelect(POS_KEEPER)} className={`keeper playerPos${this.state.isKeeperHovered ? " hovered" : ""}${this.props.highlight === POS_KEEPER ? " highlight" : ""}`} to={'#'} onMouseEnter={() => this.handleKeeperhover()} onMouseLeave={() => this.handleKeeperMouseLeave()}>
                    <g id="k">
                        <circle fill="#00189A" cx="451.407" cy="1192.848" r="68.182"/>
                        <g>
                            <g>
                                <g>
                                    <path fill="#F5F7FA" d="M497.05,1180c-0.021-0.04-0.05-0.07-0.079-0.1h0.01C497.01,1179.93,497.029,1179.96,497.05,1180z"/>
                                    <path fill="#1AB4D0" d="M463,1159h-32.92c-2.06,0-3.85,0.62-5.3,2.08l-15.61,15.5l-3.32,3.32c-0.251,0.232-0.252,0.646,0,0.879
					l13.3,13.311c0.23,0.23,0.58,0.25,0.83,0.061l3.79-2.961c0.829-0.828,2.25-0.689,2.911,0.279
					c0.486,0.713,0.319,1.744,0.319,2.566c0,1.702,0,3.404,0,5.107c0,4.039,0,8.078,0,12.118c0,5.243,0,10.487,0,15.731
					c0,0.002,0,0.005,0,0.008h49c0-5.084,0-10.168,0-15.251c0-4.052,0-8.104,0-12.155c0-1.73,0-3.463,0-5.193
					c0-0.713-0.068-1.465,0.017-2.174c0.155-1.313,1.672-2.068,2.772-1.248c0.08,0.07,0.16,0.141,0.24,0.211l3.801,2.961
					c0.248,0.187,0.605,0.174,0.82-0.061l13.32-13.311c0.204-0.204,0.239-0.539,0.079-0.779c-0.021-0.04-0.05-0.07-0.079-0.1
					l-3.32-3.32l-15.621-15.5c-1.459-1.46-3.25-2.08-5.299-2.08H463 M462.52,1161.18c-1.668,4.662-5.659,10.03-11.12,10.03
					c-5.462,0-9.592-5.342-11.27-10.03l-0.06-0.18h22.51L462.52,1161.18z"/>
                                    <path fill="#F5F7FA" d="M463,1158.779V1159h-0.01C463,1158.93,463,1158.85,463,1158.779z"/>
                                    <polygon fill="#F5F7FA" points="463.029,1158.79 463,1158.779 463,1158.77 				"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </Link>

                <Link onClick={() => this.props.onSelect(POS_CENTERBACK)} className={`center-back playerPos${this.state.isCenterBackHovered ? " hovered" : ""}${this.props.highlight === POS_CENTERBACK ? " highlight" : ""}`} to={'#'} onMouseEnter={() => this.handleCenterBackhover()} onMouseLeave={() => this.handleCenterBackMouseLeave()}>
                    <g id="cb_1_">
                        <circle fill="#00189A" cx="567.5" cy="895.848" r="68.182"/>
                        <g>
                            <g>
                                <g>
                                    <path fill="#F5F7FA" d="M613.143,883c-0.021-0.04-0.05-0.07-0.079-0.1h0.01C613.103,882.93,613.122,882.96,613.143,883z"/>
                                    <path fill="#F5F7FA" d="M579,862h-32.827c-2.061,0-3.85,0.62-5.301,2.08l-15.609,15.5l-3.32,3.32
					c-0.251,0.232-0.252,0.646,0,0.879l13.301,13.311c0.229,0.23,0.58,0.25,0.83,0.061l3.789-2.961
					c0.83-0.828,2.204-0.689,2.866,0.279c0.484,0.713,0.271,1.744,0.271,2.566c0,1.702,0,3.404,0,5.107c0,4.039,0,8.078,0,12.118
					c0,5.243,0,10.487,0,15.731c0,0.002,0,0.005,0,0.008h49c0-5.084,0-10.168,0-15.251c0-4.052,0-8.104,0-12.155
					c0-1.73,0-3.463,0-5.193c0-0.713-0.021-1.465,0.063-2.174c0.156-1.313,1.695-2.068,2.796-1.248
					c0.08,0.07,0.172,0.141,0.252,0.211l3.807,2.961c0.248,0.187,0.608,0.174,0.823-0.061l13.322-13.311
					c0.203-0.204,0.239-0.539,0.079-0.779c-0.021-0.04-0.049-0.07-0.078-0.1l-3.32-3.32l-15.621-15.5
					c-1.459-1.46-3.25-2.08-5.299-2.08H579 M578.612,864.18c-1.668,4.662-5.658,10.03-11.119,10.03
					c-5.463,0-9.592-5.342-11.271-10.03l-0.06-0.18h22.51L578.612,864.18z"/>
                                    <path fill="#F5F7FA" d="M579.093,861.779V862h-0.01C579.093,861.93,579.093,861.85,579.093,861.779z"/>
                                    <polygon fill="#F5F7FA" points="579.122,861.79 579.093,861.779 579.093,861.77 				"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </Link>

                <Link onClick={() => this.props.onSelect(POS_CENTERBACK)} className={`center-back playerPos${this.state.isCenterBackHovered ? " hovered" : ""}${this.props.highlight === POS_CENTERBACK ? " highlight" : ""}`} to={'#'} onMouseEnter={() => this.handleCenterBackhover()} onMouseLeave={() => this.handleCenterBackMouseLeave()}>
                    <g id="cb">
                        <circle fill="#00189A" cx="348.5" cy="895.848" r="68.182"/>
                        <g>
                            <g>
                                <g>
                                    <path fill="#F5F7FA" d="M394.143,883c-0.021-0.04-0.05-0.07-0.079-0.1h0.01C394.103,882.93,394.122,882.96,394.143,883z"/>
                                    <path fill="#F5F7FA" d="M360,862h-32.827c-2.061,0-3.85,0.62-5.301,2.08l-15.609,15.5l-3.32,3.32
                        c-0.251,0.232-0.252,0.646,0,0.879l13.301,13.311c0.229,0.23,0.58,0.25,0.83,0.061l3.789-2.961
                        c0.83-0.828,2.205-0.689,2.866,0.279c0.485,0.713,0.272,1.744,0.272,2.566c0,1.702,0,3.404,0,5.107c0,4.039,0,8.078,0,12.118
                        c0,5.243,0,10.487,0,15.731c0,0.002,0,0.005,0,0.008h49c0-5.084,0-10.168,0-15.251c0-4.052,0-8.104,0-12.155
                        c0-1.73,0-3.463,0-5.193c0-0.713-0.022-1.465,0.063-2.174c0.155-1.313,1.695-2.068,2.795-1.248
                        c0.08,0.07,0.172,0.141,0.252,0.211l3.807,2.961c0.248,0.187,0.608,0.174,0.823-0.061l13.322-13.311
                        c0.204-0.204,0.24-0.539,0.08-0.779c-0.021-0.04-0.049-0.07-0.079-0.1l-3.32-3.32l-15.621-15.5
                        c-1.459-1.46-3.25-2.08-5.299-2.08H360 M359.612,864.18c-1.668,4.662-5.658,10.03-11.119,10.03
                        c-5.463,0-9.592-5.342-11.271-10.03l-0.06-0.18h22.51L359.612,864.18z"/>
                                    <path fill="#F5F7FA" d="M360.093,861.779V862h-0.01C360.093,861.93,360.093,861.85,360.093,861.779z"/>
                                    <polygon fill="#F5F7FA" points="360.122,861.79 360.093,861.779 360.093,861.77 				"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </Link>

                <Link onClick={() => this.props.onSelect(POS_FULLBACK)} className={`full-back playerPos${this.state.isFullBackHovered ? " hovered" : ""}${this.props.highlight === POS_FULLBACK ? " highlight" : ""}`} to={'#'} onMouseEnter={() => this.handleFullBackhover()} onMouseLeave={() => this.handleFullBackMouseLeave()}>
                    <g id="fb_1_">
                        <circle fill="#00189A" cx="786.5" cy="895.848" r="68.182"/>
                        <g>
                            <g>
                                <g>
                                    <path fill="#F5F7FA" d="M832.143,883c-0.021-0.04-0.05-0.07-0.079-0.1h0.01C832.103,882.93,832.122,882.96,832.143,883z"/>
                                    <path fill="#F5F7FA" d="M798,862h-32.827c-2.061,0-3.85,0.62-5.301,2.08l-15.609,15.5l-3.32,3.32
					c-0.251,0.232-0.252,0.646,0,0.879l13.301,13.311c0.229,0.23,0.58,0.25,0.83,0.061l3.789-2.961
					c0.83-0.828,2.204-0.689,2.866,0.279c0.484,0.713,0.271,1.744,0.271,2.566c0,1.702,0,3.404,0,5.107c0,4.039,0,8.078,0,12.118
					c0,5.243,0,10.487,0,15.731c0,0.002,0,0.005,0,0.008h49c0-5.084,0-10.168,0-15.251c0-4.052,0-8.104,0-12.155
					c0-1.73,0-3.463,0-5.193c0-0.713-0.021-1.465,0.063-2.174c0.156-1.313,1.695-2.068,2.796-1.248
					c0.08,0.07,0.172,0.141,0.252,0.211l3.807,2.961c0.248,0.187,0.608,0.174,0.823-0.061l13.322-13.311
					c0.203-0.204,0.239-0.539,0.079-0.779c-0.021-0.04-0.049-0.07-0.078-0.1l-3.32-3.32l-15.621-15.5
					c-1.459-1.46-3.25-2.08-5.299-2.08H798 M797.612,864.18c-1.668,4.662-5.658,10.03-11.119,10.03
					c-5.463,0-9.592-5.342-11.271-10.03l-0.06-0.18h22.51L797.612,864.18z"/>
                                    <path fill="#F5F7FA" d="M798.093,861.779V862h-0.01C798.093,861.93,798.093,861.85,798.093,861.779z"/>
                                    <polygon fill="#F5F7FA" points="798.122,861.79 798.093,861.779 798.093,861.77 				"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </Link>

                <Link onClick={() => this.props.onSelect(POS_FULLBACK)} className={`full-back playerPos${this.state.isFullBackHovered ? " hovered" : ""}${this.props.highlight === POS_FULLBACK ? " highlight" : ""}`} to={'#'} onMouseEnter={() => this.handleFullBackhover()} onMouseLeave={() => this.handleFullBackMouseLeave()}>
                    <g id="fb">
                        <circle fill="#00189A" cx="129.5" cy="895.848" r="68.182"/>
                        <g>
                            <g>
                                <g>
                                    <path fill="#F5F7FA" d="M175.143,883c-0.021-0.04-0.05-0.07-0.079-0.1h0.01C175.103,882.93,175.122,882.96,175.143,883z"/>
                                    <path fill="#F5F7FA" d="M141,862h-32.827c-2.061,0-3.85,0.62-5.301,2.08l-15.609,15.5l-3.32,3.32
					c-0.251,0.232-0.252,0.646,0,0.879l13.301,13.311c0.229,0.23,0.58,0.25,0.83,0.061l3.789-2.961
					c0.83-0.828,2.205-0.689,2.866,0.279c0.485,0.713,0.272,1.744,0.272,2.566c0,1.702,0,3.404,0,5.107c0,4.039,0,8.078,0,12.118
					c0,5.243,0,10.487,0,15.731c0,0.002,0,0.005,0,0.008h49c0-5.084,0-10.168,0-15.251c0-4.052,0-8.104,0-12.155
					c0-1.73,0-3.463,0-5.193c0-0.713-0.022-1.465,0.063-2.174c0.155-1.313,1.695-2.068,2.795-1.248
					c0.08,0.07,0.172,0.141,0.252,0.211l3.807,2.961c0.248,0.187,0.608,0.174,0.823-0.061l13.322-13.311
					c0.204-0.204,0.24-0.539,0.08-0.779c-0.021-0.04-0.049-0.07-0.079-0.1l-3.32-3.32l-15.621-15.5
					c-1.459-1.46-3.25-2.08-5.299-2.08H141 M140.612,864.18c-1.668,4.662-5.658,10.03-11.119,10.03
					c-5.463,0-9.592-5.342-11.271-10.03l-0.06-0.18h22.51L140.612,864.18z"/>
                                    <path fill="#F5F7FA" d="M141.093,861.779V862h-0.01C141.093,861.93,141.093,861.85,141.093,861.779z"/>
                                    <polygon fill="#F5F7FA" points="141.122,861.79 141.093,861.779 141.093,861.77 				"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </Link>

                <Link onClick={() => this.props.onSelect(POS_CENTERMIDFIELDER)} className={`center-midfielder playerPos${this.state.isCenterMidFielderHovered ? " hovered" : ""}${this.props.highlight === POS_CENTERMIDFIELDER ? " highlight" : ""}`} to={'#'} onMouseEnter={() => this.handleCenterMidFielderhover()} onMouseLeave={() => this.handleCenterMidFielderMouseLeave()}>
                    <g id="cmf_1_">
                        <circle fill="#00189A" cx="567.5" cy="678.848" r="68.182"/>
                        <g>
                            <g>
                                <g>
                                    <path fill="#F5F7FA" d="M613.143,666c-0.021-0.04-0.05-0.07-0.079-0.1h0.01C613.103,665.93,613.122,665.96,613.143,666z"/>
                                    <path fill="#F5F7FA" d="M579,645h-32.827c-2.061,0-3.85,0.62-5.301,2.08l-15.609,15.5l-3.32,3.32
					c-0.251,0.232-0.252,0.646,0,0.879l13.301,13.311c0.229,0.23,0.58,0.25,0.83,0.061l3.789-2.961
					c0.83-0.828,2.204-0.689,2.866,0.279c0.484,0.713,0.271,1.744,0.271,2.566c0,1.702,0,3.404,0,5.107c0,4.039,0,8.078,0,12.118
					c0,5.243,0,10.487,0,15.731c0,0.002,0,0.005,0,0.008h49c0-5.084,0-10.168,0-15.251c0-4.052,0-8.104,0-12.155
					c0-1.73,0-3.463,0-5.193c0-0.713-0.021-1.465,0.063-2.174c0.156-1.313,1.695-2.068,2.796-1.248
					c0.08,0.07,0.172,0.141,0.252,0.211l3.807,2.961c0.248,0.187,0.608,0.174,0.823-0.061l13.322-13.311
					c0.203-0.204,0.239-0.539,0.079-0.779c-0.021-0.04-0.049-0.07-0.078-0.1l-3.32-3.32l-15.621-15.5
					c-1.459-1.46-3.25-2.08-5.299-2.08H579 M578.612,647.18c-1.668,4.662-5.658,10.03-11.119,10.03
					c-5.463,0-9.592-5.342-11.271-10.03l-0.06-0.18h22.51L578.612,647.18z"/>
                                    <path fill="#F5F7FA" d="M579.093,644.78V645h-0.01C579.093,644.93,579.093,644.85,579.093,644.78z"/>
                                    <polygon fill="#F5F7FA" points="579.122,644.79 579.093,644.78 579.093,644.77 				"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </Link>

                <Link onClick={() => this.props.onSelect(POS_CENTERMIDFIELDER)} className={`center-midfielder playerPos${this.state.isCenterMidFielderHovered ? " hovered" : ""}${this.props.highlight === POS_CENTERMIDFIELDER ? " highlight" : ""}`} to={'#'} onMouseEnter={() => this.handleCenterMidFielderhover()} onMouseLeave={() => this.handleCenterMidFielderMouseLeave()}>
                    <g id="cmf">
                        <circle fill="#00189A" cx="348.5" cy="678.848" r="68.182"/>
                        <g>
                            <g>
                                <g>
                                    <path fill="#F5F7FA" d="M394.143,666c-0.021-0.04-0.05-0.07-0.079-0.1h0.01C394.103,665.93,394.122,665.96,394.143,666z"/>
                                    <path fill="#F5F7FA" d="M360,645h-32.827c-2.061,0-3.85,0.62-5.301,2.08l-15.609,15.5l-3.32,3.32
					c-0.251,0.232-0.252,0.646,0,0.879l13.301,13.311c0.229,0.23,0.58,0.25,0.83,0.061l3.789-2.961
					c0.83-0.828,2.205-0.689,2.866,0.279c0.485,0.713,0.272,1.744,0.272,2.566c0,1.702,0,3.404,0,5.107c0,4.039,0,8.078,0,12.118
					c0,5.243,0,10.487,0,15.731c0,0.002,0,0.005,0,0.008h49c0-5.084,0-10.168,0-15.251c0-4.052,0-8.104,0-12.155
					c0-1.73,0-3.463,0-5.193c0-0.713-0.022-1.465,0.063-2.174c0.155-1.313,1.695-2.068,2.795-1.248
					c0.08,0.07,0.172,0.141,0.252,0.211l3.807,2.961c0.248,0.187,0.608,0.174,0.823-0.061l13.322-13.311
					c0.204-0.204,0.24-0.539,0.08-0.779c-0.021-0.04-0.049-0.07-0.079-0.1l-3.32-3.32l-15.621-15.5
					c-1.459-1.46-3.25-2.08-5.299-2.08H360 M359.612,647.18c-1.668,4.662-5.658,10.03-11.119,10.03
					c-5.463,0-9.592-5.342-11.271-10.03l-0.06-0.18h22.51L359.612,647.18z"/>
                                    <path fill="#F5F7FA" d="M360.093,644.78V645h-0.01C360.093,644.93,360.093,644.85,360.093,644.78z"/>
                                    <polygon fill="#F5F7FA" points="360.122,644.79 360.093,644.78 360.093,644.77 				"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </Link>

                <Link onClick={() => this.props.onSelect(POS_MIDFIELDER)} className={`midfielder playerPos${this.state.isMidFielderHovered ? " hovered" : ""}${this.props.highlight === POS_MIDFIELDER ? " highlight" : ""}`} to={'#'} onMouseEnter={() => this.handleMidFielderhover()} onMouseLeave={() => this.handleMidFielderMouseLeave()}>
                    <g id="mf_1_">
                        <circle fill="#00189A" cx="786.5" cy="678.848" r="68.182"/>
                        <g>
                            <g>
                                <g>
                                    <path fill="#F5F7FA" d="M832.143,666c-0.021-0.04-0.05-0.07-0.079-0.1h0.01C832.103,665.93,832.122,665.96,832.143,666z"/>
                                    <path fill="#F5F7FA" d="M798,645h-32.827c-2.061,0-3.85,0.62-5.301,2.08l-15.609,15.5l-3.32,3.32
					c-0.251,0.232-0.252,0.646,0,0.879l13.301,13.311c0.229,0.23,0.58,0.25,0.83,0.061l3.789-2.961
					c0.83-0.828,2.204-0.689,2.866,0.279c0.484,0.713,0.271,1.744,0.271,2.566c0,1.702,0,3.404,0,5.107c0,4.039,0,8.078,0,12.118
					c0,5.243,0,10.487,0,15.731c0,0.002,0,0.005,0,0.008h49c0-5.084,0-10.168,0-15.251c0-4.052,0-8.104,0-12.155
					c0-1.73,0-3.463,0-5.193c0-0.713-0.021-1.465,0.063-2.174c0.156-1.313,1.695-2.068,2.796-1.248
					c0.08,0.07,0.172,0.141,0.252,0.211l3.807,2.961c0.248,0.187,0.608,0.174,0.823-0.061l13.322-13.311
					c0.203-0.204,0.239-0.539,0.079-0.779c-0.021-0.04-0.049-0.07-0.078-0.1l-3.32-3.32l-15.621-15.5
					c-1.459-1.46-3.25-2.08-5.299-2.08H798 M797.612,647.18c-1.668,4.662-5.658,10.03-11.119,10.03
					c-5.463,0-9.592-5.342-11.271-10.03l-0.06-0.18h22.51L797.612,647.18z"/>
                                    <path fill="#F5F7FA" d="M798.093,644.78V645h-0.01C798.093,644.93,798.093,644.85,798.093,644.78z"/>
                                    <polygon fill="#F5F7FA" points="798.122,644.79 798.093,644.78 798.093,644.77 				"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </Link>

                <Link onClick={() => this.props.onSelect(POS_MIDFIELDER)} className={`midfielder playerPos${this.state.isMidFielderHovered ? " hovered" : ""}${this.props.highlight === POS_MIDFIELDER ? " highlight" : ""}`} to={'#'} onMouseEnter={() => this.handleMidFielderhover()} onMouseLeave={() => this.handleMidFielderMouseLeave()}>
                    <g id="mf">
                        <circle fill="#00189A" cx="129.5" cy="678.848" r="68.182"/>
                        <g>
                            <g>
                                <g>
                                    <path fill="#F5F7FA" d="M175.143,666c-0.021-0.04-0.05-0.07-0.079-0.1h0.01C175.103,665.93,175.122,665.96,175.143,666z"/>
                                    <path fill="#F5F7FA" d="M141,645h-32.827c-2.061,0-3.85,0.62-5.301,2.08l-15.609,15.5l-3.32,3.32
					c-0.251,0.232-0.252,0.646,0,0.879l13.301,13.311c0.229,0.23,0.58,0.25,0.83,0.061l3.789-2.961
					c0.83-0.828,2.205-0.689,2.866,0.279c0.485,0.713,0.272,1.744,0.272,2.566c0,1.702,0,3.404,0,5.107c0,4.039,0,8.078,0,12.118
					c0,5.243,0,10.487,0,15.731c0,0.002,0,0.005,0,0.008h49c0-5.084,0-10.168,0-15.251c0-4.052,0-8.104,0-12.155
					c0-1.73,0-3.463,0-5.193c0-0.713-0.022-1.465,0.063-2.174c0.155-1.313,1.695-2.068,2.795-1.248
					c0.08,0.07,0.172,0.141,0.252,0.211l3.807,2.961c0.248,0.187,0.608,0.174,0.823-0.061l13.322-13.311
					c0.204-0.204,0.24-0.539,0.08-0.779c-0.021-0.04-0.049-0.07-0.079-0.1l-3.32-3.32l-15.621-15.5
					c-1.459-1.46-3.25-2.08-5.299-2.08H141 M140.612,647.18c-1.668,4.662-5.658,10.03-11.119,10.03
					c-5.463,0-9.592-5.342-11.271-10.03l-0.06-0.18h22.51L140.612,647.18z"/>
                                    <path fill="#F5F7FA" d="M141.093,644.78V645h-0.01C141.093,644.93,141.093,644.85,141.093,644.78z"/>
                                    <polygon fill="#F5F7FA" points="141.122,644.79 141.093,644.78 141.093,644.77 				"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </Link>

                <Link onClick={() => this.props.onSelect(POS_STRIKER)} className={`striker playerPos${this.state.isStrikerHovered ? " hovered" : ""}${this.props.highlight === POS_STRIKER ? " highlight" : ""}`} to={'#'} onMouseEnter={() => this.handleStrikerhover()} onMouseLeave={() => this.handleStrikerMouseLeave()}>
                    <g id="s_1_">
                        <circle fill="#00189A" cx="567.5" cy="469.848" r="68.182"/>
                        <g>
                            <g>
                                <g>
                                    <path fill="#F5F7FA" d="M613.143,457c-0.021-0.04-0.05-0.07-0.079-0.1h0.01C613.103,456.93,613.122,456.96,613.143,457z"/>
                                    <path fill="#F5F7FA" d="M579,436h-32.827c-2.061,0-3.85,0.62-5.301,2.08l-15.609,15.5l-3.32,3.32
					c-0.251,0.232-0.252,0.646,0,0.879l13.301,13.311c0.229,0.23,0.58,0.25,0.83,0.061l3.789-2.961
					c0.83-0.828,2.204-0.689,2.866,0.279c0.484,0.713,0.271,1.744,0.271,2.566c0,1.702,0,3.404,0,5.107c0,4.039,0,8.078,0,12.118
					c0,5.243,0,10.487,0,15.731c0,0.002,0,0.005,0,0.008h49c0-5.084,0-10.168,0-15.251c0-4.052,0-8.104,0-12.155
					c0-1.73,0-3.463,0-5.193c0-0.713-0.021-1.465,0.063-2.174c0.156-1.313,1.695-2.068,2.796-1.248
					c0.08,0.07,0.172,0.141,0.252,0.211l3.807,2.961c0.248,0.187,0.608,0.174,0.823-0.061l13.322-13.311
					c0.203-0.204,0.239-0.539,0.079-0.779c-0.021-0.04-0.049-0.07-0.078-0.1l-3.32-3.32l-15.621-15.5
					c-1.459-1.46-3.25-2.08-5.299-2.08H579 M578.612,438.18c-1.668,4.662-5.658,10.03-11.119,10.03
					c-5.463,0-9.592-5.342-11.271-10.03l-0.06-0.18h22.51L578.612,438.18z"/>
                                    <path fill="#F5F7FA" d="M579.093,435.78V436h-0.01C579.093,435.93,579.093,435.85,579.093,435.78z"/>
                                    <polygon fill="#F5F7FA" points="579.122,435.79 579.093,435.78 579.093,435.77 				"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </Link>

                <Link onClick={() => this.props.onSelect(POS_STRIKER)} className={`striker playerPos${this.state.isStrikerHovered ? " hovered" : ""}${this.props.highlight === POS_STRIKER ? " highlight" : ""}`} to={'#'} onMouseEnter={() => this.handleStrikerhover()} onMouseLeave={() => this.handleStrikerMouseLeave()}>
                    <g id="s">
                        <circle fill="#00189A" cx="348.5" cy="469.848" r="68.182"/>
                        <g>
                            <g>
                                <g>
                                    <path fill="#F5F7FA" d="M394.143,457c-0.021-0.04-0.05-0.07-0.079-0.1h0.01C394.103,456.93,394.122,456.96,394.143,457z"/>
                                    <path fill="#F5F7FA" d="M360,436h-32.827c-2.061,0-3.85,0.62-5.301,2.08l-15.609,15.5l-3.32,3.32
					c-0.251,0.232-0.252,0.646,0,0.879l13.301,13.311c0.229,0.23,0.58,0.25,0.83,0.061l3.789-2.961
					c0.83-0.828,2.205-0.689,2.866,0.279c0.485,0.713,0.272,1.744,0.272,2.566c0,1.702,0,3.404,0,5.107c0,4.039,0,8.078,0,12.118
					c0,5.243,0,10.487,0,15.731c0,0.002,0,0.005,0,0.008h49c0-5.084,0-10.168,0-15.251c0-4.052,0-8.104,0-12.155
					c0-1.73,0-3.463,0-5.193c0-0.713-0.022-1.465,0.063-2.174c0.155-1.313,1.695-2.068,2.795-1.248
					c0.08,0.07,0.172,0.141,0.252,0.211l3.807,2.961c0.248,0.187,0.608,0.174,0.823-0.061l13.322-13.311
					c0.204-0.204,0.24-0.539,0.08-0.779c-0.021-0.04-0.049-0.07-0.079-0.1l-3.32-3.32l-15.621-15.5
					c-1.459-1.46-3.25-2.08-5.299-2.08H360 M359.612,438.18c-1.668,4.662-5.658,10.03-11.119,10.03
					c-5.463,0-9.592-5.342-11.271-10.03l-0.06-0.18h22.51L359.612,438.18z"/>
                                    <path fill="#F5F7FA" d="M360.093,435.78V436h-0.01C360.093,435.93,360.093,435.85,360.093,435.78z"/>
                                    <polygon fill="#F5F7FA" points="360.122,435.79 360.093,435.78 360.093,435.77 				"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </Link>
            </svg>
        )
    }
}
