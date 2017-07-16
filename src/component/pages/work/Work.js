/**
 * Created by bikramkawan on 7/16/17.
 */
import React, {Component} from 'react';
class Work extends Component {


    render() {

        return (
            <div className="work">
                <div className="left">
                    <div className="list">I am Left</div>

                    <div className="hideMe">
                        <span>
                         <i className="fa fa-bars" aria-hidden="true"></i>
                        </span></div>
                </div>
                <div className="right">I am right</div>


            </div>


        )
    }


}

export default Work;
