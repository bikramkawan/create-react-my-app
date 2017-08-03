import React, {Component} from 'react';
import nu from './img/nu.png';
import revamp from './img/revamp.png';
import riderz from './img/riderz.png';
import wheels from './img/wheels.png';
import LineChart from '../d3/lineChart/LineChart'
import Heatmap from '../d3/heatmap/Heatmap';
import DonutChart from '../d3/donutChart/DonutChart';
import RadialHistogram from '../d3/radialhistogram/RadialHistogram'
import {mapValues} from 'lodash'
import MobileOsVoting from '../../../mobileOSVoting/MobileOsVoting';
import MarkdownPreview from '../../markDownPreview/MarkdownPreview';
import Calculator from  '../calculator/Calculator';
import PomodoroClock from '../pomodoroClock/PomodoroClock';

import * as $ from 'jquery';


export const url = {

    nu: 'http://www.nepalunderground.com/',
    revamp: 'http://www.revampwear.com/',
    wheels: 'https://thewheels.com.np/',
    riderz: 'http://www.riderznepal.com'
}

const WebIframe = ({address}) => {
    return (
        <iframe title='website' src={address} frameBorder="0" allowFullScreen>
        </iframe>
    )
}


export const d3 = {
    heatmap: 'heatmap', linechart: 'linechart', donutchart: 'donutchart',
    radialhistogram: 'radialhistogram',
}

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            displayIframe: false,
            url: null,
            [d3.heatmap]: false,
            [d3.linechart]: false,
            [d3.donutchart]: false,
            [d3.radialhistogram]: false,
            isVoting: false,
            isMarkdown: false,
            isCalculator: false,
            isClock: false
        };
    }

    showOverlay() {
        $('.fade').show();
        $('.iframe').show();
        $('.fa-times-circle').show();
    }

    handleImage = ({target: {alt}}) => {
        const that = this;
        this.showOverlay();
        this.setState({displayIframe: true, url: alt});
        $(document).keyup(function (e) {
            if (e.keyCode === 27) {
                that.hideBlock();
            }
        });

    }
    clickMe = ({target}) => {
        this.setState({isVoting: false});
        const id = target.getAttribute('data-id');
        this.showOverlay();
        this.setState({[d3[id]]: true});

    }

    mobileVoting = ()=> {
        this.showOverlay();
        this.setState({isVoting: true})
    }

    onClickMarkdown = ()=> {
        this.showOverlay();
        this.setState({isMarkdown: true})
    }

    onClickCalc = () => {
        this.showOverlay();
        this.setState({isCalculator: true})
    }

    onClickClock = () => {
        this.showOverlay();
        this.setState({isClock: true})
    }

    hideBlock = ()=> {
        $('.fade').hide();
        $('.iframe').hide();
        $('.fa-times-circle').hide();
        this.setState({isMarkdown: false, isVoting: false, displayIframe: false, isCalculator: false})
        mapValues(d3, (value, key) => this.setState({[d3[key]]: false}));

    }

    render() {
        return (
            <div className="portfolioContainer">
                <div className="left">
                    <div className="portfolio">
                        <h1>Websites</h1>
                        <div className="websites">
                            <img src={nu} alt={"nu"} className="animated jello"
                                 title="Nepal Underground" onClick={this.handleImage}/>
                            <img src={revamp} alt={"revamp"} className="animated jello"
                                 title="Revamp Wear" onClick={this.handleImage}/>
                            <img src={riderz} alt={"riderz"} className="animated jello"
                                 title="Riderz Nepal" onClick={this.handleImage}/>
                            <img src={wheels} alt={"wheels"} className="animated jello" onClick={this.handleImage}
                                 title="The Wheels"/>
                        </div>
                    </div>

                    <div className="d3examples">
                        <h1>D3 Examples</h1>
                        <ul>
                            <li data-id={d3.heatmap} onClick={this.clickMe}> HeatMap</li>
                            <li data-id={d3.linechart} onClick={this.clickMe}>Line Chart</li>
                            <li data-id={d3.donutchart} onClick={this.clickMe}>Donut Chart</li>
                            <li data-id={d3.radialhistogram} onClick={this.clickMe}>Radial Histogram</li>
                        </ul>
                    </div>

                    <h1 onClick={this.mobileVoting}>Mobile Voting</h1>
                    <h1 onClick={this.onClickMarkdown}>Markdown Preview</h1>
                    <h1 onClick={this.onClickCalc}>Calculator</h1>
                    <h1 onClick={this.onClickClock}>Pomodoro Clock</h1>

                    <div className="iframe">
                        {this.state.displayIframe ? <WebIframe address={url[this.state.url]}/> : ''}
                        {this.state[d3.linechart] ? <LineChart display={this.state.displayIframe}/> : ''}
                        {this.state[d3.heatmap] ? <Heatmap display={this.state.displayIframe}/> : ''}
                        {this.state[d3.donutchart] ? <DonutChart display={this.state.displayIframe}/> : ''}
                        {this.state[d3.radialhistogram] ? <RadialHistogram display={this.state.displayIframe}/> : ''}
                        {this.state.isVoting ? <MobileOsVoting/> : ''}
                        {this.state.isMarkdown ? <MarkdownPreview/> : ''}
                        {this.state.isCalculator ? <Calculator/> : ''}
                        {this.state.isClock ? <PomodoroClock/> : ''}

                    </div>
                    <i className="fa fa-times-circle fa-3x" aria-hidden="true" onClick={this.hideBlock}></i>
                </div>

                <div className="fade"></div>


            </div>

        );
    }
}

export default Portfolio;
