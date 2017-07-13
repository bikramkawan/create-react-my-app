import React, {Component} from 'react';
import contactimg from './contactbg.jpg'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const ContactMe = () => (
    <div className="contactMe">
        <h2>Contact Me</h2>
        <h4>Let me hear from you!</h4>
    </div>
)

const Address = () => (
    <div className="address">
        <div className="list">
            <i className="fa fa-map-marker fa-3x" aria-hidden="true"></i>
            <h4>Address</h4>
            <p>Bhaktapur, Nepal</p>
        </div>

        <div className="list">
            <i className="fa fa-phone fa-3x" aria-hidden="true"></i>
            <h5>Phone</h5>
            <p>+977-9841-XXXXXX</p>
        </div>

        <div className="list">
            <i className="fa fa-envelope-o fa-3x" aria-hidden="true"></i>
            <h5>Email</h5>
            <p>bikramkawan@gmail.com</p>
        </div>


    </div>
)

const Form = () => {
    return (<div className="formContainer">
        <form method="POST" action="http://formspree.io/bikramkawan@gmail.com" className="form">
            <input type="email" name="email" placeholder="Your email"/>
            <textarea name="message" placeholder="Your message"></textarea>
            <button type="submit">Send</button>
        </form>
    </div>)
}



class Contact extends Component {

    render() {

        return (
            <div className="contactContainer">
                <div className="left">
                    <ContactMe/>
                    <Address/>
                    <Form/>
                </div>

                <div className="right">
                    <img style={{width: '100%', height: '100%'}} src={contactimg} alt={"nu"}/>
                </div>
            </div>


        );
    }
}

export default Contact;
