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
const sort = {asc: 'asc', desc: 'desc'};


class MySkills extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return <div>
            <div className="skillSets">
                {this.props.skillsObj.sort}
               </div>
        </div>;
    }
}

class About extends Component {

    constructor() {
        super();
        this.state = {
            sort: null,
            skills: skills
        };

    }

    onClick(evt) {
        const v = evt.target.value;
        if (v == sort.asc) {
            this.setState({skills: skills, sort: v});
        }
        if (v == sort.desc) {
            this.setState({skills: [skills[0]], sort: v});
        }

    }

    render() {

        let myskill = 'ghjkgkk';
        if (this.state.sort == sort.asc) {
            console.log(this.state, 'ascrender')
            myskill = (<MySkills skillsObj={{'skills': this.state.skills, sort: this.state.sort}}/>);

        }
        if (this.state.sort == sort.desc) {
            console.log(this.state, 'descrendr')
            myskill = (<MySkills skillsObj={{'skills': this.state.skills, sort: this.state.sort}}/>);

        }

        return (
            <div className="aboutMe">
                <span style={{
                    'font-size': '30px',
                    color: '#003b5b'
                }}> Skills</span>
                <select onChange={this.onClick.bind(this)}>
                    <option value=''>SortMe</option>
                    <option value='asc'>ASC</option>
                    <option value='desc'>Desc</option>
                </select>
                {myskill}

            </div>
        );
    }
}

export default About;
