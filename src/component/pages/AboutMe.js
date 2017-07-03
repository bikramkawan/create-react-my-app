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
            skills: skills,
            sortByName: null
        };

    }

    onSortByValue(evt) {
        const v = evt.target.className;
        if (v === 'fa fa-sort-amount-asc fa-fw fa-2x') {
            const s = skills.slice().sort((a, b) => a.score === b.score ? 0 : +(a.score < b.score) || -1);
            this.setState({skills: s, sort: sort.asc});
        } else if (v === 'fa fa-sort-amount-desc fa-fw fa-2x') {
            const s = skills.slice().sort((a, b) => a.score === b.score ? 0 : +(a.score > b.score) || -1);
            this.setState({skills: s, sort: sort.desc});
        }


    }

    onSortByName(evt) {
        this.setState({sortByName: !this.state.sortByName});
        if (this.state.sortByName) {
            const s = skills.slice().sort((a, b) => a.label.localeCompare(b.label));
            this.setState({skills: s, sort: null});
        } else {
            const s = skills.slice().sort((a, b) => b.label.localeCompare(a.label));
            this.setState({skills: s, sort: null});

        }


    }


    renderSortIcon() {
        if (this.state.sort === sort.asc) {
            const sortIcon = <a title=" Sort Ascending" onClick={this.onSortByValue.bind(this)}>
                <i className={`fa fa-sort-amount-desc fa-fw fa-2x`} aria-hidden="true"></i>
            </a>

            return sortIcon;
        } else {
            const sortIcon = <a title=" Sort Descending" onClick={this.onSortByValue.bind(this)}>
                <i className={`fa fa-sort-amount-asc fa-fw fa-2x`} aria-hidden="true"></i>
            </a>
            return sortIcon;
        }
    }

    render() {
        return (
            <div className="aboutMe">
                <span style={{
                    'font-size': '30px',
                    color: '#003b5b',
                    'margin-right': '15px',
                    cursor: 'pointer'
                }} onClick={this.onSortByName.bind(this)}> Skills</span>
                {this.renderSortIcon()}
                {this.state.skills.map(d =>
                    <MySkills skills={{label: d.label, level: d.level, score: d.score}}/>)
                }


            </div>
        );
    }
}

export default About;
