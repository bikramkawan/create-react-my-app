import React, {Component} from 'react';

import nu from './img/nu.png';
import revamp from './img/revamp.png';
import riderz from './img/riderz.png';
import wheels from './img/wheels.png';
import portfoliobg from './img/portfoliobg.jpg'
import ReactCSSTransitionGroup  from "react-addons-css-transition-group";
import {Link} from 'react-router-dom'
import Heatmap from '../d3/heatmap/Heatmap';
import LineChart from '../d3/lineChart/LineChart'
import * as d3 from 'd3';
import data from '../d3/lineChart/temp_data.tsv'

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
            url: null,
            heatmap: false,
            lineChart: false
        };
    }


    zoomIn = ({target:{alt}}) => {

        this.setState({onMouse: true, url: alt});

    }
    zoomOut = () => {
        this.setState({onMouse: false, url: null});
    }

    clickMe = () => {
        this.setState({heatmap: true, lineChart: false});
    }

    clickMe1 = () => {

        this.setState({lineChart: true, heatmap: false});
    }

    componentWillReceiveProps(nextProps) {

        console.log('dfajlkfjaklf')
    }


    render() {
        return (
            <div className="portfolioContainer">
                <div className="left">
                    <div className="portfolio">
                        <img src={nu} alt={"nu"} className="animated jello"
                             title="Nepal Underground" onMouseOver={this.zoomIn}
                             onMouseLeave={this.zoomOut}/>
                        <img src={revamp} alt={"revamp"} className="animated jello"
                             title="Revamp Wear" onMouseOver={this.zoomIn}
                             onMouseLeave={this.zoomOut}/>
                        <img src={riderz} alt={"riderz"} className="animated jello" onMouseOver={this.zoomIn}
                             title="Riderz Nepal" onMouseLeave={this.zoomOut}/>
                        <img src={wheels} alt={"wheels"} className="animated jello" onMouseOver={this.zoomIn}
                             title="The Wheels" onMouseLeave={this.zoomOut}/>
                    </div>
                    <div className="d3examples">
                        <h2>D3 Examples</h2>
                        <ul>
                            <li onClick={this.clickMe}> HeatMap</li>
                            <li onClick={this.clickMe1}>Bar Diagram</li>
                        </ul>


                    </div>
                </div>


                <div className="right" style={{
                    backgroundImage: `url(${portfoliobg})`,

                }}>
                    {this.state.onMouse ? <WebIframe address={url[this.state.url]}/> : ''}
                    {this.state.heatmap ? <Heatmap/> : ''}
                    {this.state.lineChart ? <LineChart source={data}/> : ''}

                </div>

            </div>

        );
    }
}

export default Portfolio;
