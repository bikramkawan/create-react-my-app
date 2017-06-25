import React, {Component} from 'react';
import '../../App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';


import {
    Route,
    Link
} from 'react-router-dom'

class Layout extends Component {
    render() {

        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li name="LinkAbout"><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                <hr/>


                <Route exact path="/" component={Home}/>

                <Route path="/about" render={(props) => (
                    <About {...props} test='hi'/>
                )}/>
                <Route path="/contact" component={Contact}/>
            </div>

        );
    }
}

export default Layout;
