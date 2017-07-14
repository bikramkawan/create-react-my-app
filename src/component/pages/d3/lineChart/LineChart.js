/**
 * Created by bikramkawan on 7/13/17.
 */
import React, {Component} from 'react';
import * as d3 from 'd3';
import axios from 'axios';
import tempdata from './temp_data.tsv'


class LineChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: null,

        };
    }


    componentDidMount() {

        d3.tsv(tempdata, function (tsvdata) {
            console.log(tsvdata)
            this.setState({sort: tsvdata});


            var margin = {top: 20, right: 20, bottom: 110, left: 40},
                margin2 = {top: 430, right: 20, bottom: 30, left: 40},

                height2 = 500 - margin2.top - margin2.bottom;
            const width = d3.select('.right').property('clientWidth') * 0.80;
            const height = d3.select('.right').property('clientHeight') * 0.80;

            var parseDate = d3.time.format("%Y%m%d").parse;


            var x = d3.time.scale().range([0, width]),
                x2 = d3.time.scale().range([0, width]),
                y = d3.scale.linear().range([height, 0]),
                y2 = d3.scale.linear().range([height2, 0]);

            var xAxis = d3.svg.axis().scale(x).orient("bottom"),
                xAxis2 = d3.svg.axis().scale(x2).orient("bottom"),
                yAxis = d3.svg.axis().scale(y).orient("left");

            var brush = d3.svg.brush()
                .x(x2)
                .on("brush", brush);

            var area = function (color) {
                return d3.svg.area()
                    .interpolate("monotone")
                    .x(function (d) {
                        return x(d.date);
                    })
                    .y0(height)
                    .y1(function (d) {
                        return y(d[color]);
                    });
            };

            var area2 = function (color) {
                return d3.svg.area()
                    .interpolate("monotone")
                    .x(function (d) {
                        return x2(d.date);
                    })
                    .y0(height2)
                    .y1(function (d) {
                        return y2(d[color]);
                    });
            };


            const svg = d3.select(".d3Container")
                .append("svg")
                .attr("class", "chart")
                .attr("width", width)
                .attr("height", height);

            svg.append("defs").append("clipPath")
                .attr("id", "clip")
                .append("rect")
                .attr("width", width)
                .attr("height", height);

            var focus = svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            var context = svg.append("g")
                .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");


            var data = [];
            tsvdata.forEach(function (d) {
                data.push({
                    "date": parseDate(d.date),
                    "temp": parseFloat(d.temperature)

                })

            });


            data.map(function (t) {
                t.date = new Date(t.date);
            });

            x.domain(d3.extent(data.map(function (d) {
                return d.date;
            })));
            y.domain([0, d3.max(data.map(function (d) {
                return d.temp;
            }))]);

            x2.domain(x.domain());
            y2.domain(y.domain());
            focus.append("linearGradient")
                .attr("id", "line-gradient")
                .attr("gradientUnits", "userSpaceOnUse")
                .attr("x1", 0).attr("y1", y(0))
                .attr("x2", 0).attr("y2", y(100))
                .selectAll("stop")
                .data([
                    {offset: "0%", color: "red"},
                    {offset: "50%", color: "red"},
                    {offset: "50%", color: "black"},
                    {offset: "55%", color: "black"},
                    {offset: "55%", color: "red"},
                    {offset: "100%", color: "red"}
                ])
                .enter().append("stop")
                .attr("offset", function (d) {
                    return d.offset;
                })
                .attr("stop-color", function (d) {
                    return d.color;
                });


            focus.selectAll('path')
                .data(['temp'])
                .enter()
                .append('path')
                .attr('clip-path', 'url(#clip)')
                .attr('d', function (col) {
                    return area(col)(data);
                })
                .attr('class', function (col) {
                    return "path_" + col + " data";
                });

            focus.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            focus.append("g")
                .attr("class", "y axis")
                .call(yAxis);

            context.selectAll('path')
                .data(['temp'])
                .enter()
                .append('path')
                .attr('d', function (col) {
                    return area2(col)(data);
                })
                .attr('class', 'path_context');

            context.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height2 + ")")
                .call(xAxis2);

            context.append("g")
                .attr("class", "x brush")
                .call(brush)
                .selectAll("rect")
                .attr("y", -6)
                .attr("height", height2 + 7);

            function brush() {
                x.domain(brush.empty() ? x2.domain() : brush.extent());
                focus.selectAll("path.data").attr("d", function (col) {
                    return area(col)(data);
                });
                focus.select(".x.axis").call(xAxis);
            }

        })
    }

    componentWillUnmount() {

        console.log(this.state)

    }


    render() {
        return (
            <div className="d3Container">
                <div>
                    <h1>{console.log(this.state)}</h1>

                </div>
            </div>
        );
    }
}

export
default
LineChart;
