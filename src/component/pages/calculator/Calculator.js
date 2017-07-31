/**
 * Created by bikramkawan on 7/31/17.
 */
import React, {Component} from 'react';
import * as $ from 'jquery'


class Calculator extends Component {

    constructor() {
        super();
        this.state = {
            textVal: ''

        }

    }


    onResultDisp = () => {

        let results = 0;
        try {

           results = eval(this.state.textVal);
            $('.result').text(results);
            this.setState({textVal: results})

        } catch (e) {

            if (e) {
                $('.result').text('SYNTAX ERROR');
            }
        }

    }


    onClick = ({target:{innerText}})=> {
        if (innerText === 'AC') {
            this.setState({textVal: ''});
            $('.result').text('0');
            return;
        }
        this.setState({textVal: this.state.textVal.toString().concat(innerText)});
        $('.result').text(this.state.textVal.toString().concat(innerText))

    }
    onDelete = () => {
        const temp = this.state.textVal.toString().slice(0, this.state.textVal.length - 1);
        if (temp.length < 1) return;
        this.setState({textVal: temp})
        $('.result').text(temp);
    }


    render() {
        console.log(this.state.textVal)
        return (
            <div className="calcContainer">
                <div className="buttonsContainer">
                    <div className="mybutton result">0</div>
                    <div className="mybutton number resetBtn " onClick={this.onClick}>AC</div>
                    <div className="mybutton number " onClick={this.onDelete}><i className="fa fa-arrow-left"
                                                                                 aria-hidden="true"></i></div>
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
                    <div className="mybutton  operator" onClick={this.onResultDisp}>=</div>
                </div>
            </div>
        )

    }


}

export default Calculator