import React, {Component} from 'react';
import '../../App.css';


class Header extends Component {

    render() {

        return (

            <div className="hname">{this.props.headerName}</div>

        );
    }
}

export default Header;
