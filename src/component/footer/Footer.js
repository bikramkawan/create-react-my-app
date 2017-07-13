import React, {Component} from 'react';

import footerImg from './footer.png'
class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <img src={footerImg} alt={"logo"} className="footerimg"/>
                <span>
                   Copyright: Bikram Kawan 2017.
                    
                </span>
            </div>
        );
    }
}

export default Footer;
