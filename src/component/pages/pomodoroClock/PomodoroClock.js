/**
 * Created by bikramkawan on 8/1/17.
 */
import React, {Component} from 'react';
import * as $ from 'jquery';
class PomodoroClock extends Component {


    constructor() {
        super();
        this.state = {
            breakVal: 2,
            sessionVal: 10,
            isPlay: false,
            isStop: false,
            isPause: false,
            timeStamp: false,
            isSession: false,
            isBreak: false,
            counter: 0
        }
    }


    onClickBreak = ({target:{dataset:{id}}})=> {
        let temp = this.state.breakVal;
        const operator = id === 'minus' ? temp - 1 : temp + 1;
        temp = operator < 1 ? 1 : operator;
        this.setState({breakVal: temp})
        $('.breakText').text(temp);


    }
    onClickSession = ({target:{dataset:{id}}})=> {
        let temp = this.state.sessionVal;
        const operator = id === 'minus' ? temp - 1 : temp + 1;
        temp = operator < 1 ? 1 : operator;
        this.setState({sessionVal: temp})
        $('.sessionText').text(temp);

    }

    oneSecondFunction = () => {

        this.setState({counter: this.state.counter - 1})
        const sec = 60;
        if (this.state.counter <= 0 && this.state.isSession) {
            this.setState({counter: this.state.breakVal * sec, isBreak: true, isSession: false})


        } else if (this.state.counter < this.state.sessionVal * sec && this.state.isSession) {
            const min = Math.floor(this.state.counter / sec);
            const seconds = this.state.counter - min * sec;
            $('.timer').text(`${min}:${seconds}`);
            $('.sessionName').text(`Session`);
            const diff = ((this.state.sessionVal * sec) - this.state.counter + 1) / (this.state.sessionVal * sec) * 100;
            $('.innerCircle').css('height', `${diff}%`)
        }
        else if (this.state.counter < 0 && this.state.isBreak) {
            this.setState({counter: this.state.sessionVal * sec, isBreak: false, isSession: true})


        }
        else if (this.state.counter <= this.state.breakVal * sec && this.state.isBreak) {
            const min = Math.floor(this.state.counter / sec);
            const seconds = this.state.counter - min * sec;
            $('.timer').text(`${min}:${seconds}`)
            $('.sessionName').text(`Break`)
            const diff = ((this.state.breakVal * sec) - this.state.counter + 1) / (this.state.breakVal * sec) * 100;
            $('.innerCircle').css('height', `${100 - diff}%`)

        } else {
            console.log('nth')
        }

    }

    onStart = () => {
        this.setState({isSession: true, isPlay: true, counter: this.state.sessionVal * 60})
        this.setState({timeStamp: setInterval(this.oneSecondFunction, 1000)});
        $('.play').hide();
        $('.pause').show();
        $('.stop').show();
        $('.counterContainer').addClass('isPlay')
        $('.counter').addClass('isPlay')


    }

    onStop = () => {
        this.setState({isSession: false, isPlay: false})
        $('.counterContainer').removeClass('isPlay')
        $('.counter').removeClass('isPlay')
        clearInterval(this.state.timeStamp)
        $('.timer').text('')
        $('.sessionName').text(`Session`)
        $('.play').show();
        $('.pause').hide();
        $('.stop').hide();
        $('.innerCircle').css('height', `0%`)

    }

    onPause = () => {
        this.setState({isPause: !this.state.isPause})
        if (!this.state.isPause) {
            clearInterval(this.state.timeStamp)
        } else {
            this.setState({timeStamp: setInterval(this.oneSecondFunction, 1000)});
        }


    }


    render() {
        return (
            <div className="clockContainer">
                <h1 className="title">Pomodoro Clock</h1>
                <div className="counterContainer">
                    <div className="counter"><p>Break Length</p>
                        <div className="counterWrapper">
                            <div className="minus" onClick={this.state.isPlay ? null : this.onClickBreak}>
                                <i data-id="minus" className="fa fa-minus-square-o fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className="breakText">2</div>
                            <div className="plus" onClick={this.state.isPlay ? null : this.onClickBreak}>
                                <i data-id="plus" className="fa fa-plus-square-o fa-2x" aria-hidden="true"></i></div>
                        </div>

                    </div>
                    <div className="counter transparent"></div>
                    <div className="counter"><p>Session Length</p>
                        <div className="counterWrapper">
                            <div className="minus" onClick={this.state.isPlay ? null : this.onClickSession}>
                                <i data-id="minus" className="fa fa-minus-square-o fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className="sessionText">10</div>
                            <div className="plus" onClick={this.state.isPlay ? null : this.onClickSession}>
                                <i data-id="plus" className="fa fa-plus-square-o fa-2x" aria-hidden="true"></i></div>
                        </div>
                    </div>


                </div>


                <div className="buttons">
                    <span className="play" onClick={this.onStart}>
                        <i className="fa fa-play fa-3x" aria-hidden="true"></i></span>
                    <span className="pause" onClick={this.onPause}>
                        <i className="fa fa-pause fa-3x" aria-hidden="true"></i></span>
                    <span className="stop" onClick={this.onStop}>
                        <i className="fa fa-stop fa-3x" aria-hidden="true"></i></span>
                </div>

                <div className="outerCicle">
                    <p className="sessionName">Press Play</p>
                    <p className="timer"></p>
                    <div className="innerCircle"></div>
                </div>

            </div>

        )

    }


}

export default PomodoroClock;