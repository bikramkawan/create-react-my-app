import React, {Component} from 'react';
import '../../App.css';

class Title extends Component {

    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}

export default Title;
