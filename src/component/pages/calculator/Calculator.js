/**
 * Created by bikramkawan on 7/31/17.
 */
import React, {Component} from 'react';


class Calculator extends Component {


    render() {

        return(
            <div className="calcContainer">
                <div className="buttonsContainer">
                    <div className="mybutton result">0</div>
                    <div className="mybutton number resetBtn">AC</div>
                    <div className="mybutton number ">+/-</div>
                    <div className="mybutton number">%</div>
                    <div className="mybutton operator">/</div>
                    <div className="mybutton number">7</div>
                    <div className="mybutton number">8</div>
                    <div className="mybutton number">9</div>
                    <div className="mybutton operator">*</div>
                    <div className="mybutton number">4</div>
                    <div className="mybutton number">5</div>
                    <div className="mybutton number">6</div>
                    <div className="mybutton operator">-</div>
                    <div className="mybutton number">1</div>
                    <div className="mybutton number">2</div>
                    <div className="mybutton number">3</div>
                    <div className="mybutton operator">+</div>
                    <div className="mybutton number zero-btn">0</div>
                    <div className="mybutton number dot">.</div>
                    <div className="mybutton  operator">=</div>
                </div>
            </div>
        )

    }


}
export  default Calculator