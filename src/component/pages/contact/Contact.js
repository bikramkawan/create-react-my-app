import React, {Component} from 'react';
import contactimg from './contactbg.jpg';

const ContactMe = () => (
    <div className="contactMe">
        <span><h2>Contact Me</h2>
            <div className="socialIcons">
                <a href="https://twitter.com/bikramkawan">
                    <i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/bikramkawan/">
                    <i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                <a href="http://www.github.com/bikramkawan">
                    <i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
            </div>
        </span>
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


const Map = () => {
    return (
        <div className="map">
            <iframe title='map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.644144614193!2d85.43532381417766!3d27.666479533895497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0554ac31b83b%3A0x76de09be0d283ef7!2sJagati-2%2C+Bhaktapur!5e0!3m2!1sen!2sat!4v1499967120265"
                    frameBorder="0" allowFullScreen></iframe>

        </div>

    )
}


const Form = () => {
    return (<div className="formContainer">
        <form method="POST" action="http://formspree.io/bikramkawan@gmail.com" className="form">
            <input type="email" name="email" placeholder="Your email"/>
            <textarea name="message" placeholder="Your message"></textarea>
            <button type="submit" className="btn">Send</button>
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
                    <Map/>
                </div>

            </div>


        );
    }
}

export default Contact;
