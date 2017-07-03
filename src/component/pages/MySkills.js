/**
 * Created by bkawan on 7/3/2017.
 */

import React, {Component} from 'react';
import '../../App.css';

class MySkills extends Component {

    calcWidth() {
        return 1000 / 3 * this.props.skills.score;
    }

    render() {
        return <div style={{
            display:'flex',
            'margin-bottom':'5px'
        }}>
            <span style={{
                width: '10%',
                'line-height': '20px',
                'align-self': 'center',
                'font-size': '20px'

            }}>{this.props.skills.label}</span>
            <div style={{
                background: 'lightskyblue',
                width: this.calcWidth() + 'px'
            }}> {this.props.skills.level}</div>
        </div>

    }
}

export default MySkills;