/**
 * Created by bikramkawan on 7/17/17.
 */
import React, {Component} from 'react';
import {voteIos, voteAndroid, voteWindows} from '../actions'
import ios from '../assets/ios.png';
import android from '../assets/android.png';
import windows from '../assets/windows.png';


class App extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;

    }

    onClickIos = () => {
        this.store.dispatch(voteIos());
    }

    onClickAndroid = () => {

        this.store.dispatch(voteAndroid());
    }

    onClickWindows = () => {

        this.store.dispatch(voteWindows());
    }


    render() {

        return (
            <div className="votingwrapper">
                <h1 className="title">What is your favorite mobile ?</h1>
                <h4>Click on the logos below to vote!</h4>
                <br />
                <div className="optionContainer">
                    <div className="ositem" onClick={this.onClickIos}>
                        <img src={ios} alt="IOS"></img>
                    </div>
                    <div className="ositem" onClick={this.onClickAndroid}>
                        <img src={android} alt="ANdroid"></img>
                    </div>
                    <div className="ositem" onClick={this.onClickWindows}>
                        <img src={windows} alt="Windows"></img>
                    </div>
                </div>
            </div>

        )

    }

}

export default App;