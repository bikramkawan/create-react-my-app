import React, {Component} from 'react';
import '../../App.css';
import Header from '../header/Header';
import Body from '../body/Body'
import Footer from '../footer/Footer'
import {Route} from 'react-router-dom'
import Contact from '../pages/Contact'
import AboutMe from './AboutMe';
import Portfolio from './Portfolio'


const Main = () => (
    <main>
        <Route exact path='/' component={Body}/>
        <Route exact path='/Home' component={Body}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/AboutMe' component={AboutMe}/>
        <Route path='/Portfolio' component={Portfolio}/>
    </main>
)


class Layout extends Component {
    render() {

        const headersNames = [
            {label: 'Home', linkTo: 'Home'},
            {label: 'Portfolio', linkTo: 'Portfolio'},
            {label: 'About Me', linkTo: 'AboutMe'},
            {label: 'Contact Me', linkTo: 'Contact'}];
        return (
            <div>
                <div className="headerContainer">
                    <div className="headerImage">Place holder for Image</div>
                    {headersNames.map((h, i)=><Header key={i} header={h}/>)}
                </div>
                <Main/>
                <Footer/>

            </div>

        );
    }
}

export default Layout;
