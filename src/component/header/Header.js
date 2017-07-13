import React, {Component} from 'react';

import {Link} from 'react-router-dom'


class Header extends Component {

    render() {
        return (
            <div>
                <div className="hname">
                    <Link to={'/' + this.props.header.linkTo}><span>
                        {this.props.header.label}
                              </span>
                    </Link>
                </div>


            </div>
        );
    }
}

export default Header;
