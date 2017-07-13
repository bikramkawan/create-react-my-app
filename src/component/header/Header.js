import React, {Component} from 'react';

import {NavLink} from 'react-router-dom'


class Header extends Component {

    render() {
        return (
            <div>
                <div className="hname">
                    <NavLink to={'/' + this.props.header.linkTo} activeClassName="test">

                        {this.props.header.label}

                    </NavLink>
                </div>


            </div>
        );
    }
}

export default Header;
