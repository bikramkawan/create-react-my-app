/**
 * Created by bikramkawan on 8/5/17.
 */
import React, {Component} from 'react';
import * as $ from 'jquery';


const audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');

audioElement.addEventListener('ended', function () {
    this.play();
}, false);


class SimonGame extends Component {

    constructor() {
        super();
        this.state = {
            isGameStarted: false,
            counter: 0,
            timeStamp: false,
            pattern: [],
            userPattern: [],
            runtime: 0,
            isGameOver: false,
            isStrictMode: false,
            isPlaying: false
        }

    }


    cssActive = (randId) => {

        $(`div[data-id=${randId}]`).removeClass('active');
        audioElement.pause();
    }

    oneSecondFunction = () => {
        const dataIds = [0, 1, 2, 3]
        const randId = dataIds[Math.floor(Math.random() * dataIds.length)];
        const count = this.state.counter + 1;
        const currentStatePattern = this.state.pattern;
        currentStatePattern.push(randId);
        this.setState({counter: count})
        this.setState({pattern: currentStatePattern});

        $(`div[data-id=${randId}]`).addClass('active')
        audioElement.play();
        setTimeout(this.cssActive.bind(this, randId), 1000);
        if (this.state.counter > this.state.runtime) {
            clearInterval(this.state.timeStamp)
        }

    }

    checkPatternMatch() {

        const res = this.state.pattern.map((d, i)=> d === this.state.userPattern[i])
            .filter((d)=>d === true)
        if (res.length === this.state.pattern.length && this.state.runtime === 19) {
            $(`.top`).text(`You Win`);
            clearInterval(this.state.timeStamp)
        }

        if (res.length === this.state.pattern.length) {
            $(`.score`).text(`${this.state.runtime + 1}`)
            this.setState({
                timeStamp: setInterval(this.oneSecondFunction, 2000),
                runtime: this.state.runtime + 1,
                counter: 0,
                pattern: [],
                userPattern: []
            });
        } else if (res.length !== this.state.pattern.length && this.state.isStrictMode) {
            this.setState({isGameOver: true})
            $(`.top`).text(`Game Over`)

        } else {
            this.setState({
                timeStamp: setInterval(this.oneSecondFunction, 2000),
                runtime: this.state.runtime,
                counter: 0,
                pattern: [],
                userPattern: []
            });
        }


    }


    onClickColor = ({target:{dataset:{id}}}) => {
        const userPatern = this.state.userPattern;
        if (userPatern.length < this.state.runtime + 1) {
            userPatern.push(parseInt(id));
        }

        this.setState({userPattern: userPatern});
        if (this.state.userPattern.length === this.state.pattern.length) {
            this.checkPatternMatch();
        }

    }

    onStartGame = () => {

        this.setState({timeStamp: setInterval(this.oneSecondFunction, 2000), runtime: 0, isPlaying: true});
        $('.grid').addClass('gameOn')

    }

    onStrictMode = () => {

        this.setState({isStrictMode: true})
    }

    highlightMe = ({target:{dataset:{id}}}) => {
        $(`div[data-id=${id}]`).addClass('active');
        audioElement.play();
    }
    removeHighlight = ({target:{dataset:{id}}}) => {
        $(`div[data-id=${id}]`).removeClass('active');
        audioElement.pause();
    }

    gameOn = ()=> {
        if (!this.state.isGameStarted) {
            this.setState({isGameStarted: true})
            $('.middle').addClass('gameOn');
            $('.score').show().text('--');
            $('.bottom').text('Reset');
        } else {
            this.setState({isGameStarted: false, isPlaying: false})
            $('.middle').removeClass('gameOn');
            $('.score').text('');
            $('.bottom').text('Play');
        }

    }

    render() {
        return (<div className="simonContainer">
            <div className="mainContainer">
                <div className="grid">
                    <div data-id="0" className="innerCircle red inactive"
                         onClick={this.state.isGameStarted ? this.onClickColor : null}
                         onMouseDown={this.state.isPlaying ? this.highlightMe : null}
                         onMouseUp={this.state.isPlaying ? this.removeHighlight : null}></div>
                    <div data-id="1" className="innerCircle blue inactive"
                         onClick={this.state.isGameStarted ? this.onClickColor : null}
                         onMouseDown={this.state.isPlaying ? this.highlightMe : null}
                         onMouseUp={this.state.isPlaying ? this.removeHighlight : null}></div>
                    <div data-id="2" className="innerCircle green inactive"
                         onClick={this.state.isGameStarted ? this.onClickColor : null}
                         onMouseDown={this.state.isPlaying ? this.highlightMe : null}
                         onMouseUp={this.state.isPlaying ? this.removeHighlight : null}></div>
                    <div data-id="3" className="innerCircle yellow inactive"
                         onClick={this.state.isGameStarted ? this.onClickColor : null}
                         onMouseDown={this.state.isPlaying ? this.highlightMe : null}
                         onMouseUp={this.state.isPlaying ? this.removeHighlight : null}></div>
                </div>
                <div className="center">
                    <div className="top">Simon</div>
                    <div className="middle">
                        <div className="section score"></div>
                        <div className="section start"
                             onClick={this.state.isGameStarted ? this.onStartGame : null}>
                            Start
                        </div>
                        <div className="section strict"
                             onClick={this.state.isGameStarted ? this.onStrictMode : null}>
                            Strict
                        </div>
                    </div>
                    <div className="bottom" onClick={this.gameOn}>Play</div>

                </div>
            </div>


        </div>)


    }

}

export  default SimonGame