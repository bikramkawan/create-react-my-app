import React, {Component} from 'react';
import '../App.css';
import Title from './header/Title'

class Header extends Component {

    render() {
        return (
            <Title title={this.props.title}/>
        );
    }
}

export default Header;
