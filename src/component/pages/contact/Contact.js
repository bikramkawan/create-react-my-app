import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const ContactMe = () => (
    <div className="contactMe">
        <h2>Contact Me</h2>
        <h5>Looking forward to hear from you !</h5>
    </div>
)

const Address = () => (
    <div className="address">
        <div className="list">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <h5>Address</h5>
            <p>Bhaktapur, Nepal</p>
        </div>

        <div className="list">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <h5>Phone</h5>
            <p>+977-9841-XXXXXX</p>
        </div>

        <div className="list">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            <h5>Email</h5>
            <p>bikramkawan@gmail.com</p>
        </div>


    </div>
)

const Form = () => {
    return (<div>
        <form method="POST" action="http://formspree.io/bikramkawan@gmail.com">
            <input type="email" name="email" placeholder="Your email"/>
            <textarea name="message" placeholder="Your message"></textarea>
            <button type="submit">Send</button>
        </form>
    </div>)
}


const clickMe = ({target: {value}}) => (console.log(value) )
const MyList = ({label}) => (<div>
    {console.log(label)}
    {label}
</div>)

const Dumb = ({firstName, lastName}) => (<div>{console.log(lastName, firstName)}</div>)

class Contact extends Component {

    render() {
        const props = {firstName: 'Ben', lastName: 'Hector'};
        return (
            <div>
                <ContactMe/>
                <Address/>
                <Form/>
            </div>


        );
    }
}

export default Contact;
