/**
 * Created by bikramkawan on 7/31/17.
 */
import React, {Component} from 'react';
import * as $ from 'jquery'




class Calculator extends Component {

    constructor(){
        super();
        this.state = {
            textVal:''

        }

    }


    onClick = ({target:{innerText}})=>{
         this.setState({textVal:this.state.textVal.concat(innerText)});
         $('.result').text(this.state.textVal.concat(innerText))

    }


    render() {
        return (
            <div className="calcContainer">
                <div className="buttonsContainer">
                    <div className="mybutton result">0</div>
                    <div className="mybutton number resetBtn " onClick={this.onClick}>AC</div>
                    <div className="mybutton number " onClick={this.onClick}>+/-</div>
                    <div className="mybutton number" onClick={this.onClick}>%</div>
                    <div className="mybutton operator" onClick={this.onClick}>/</div>
                    <div className="mybutton number" onClick={this.onClick}>7</div>
                    <div className="mybutton number" onClick={this.onClick}>8</div>
                    <div className="mybutton number" onClick={this.onClick}>9</div>
                    <div className="mybutton operator" onClick={this.onClick}>*</div>
                    <div className="mybutton number" onClick={this.onClick}>4</div>
                    <div className="mybutton number" onClick={this.onClick}>5</div>
                    <div className="mybutton number" onClick={this.onClick}>6</div>
                    <div className="mybutton operator" onClick={this.onClick}>-</div>
                    <div className="mybutton number" onClick={this.onClick}>1</div>
                    <div className="mybutton number" onClick={this.onClick}>2</div>
                    <div className="mybutton number" onClick={this.onClick}>3</div>
                    <div className="mybutton operator" onClick={this.onClick}>+</div>
                    <div className="mybutton number zero-btn" onClick={this.onClick}>0</div>
                    <div className="mybutton number dot" onClick={this.onClick}>.</div>
                    <div className="mybutton  operator" onClick={this.onClick}>=</div>
                </div>
            </div>
        )

    }


}

export default Calculator