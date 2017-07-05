import React, {Component} from 'react';
import '../../App.css';
import ReactCSSTransitionGroup  from "react-addons-css-transition-group";

class Contact extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="rotate-scale-up"
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <h1> Hello Contact </h1>
            </ReactCSSTransitionGroup>
        );
    }
}

export default Contact;
