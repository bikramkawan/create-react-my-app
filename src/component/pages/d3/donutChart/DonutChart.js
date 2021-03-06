/**
 * Created by bikramkawan on 7/16/17.
 */
import React, {Component} from 'react';
import * as d3 from 'd3';
class DonutChart extends Component {

    renderDonut() {


        var width = d3.select('.svgbody').property('clientWidth');
        const height = d3.select('.svgbody').property('clientHeight');
        const o_radius = 40;
        const radiusincrease = 30; // You can increase the radius from here.

        var svg = d3.select(".svgbody").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr('class', 'main')
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")


        const a_data = ['A1', 'A2', 'A3', 'A4'];
        const b_data = ['B1', 'B2', 'B3', 'B4', 'B5'];
        const c_data = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'];
        const d_data = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'];
        const e_data = ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12'];

        const a_color = ['green', 'red', 'black', 'blue'];
        const b_color = ['green', 'red', 'khaki', 'black', 'blue'];
        const c_color = ['purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple'];
        const d_color = ['green', 'green', 'red', 'red', 'khaki', 'khaki', 'black', 'black', 'blue', 'blue'];
        const e_color = ['green', 'green', 'green', 'red', 'red', 'khaki', 'black', 'black', 'khaki', 'blue', 'blue', 'khaki'];

        // Inner circle
        svg.append("circle").attr({
            cx: 0,
            cy: 0,
            r: o_radius,
            fill: "none",
            stroke: "blue"
        });

        //  Circle A
        svg.append("circle").attr({
            cx: 0,
            cy: 0,
            r: o_radius + radiusincrease,
            fill: "none",
            stroke: "blue"
        });

        // Circle B
        svg.append("circle").attr({
            cx: 0,
            cy: 0,
            r: o_radius + radiusincrease * 2,
            fill: "none",
            stroke: "blue"
        });

        // Circle C

        svg.append("circle").attr({
            cx: 0,
            cy: 0,
            r: o_radius + radiusincrease * 3,
            fill: "none",
            stroke: "blue"
        });

        // Circle D
        svg.append("circle").attr({
            cx: 0,
            cy: 0,
            r: o_radius + radiusincrease * 4,
            fill: "none",
            stroke: "blue"
        });

        //Circle E
        svg.append("circle").attr({
            cx: 0,
            cy: 0,
            r: o_radius + radiusincrease * 5,
            fill: "none",
            stroke: "blue"
        });


        // Creating Text elements
        var createElements = function (svg, nodes, elementRadius) {
            svg.selectAll('text')
                .data(nodes)
                .enter().append('text')
                .attr('r', elementRadius)
                .attr('x', function (d, i) {

                    return d.x;
                })
                .attr('y', function (d, i) {
                    return d.y;
                })
                .attr("transform", 'rotate(90)')
                .attr('stroke', function (d) {
                    return d.color;
                })
                .attr('fill', 'none')
                .text(function (d, i) {
                    return d.text;
                })


        }


        var createSvg = function (radius, callback) {
            var svg = d3.selectAll('g.main').append('g').attr('class', 'cat1').attr("transform", 'rotate(-90)');
            callback(svg);
        }

        //Data for Category A
        var createNodesa = function (numNodes, radius, catdata, catcolor) {
            var nodes = [],
                text,
                color,
                angle, degtorad,
                x,
                y, degree,
                startangle = -180,
                i;
            for (i = 0; i < numNodes; i++) {

                degree = startangle + (-90 * i);

                degtorad = (Math.PI / 180 * degree)
                angle = degtorad; // Calculate the angle at which the element will be placed.
                //angle = (i * 2* Math.PI/numNodes); // Calculate the angle at which the element will be placed.
                // For a semicircle, we would use (i / numNodes) * Math.PI.
                x = (radius * Math.cos(angle) - 10); // Calculate the x position of the element.
                y = -1 * (radius * Math.sin(angle)); // Calculate the y position of the element.

                text = catdata[i];
                color = catcolor[i];
                nodes.push({'id': i, 'x': x, 'y': y, 'text': text, 'color': color});
            }

            return nodes;
        }

        //Data for Category B
        var createNodesb = function (numNodes, radius, catdata, catcolor) {
            var nodes = [],
                text,
                color,
                angle, degtorad,
                x,
                y, degree,
                startangle = -162,
                deltaangle = -72,
                i;
            for (i = 0; i < numNodes; i++) {

                degree = startangle + (-deltaangle * i);

                degtorad = (Math.PI / 180 * degree)
                angle = degtorad;
                x = (radius * Math.cos(angle) - 10); // Calculate the x position of the element.
                y = -1 * (radius * Math.sin(angle)); // Calculate the y position of the element.

                text = catdata[i];
                color = catcolor[i];
                nodes.push({'id': i, 'x': x, 'y': y, 'text': text, 'color': color});
            }

            return nodes;
        }
        //Data for Category C
        var createNodesc = function (numNodes, radius, catdata, catcolor) {
            var nodes = [],
                text,
                color,
                angle, degtorad,
                x,
                y, degree,
                startangle = -157.5,
                deltaangle = -45,
                i;
            for (i = 0; i < numNodes; i++) {

                degree = startangle + (deltaangle * i);

                degtorad = (Math.PI / 180 * degree)
                angle = degtorad;
                // For a semicircle, we would use (i / numNodes) * Math.PI.
                x = (radius * Math.cos(angle) - 10); // Calculate the x position of the element.
                y = -1 * (radius * Math.sin(angle)); // Calculate the y position of the element.

                text = catdata[i];
                color = catcolor[i];
                nodes.push({'id': i, 'x': x, 'y': y, 'text': text, 'color': color});
            }

            return nodes;
        }
        //Data for Category D
        var createNodesd = function (numNodes, radius, catdata, catcolor) {
            var nodes = [],
                text,
                color,
                angle, degtorad,
                x,
                y, degree,
                startangle = -180,
                deltaangle = -36,
                i;
            for (i = 0; i < numNodes; i++) {

                degree = startangle + (deltaangle * i);

                degtorad = (Math.PI / 180 * degree)
                angle = degtorad; // Calculate the angle at which the element will be placed.
                //angle = (i * 2* Math.PI/numNodes); // Calculate the angle at which the element will be placed.
                // For a semicircle, we would use (i / numNodes) * Math.PI.
                x = (radius * Math.cos(angle) - 10); // Calculate the x position of the element.
                y = -1 * (radius * Math.sin(angle)); // Calculate the y position of the element.

                text = catdata[i];
                color = catcolor[i];
                nodes.push({'id': i, 'x': x, 'y': y, 'text': text, 'color': color});
            }

            return nodes;
        }
        //Data for Category E
        var createNodese = function (numNodes, radius, catdata, catcolor) {
            var nodes = [],
                text,
                color,
                angle, degtorad,
                x,
                y, degree,
                startangle = -150,
                deltaangle = -30,
                i;
            for (i = 0; i < numNodes; i++) {

                degree = startangle + (deltaangle * i);

                degtorad = (Math.PI / 180 * degree)
                angle = degtorad; // Calculate the angle at which the element will be placed.

                x = (radius * Math.cos(angle) - 10); // Calculate the x position of the element.
                y = -1 * (radius * Math.sin(angle)); // Calculate the y position of the element.

                text = catdata[i];
                color = catcolor[i];
                nodes.push({'id': i, 'x': x, 'y': y, 'text': text, 'color': color});
            }

            return nodes;
        }
        var a_draw = function () {
            var numNodes = a_data.length;
            var radius = o_radius + radiusincrease - 15;
            var catcolor = a_color;
            var catdata = a_data;
            var nodes = createNodesa(numNodes, radius, catdata, catcolor);
            createSvg(radius, function (svg) {
                createElements(svg, nodes, 1);
            });

        }

        a_draw();

        var b_draw = function () {
            var catdata = b_data;
            var catcolor = b_color;
            var numNodes = catdata.length;
            var radius = o_radius + (radiusincrease * 2) - 15;

            var nodes = createNodesb(numNodes, radius, catdata, catcolor);
            createSvg(radius, function (svg) {
                createElements(svg, nodes, 1);
            });

        }

        b_draw();


        var c_draw = function () {
            var catdata = c_data;
            var catcolor = c_color;
            var numNodes = catdata.length;
            var radius = o_radius + (radiusincrease * 3) - 15;

            var nodes = createNodesc(numNodes, radius, catdata, catcolor);
            createSvg(radius, function (svg) {
                createElements(svg, nodes, 1);
            });

        }

        c_draw();

        var d_draw = function () {
            var catdata = d_data;
            var numNodes = catdata.length;
            var catcolor = d_color;
            var radius = o_radius + (radiusincrease * 4) - 15;

            var nodes = createNodesd(numNodes, radius, catdata, catcolor);
            createSvg(radius, function (svg) {
                createElements(svg, nodes, 1);
            });

        }

        d_draw();

        var e_draw = function () {
            var catdata = e_data;
            var catcolor = e_color;
            var numNodes = catdata.length;
            var radius = o_radius + (radiusincrease * 5) - 15;


            var nodes = createNodese(numNodes, radius, catdata, catcolor);
            createSvg(radius, function (svg) {
                createElements(svg, nodes, 1);
            });

        }

        e_draw();

    }


    componentDidMount() {

        this.renderDonut();
    }

    render() {
        return (
            <div className="d3Container">
                <div className="svgbody">
                </div>
            </div>
        );
    }
}

export default DonutChart;
