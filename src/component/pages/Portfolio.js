import React, {Component} from 'react';
import '../../App.css';
import nu from './nu.png';
import revamp from './revamp.png';
import riderz from './riderz.png';
import wheels from './wheels.png';
import ReactCSSTransitionGroup  from "react-addons-css-transition-group";

class Portfolio extends Component {
    render() {

        return (
            <ReactCSSTransitionGroup
                transitionName="rotate-scale-up"
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionLeaveTimeout={300}>
                <div className="portfolio">
                    <img src={nu} alt={"nu"}/>
                    <img src={revamp} alt={"revamp"}/>
                    <img src={riderz} alt={"riderz"}/>
                    <img src={wheels} alt={"wheels"}/>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default Portfolio;
