import React, {Component} from 'react';
import '../../App.css';
import * as d3 from 'd3';
import {sortBy} from 'lodash'

export const level = {basic: 'Basic', advanced: 'Advanced', medium: 'Medium'};
export const score = {basic: 1, medium: 2, advanced: 3};
export const skills = [
    {label: 'JavaScript', level: level.advanced, score: score.advanced},
    {label: 'D3', level: level.medium, score: score.medium},
    {label: 'TypeScript', level: level.medium, score: score.medium},
    {label: 'Node.js', level: level.basic, score: score.basic},
    {label: 'SCSS', level: level.medium, score: score.medium},
    {label: 'WebGL', level: level.medium, score: score.medium},
    {label: 'HTML5', level: level.medium, score: score.medium},
    {label: 'Unity 3D', level: level.basic, score: score.basic},
    {label: 'Matlab', level: level.medium, score: score.medium},
    {label: 'Java', level: level.basic, score: score.basic},
    {label: 'C#', level: level.basic, score: score.basic},
    {label: 'PHP', level: level.basic, score: score.basic},
    {label: 'MYSQL', level: level.medium, score: score.medium},
    {label: 'Wordpress', level: level.medium, score: score.medium},
    {label: 'Bootstrap', level: level.basic, score: score.basic},
    {label: 'ReactJS', level: level.basic, score: score.basic},

];


class About extends Component {

    renderSkill(skills) {
        const width = 1000;
        const container = d3.select('.skillSets')
            .selectAll('div')
            .data(skills)
            .enter().append('g')
            .classed('skill', true);
        container.append('span')
            .text(function (d) {
                return d.label;

            });
        container.append('div')
            .style('width', function (d) {
                return width / 3 * d.score + 'px'

            }).text(function (d) {
            return d.level;

        });


    }

    componentDidMount() {
        this.renderSkill(skills);
        const myObjects = sortBy(skills.slice(), 'score');
        console.log(myObjects)

    }

    render() {


        return (
            <div className="aboutMe">
                <span style={{
                    'font-size': '30px',
                    color: '#003b5b'
                }}> Skills</span>
                <div className="skillSets"></div>
            </div>
        );
    }
}

export default About;
