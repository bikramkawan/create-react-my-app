import React, {Component} from 'react';
import '../../App.css';
import Header from '../header/Header';

class Layout extends Component {
    render() {

        const headersNames = ['Home', 'Portfolio', 'About Me', 'Contact Me'];
        return (
            <div>
                <div className="headerContainer">
                    <div className="headerImage">Place holder for Image</div>
                    {headersNames.map(hName=><Header headerName={hName} />)}
                </div>


            </div>

        );
    }
}

export default Layout;
