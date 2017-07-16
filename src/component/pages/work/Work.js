/**
 * Created by bikramkawan on 7/16/17.
 */
import React, {Component} from 'react';
import * as $ from 'jquery';
import LineChart from '../d3/lineChart/LineChart'
import Heatmap from '../d3/heatmap/Heatmap';
import DonutChart from '../d3/donutChart/DonutChart';
import RadialHistogram from '../d3/radialhistogram/RadialHistogram'
import {mapValues} from 'lodash'

export const d3 = {
    heatmap: 'heatmap', linechart: 'linechart', donutchart: 'donutchart',
    radialhistogram: 'radialhistogram',
}


class Work extends Component {

    constructor() {
        super();
        this.state = {
            hideSidebar: false,
            onMouse: false,
            url: null,
            [d3.heatmap]: false,
            [d3.linechart]: false,
            [d3.donutchart]: false,
            [d3.radialhistogram]: false,

        }

    }


    hideSidebar = () => {
        this.setState({hideSidebar: !this.state.hideSidebar})
        if (this.state.hideSidebar) {
            $('.list').addClass('false');
            $('.hideMe').addClass('true');
        } else {
            $('.list').removeClass('false');
            $('.hideMe').removeClass('true');
        }
    }


    clickMe = ({target}) => {
        const id = target.getAttribute('data-id');
        mapValues(d3, (value, key) => (key !== id) ? this.setState({[d3[key]]: false}) : this.setState({[d3[id]]: true})
        );

    }


    render() {

        return (
            <div className="work">
                <div className="left">
                    <div className="list true">
                        <div className="d3examples">
                            <h2>D3 Examples</h2>
                            <ul>
                                <li data-id={d3.heatmap} onClick={this.clickMe}> HeatMap</li>
                                <li data-id={d3.linechart} onClick={this.clickMe}>Line Chart</li>
                                <li data-id={d3.donutchart} onClick={this.clickMe}>Donut Chart</li>
                                <li data-id={d3.radialhistogram} onClick={this.clickMe}>Radial Histogram</li>
                            </ul>


                        </div>
                    </div>

                    <div className="hideMe false">
                        <span>
                         <i className="fa fa-bars" aria-hidden="true" onClick={this.hideSidebar}></i>
                        </span></div>
                </div>
                <div className="right">

                    {this.state[d3.linechart] ? <LineChart/> : ''}
                    {this.state[d3.heatmap] ? <Heatmap/> : ''}
                    {this.state[d3.donutchart] ? <DonutChart/> : ''}
                    {this.state[d3.radialhistogram] ? <RadialHistogram/> : ''}
                </div>


            </div>


        )
    }


}

export default Work;
