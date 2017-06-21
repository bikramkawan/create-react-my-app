import React, {Component} from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
    constructor() {
        super();
        this.state = {title: 'Welcome Bikram'};
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        //   setTimeout(()=>this.setState({title: "Welcom Kawan"}), 3000);
        return (
            <div className="App">
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                {/*<Header title='Another Title'/>*/}
                <Footer/>
            </div>
        );
    }
}

export default Layout;
