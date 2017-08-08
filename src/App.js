import React, {Component} from 'react';
import Header from './component/header/Header';
import Body from './component/body/Body'
import Footer from './component/footer/Footer'
import {Route} from 'react-router-dom'
import Contact from './component/pages/contact/Contact'
import AboutMe from './component/pages/aboutme/AboutMe';
import Portfolio from './component/pages/portfolio/Portfolio'


const Main = () => (
    <div className="wrapper">
        <Route exact path='/' component={Body}/>
        <Route exact path='/Home' component={Body}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/AboutMe' component={AboutMe}/>
        <Route path='/Portfolio' component={Portfolio}/>


    </div>
)


class App extends Component {
    render() {

        const headersNames = [
            {label: 'Home', linkTo: 'Home'},
            {label: 'Portfolio', linkTo: 'Portfolio'},
            {label: 'About Me', linkTo: 'AboutMe'},
            {label: 'Contact Me', linkTo: 'Contact'}];
        return (
            <div className="root">
                <div className="headerContainer">

                    {headersNames.map((h, i)=><Header key={i} header={h}/>)}
                </div>
                <Main/>
                <Footer/>

            </div>

        );
    }
}

export default App;
