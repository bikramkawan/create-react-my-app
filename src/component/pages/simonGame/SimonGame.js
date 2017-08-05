/**
 * Created by bikramkawan on 8/5/17.
 */
import React, {Component} from 'react';
import * as $ from 'jquery';

class SimonGame extends Component {

    constructor() {

        super();

    }

    render() {
        return (<div className="simonContainer">
            <div className="mainContainer">
                <div className="grid">
                    <div className="innerCircle red"></div>
                    <div className="innerCircle blue"></div>
                    <div className="innerCircle green"></div>
                    <div className="innerCircle yellow"></div>
                </div>
                <div className="center">
                    <div className="top">Simon</div>
                    <div className="middle">
                        <div className="section score">22</div>
                        <div className="section start">Start</div>
                        <div className="section strict">Strict</div>
                    </div>
                    <div className="bottom">On</div>

                </div>
            </div>


        </div>)


    }

}

export  default SimonGame