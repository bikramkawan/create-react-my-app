import React, {Component} from 'react';
import '../../../styles/App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
        <MyList label="label1"/>
        <MyList label="label2"/>
    </div>
)

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
                <h1 className="animated jello"> Hello Contact </h1>
                <About/>
                <Dumb {...props}/>
                <div onClick={clickMe} dangerouslySetInnerHTML={{
                    __html: 'test'
                }}></div>
            </div>


        );
    }
}

export default Contact;
