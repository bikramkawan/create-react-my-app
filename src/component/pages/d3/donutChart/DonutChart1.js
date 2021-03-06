/**
 * Created by bikramkawan on 7/16/17.
 */
import React, {Component} from 'react';
import * as d3 from 'd3';
import * as $ from 'jquery';
class DonutChart1 extends Component {

    renderDonut() {

        var width = d3.select('.svgbody').property('clientWidth');
        const height = d3.select('.svgbody').property('clientHeight');
        const radius = Math.min(width, height) / 2;

        console.log(width,height)
        var min_val = 0;
        var max_val = 1;

        var color = d3.scale.ordinal()
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

        var arc = d3.svg.arc()
            .outerRadius(radius - 10)
            .innerRadius(radius - 70);

        var pie = d3.layout.pie()
            .sort(null)
            .value(function (d) {
                return d.data;
            });

        var svg;
        var currentValue = $('#currentValue');


        d3.csv("data1.csv", type, function (error, data) {
            if (error) throw error;
            svg = d3.select(".svgbody").append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
            var g = svg.selectAll(".arc")
                .data(pie(data))
                .enter().append("g")
                .attr("class", "red");

            g.append("path")
                .attr("d", arc)
                .style("fill", 'red')
                .style('opacity', function (d) {
                    return (parseFloat(d.data.colorfill) == 0) ? 0.1 : 0.2;
                })
//                    .transition()
//                    .ease("exp")
//                    .duration(2000)
//                   // .attrTween("d", tweenPie);


            g.append("text")
            // .transition()
            //.duration(3000)
                .attr("transform", function (d) {
                    return "translate(" + arc.centroid(d) + ")";
                })
                .attr("dy", ".35em")
                .text(function (d) {
                    return d.data.colorfill;
                })


            var pi = Math.PI;
            var defaultSlider =10;

            var scale = d3.scale.linear().domain([min_val, max_val]).range([0, 360]);
            var arc1 = d3.svg.arc()
                .outerRadius(radius - 10)
                .innerRadius(radius - 70)
                .startAngle(scale((defaultSlider.value)) * (pi / 180)) //converting from degs to radians
                .endAngle((scale((defaultSlider.value)) + 1) * (pi / 180)) //just radians


            g.append("path")

                .attr("d", arc1)
                .style('opacity', 0)
                //.transition()
                //.duration(2000)
                //.delay(2000)
                .style('opacity', 1)
                .attr("fill", "blue")


        });


        function tweenPie(b) {
            var i = d3.interpolate({startAngle: 1.1 * Math.PI, endAngle: 1.1 * Math.PI}, b);
            return function (t) {
                return arc(i(t));
            };
        }

        $('#defaultSlider').change(function () {
            console.log('dafa')

          //  update();
        })



        function type(d) {
            d.data = +d.data;
            return d;
        }

    }


    componentDidMount() {

        this.renderDonut();
    }

    render() {
        return (
            <div className="d3Container">
                <div className="svgbody">
                    <input id="defaultSlider" type="range" min="0" max="1" value="0.5" step="0.1" width="100"
                           height="50">
                    </input>
                </div>
            </div>
        );
    }
}

export default DonutChart1;
