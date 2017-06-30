import React, {Component} from 'react';
import '../../App.css';
import img from './bg.jpg'


class Body extends Component {

    render() {
        return (
            <div className="mainBody">
                    <img src={img} alt={"logo"} className="img"/>

                <span>
                    Greetings ! This is Bikram from Nepal. I love to travel , hike and make new friends.

                </span>
            </div>
        );
    }
}

export default Body;
