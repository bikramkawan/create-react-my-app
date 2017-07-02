import React, {Component} from 'react';
import '../../App.css';
import nu from './nu.png';
import revamp from './revamp.png';
import riderz from './riderz.png';
import wheels from './wheels.png';

class Portfolio extends Component {
    render() {

        return (
            <div className="portfolio">
                <img src={nu} alt={"nu"}/>
                <img src={revamp} alt={"revamp"}/>
                <img src={riderz} alt={"riderz"}/>
                <img src={wheels} alt={"wheels"}/>

            </div>
        );
    }
}

export default Portfolio;
