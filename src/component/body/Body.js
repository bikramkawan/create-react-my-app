import React, {Component} from 'react';
import '../../App.css';
import img from './bg.jpg'
import ReactCSSTransitionGroup  from "react-addons-css-transition-group";

class Body extends Component {

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="rotate-scale-up"
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <div className="mainBody">
                    <img src={img} alt={"logo"} className="img"/>
                    <span>
                    Greetings ! This is Bikram from Nepal. I love to travel , hike and make new friends.

                </span>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default Body;
