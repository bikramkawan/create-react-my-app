/**
 * Created by bikramkawan on 7/17/17.
 */
import React, {Component} from 'react';
import {voteIos, voteAndroid, voteWindows} from '../actions'

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
            <div>
                <div>
                    <h2>What is your favorite mobile ?</h2>
                    <h4>Click on the logos below to vote!</h4>
                    <br />
                    <div className="row">
                        <div className="col-xs-offset-3 col-xs-2" onClick={this.onClickIos}> Vote IOS
                        </div>
                        <div className="col-xs-offset-3 col-xs-2" onClick={this.onClickAndroid}> Vote Android
                        </div>
                        <div className="col-xs-offset-3 col-xs-2" onClick={this.onClickWindows}> Vote Windows
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

export default App;