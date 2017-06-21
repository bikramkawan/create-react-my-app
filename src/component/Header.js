import React, {Component} from 'react';
import '../App.css';
import Title from './header/Title'

class Header extends Component {
    handleChange(evt) {
        const title = evt.target.value;
        this.props.changeTitle(title);
    }

    render() {
        return (
            <div>
                <Title title={this.props.title}/>
                <input onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}

export default Header;
