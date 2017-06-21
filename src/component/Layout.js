import React, {Component} from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
    constructor() {
        super();
        this.state = {name: 'Bikram'};
    }

    render() {
        setTimeout(()=>this.setState({name:"Kawan"}),3000)
        return (
            <div className="App">
                {this.state.name}
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default Layout;
