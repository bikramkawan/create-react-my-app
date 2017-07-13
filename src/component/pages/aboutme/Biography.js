import React, {Component} from 'react';
import '../../../styles/App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const clickMe = ({target: {value}}) => (console.log(value) )
const MyList = ({label}) => (<div>
    {console.log(label)}
    {label}
</div>)

const Dumb = ({firstName, lastName}) => (<div>{console.log(lastName, firstName)}</div>)

class Biography extends Component {

    render() {
        return (
            <div className="bioContainer">
                <div><h2>ABOUT ME</h2>
                    <h4>Bikram Kawan, Graduate Student</h4>
                </div>
                <div className="description"><p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p></div>

                <div className="myinfo">
                    <div className="infoList"><h4>Name:</h4> <h5>Bikram Kawan</h5></div>
                    <div className="infoList"><h4>Citizen:</h4> <h5>Nepal</h5></div>
                    <div className="infoList"><h4>Residence:</h4> <h5>Bhaktapur</h5></div>
                    <div className="infoList"><h4>Crazy: </h4> <h5>Opeth</h5></div>
                </div>
                <div className="serviceContainer"><h2>MY SERVICES</h2></div>
                <div className="myServices">
                    <div className="slist">
                        <span><i className="fa fa-bar-chart fa-5x" aria-hidden="true"></i></span>
                        <p>Data Visualization</p>
                    </div>
                    <div className="slist">
                        <span><i className="fa fa-magic fa-5x" aria-hidden="true"></i></span>
                        <p>Automation</p>
                    </div>
                    <div className="slist">
                        <span><i className="fa fa-server fa-5x" aria-hidden="true"></i></span>
                        <p>System Administration</p>
                    </div>
                    <div className="slist">
                        <span><i className="fa fa-cogs fa-5x" aria-hidden="true"></i></span>
                        <p>Machine Learning</p>
                    </div>
                    <div className="slist">
                        <span><i className="fa fa-wordpress fa-5x" aria-hidden="true"></i></span>
                        <p>Wordpress</p>
                    </div>
                </div>


            </div>


        );
    }
}

export default Biography;
