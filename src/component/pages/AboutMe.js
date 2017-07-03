import React, {Component} from 'react';
import '../../App.css';
import MySkills from './MySkills'

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

        if (v === sort.asc) {
            const s = skills.slice().sort((a, b) => a.score === b.score ? 0 : +(a.score < b.score) || -1);
            this.setState({skills: s, sort: v});
        }
        if (v === sort.desc) {
            const s = skills.slice().sort((a, b) => a.score === b.score ? 0 : +(a.score > b.score) || -1);
            this.setState({skills: s, sort: v});
        }

    }

    render() {
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
                {this.state.skills.map(d =>
                    <MySkills skills={{label: d.label, level: d.level, score: d.score}}/>)
                }


            </div>
        );
    }
}

export default About;
