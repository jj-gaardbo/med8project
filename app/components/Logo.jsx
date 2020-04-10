import React from 'react';
import LogoImage from '../data/images/logo.png';

export default class Logo extends React.Component {
    render() {
        return (
            <img className="logo" src={LogoImage} />
        )
    }
}
