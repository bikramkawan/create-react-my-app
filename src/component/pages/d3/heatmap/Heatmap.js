/**
 * Created by bikramkawan on 7/13/17.
 */
import React, {Component} from 'react';
import * as d3 from 'd3';


class Heatmap extends Component {


    renderHeatMap() {

        function heatmapdata(datapoints, min, max) {
            const temparr = [];
            for (let i = 0; i < datapoints; i++) {
                temparr.push(Math.floor(Math.random() * (max - min) + min));
            }

            return (temparr);
        }

        const rows = 15;
        const cols = 16;

        const data = [];
        for (let i = 0; i < rows; i++) {
            data.push(heatmapdata(cols, 1, 100));
        }


        const width = d3.select('.right').property('clientWidth') * 0.80;
        const height = d3.select('.right').property('clientHeight') * 0.80;
        const svg = d3.select(".d3Container")
            .append("svg")
            .attr("class", "chart")
            .attr("width", width)
            .attr("height", height);
        const linearGradient = svg.append("linearGradient")
            .attr("id", "linear-gradient");
        linearGradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "white"); //light blue

//Set the color for the end (100%)
        linearGradient.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", "black"); //dark blue
        svg.append("rect")
            .attr("width", 300)
            .attr("height", 20)
            .style("fill", "url(#linear-gradient)")


        const colorscale = d3.scale.linear().range(["#FFE0E0", "#FF0000"]); // Define Color range

        const colwidth = (width / cols)

        const row_height = (height / rows);

        let max, min;
        data.forEach(function (d) {

            max = d3.max([max, d3.max(d)]);
            min = d3.min([min, d3.min(d)]);
            colorscale.domain([min, max]);
        })


        const svg_enter = svg.selectAll('g.my').data(data)
            .enter()
            .append('g')

        const rect = svg_enter.selectAll('rect').data(function (d, i) {
            return d;
        });

        const y = [];
        data.forEach(function (d, i) {
            y.push(i * row_height);

        })


        let counter = 0;
        rect.enter().append('rect')
            .attr('width', colwidth)
            .attr('height', row_height)
            .attr('x', function (d) {
                const prev = this.previousSibling; // One previous step information.
                return (prev === null) ? 0 : parseFloat(d3.select(prev).attr('x')) + parseFloat(d3.select(prev).attr('width'))
            })
            .attr('y', function (d, i) {
                if (i == 0) {
                    counter = counter + 1;
                }
                return (counter - 1) * row_height;

            })
            .attr('fill', colorscale);

    }

    componentWillMount() {

    }

    componentDidMount() {
        this.renderHeatMap();

    }


    render() {
        return (
            <div className="d3Container"></div>
        );
    }
}

export default Heatmap;
