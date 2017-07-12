/**
 * Created by bkawan on 7/3/2017.
 */

import React, {Component} from 'react';
import '../../App.css';
import ReactCSSTransitionGroup  from "react-addons-css-transition-group";

class MySkills extends Component {
    constructor(props) {
        super();
    }

    calcWidth() {
        return 40 / 3 * this.props.skills.score;
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="bar"
                transitionAppear={true}
                transitionAppearTimeout={this.props.index * 50}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <div style={{
                    display: 'flex',
                    marginBottom: '5px'
                }}>
                    <div style={{
                        width: '10vw',
                        lineHeight: '20px',
                        alignSelf: 'center',
                        fontSize: '20px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'

                    }}><a className="title" title={this.props.skills.label}>{this.props.skills.label}</a></div>
                    <div style={{
                        width: this.calcWidth() + 'vw'
                    }} className="bar"> {this.props.skills.level}</div>

                </div>
            </ReactCSSTransitionGroup >
        )
    }
}

export default MySkills;