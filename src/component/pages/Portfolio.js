import React, {Component} from 'react';
import '../../App.css';
import nu from './nu.png';
import revamp from './revamp.png';
import riderz from './riderz.png';
import wheels from './wheels.png';
import portfoliobg from './portfoliobg.jpg'
import ReactCSSTransitionGroup  from "react-addons-css-transition-group";
import {Link} from 'react-router-dom'
class Portfolio extends Component {
    render() {

        return (

            <div style={{display: 'flex'}}>
                <div className="portfolio">
                    <img src={nu} alt={"nu"} className="animated jello"/>
                    <img src={revamp} alt={"revamp"} className="animated jello"/>
                    <img src={riderz} alt={"riderz"} className="animated jello"/>
                    <img src={wheels} alt={"wheels"} className="animated jello"/>
                </div>
                <div style={{flexGrow: '1', width: '100%'}}>
                    <img style={{width: '100%', height: '100%'}} src={portfoliobg} alt={"nu"}/>
                </div>

                </div>

        );
    }
}

export default Portfolio;
