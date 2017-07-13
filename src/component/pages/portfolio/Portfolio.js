import React, {Component} from 'react';

import nu from './img/nu.png';
import revamp from './img/revamp.png';
import riderz from './img/riderz.png';
import wheels from './img/wheels.png';
import portfoliobg from './img/portfoliobg.jpg'
import ReactCSSTransitionGroup  from "react-addons-css-transition-group";
import {Link} from 'react-router-dom'


export const url = {

    nu: 'http://www.nepalunderground.com/',
    revamp: 'http://www.revampwear.com/',
    wheels: 'https://thewheels.com.np/',
    riderz: 'http://www.riderznepal.com'
}

const WebIframe = ({address})=> {
    return (
        <iframe className="portfolioURL animated fadeInRight" src={address} frameBorder="0" allowFullScreen>
        </iframe>
    )
}

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            onMouse: false,
            url: null
        };
    }


    zoomIn = ({target:{alt}}) => {

        this.setState({onMouse: true, url: alt});

    }
    zoomOut = () => {
        this.setState({onMouse: false, url: null});
    }


    render() {
        return (
            <div style={{display: 'flex', height: '100%'}}>
                <div className="portfolio">
                    <img src={nu} alt={"nu"} className="animated jello"
                         onMouseOver={this.zoomIn}
                         onMouseLeave={this.zoomOut}/>
                    <img src={revamp} alt={"revamp"} className="animated jello"
                         onMouseOver={this.zoomIn}
                         onMouseLeave={this.zoomOut}/>
                    <img src={riderz} alt={"riderz"} className="animated jello" onMouseOver={this.zoomIn}
                         onMouseLeave={this.zoomOut}/>
                    <img src={wheels} alt={"wheels"} className="animated jello" onMouseOver={this.zoomIn}
                         onMouseLeave={this.zoomOut}/>
                </div>
                <div style={{
                    flexGrow: '1',
                    width: '100%',
                    display: 'flex',
                    backgroundImage: `url(${portfoliobg})`,
                    backgroundSize: 'cover'

                }}>

                    {this.state.onMouse ? <WebIframe address={url[this.state.url]}/> : ''}
                </div>

            </div>

        );
    }
}

export default Portfolio;
