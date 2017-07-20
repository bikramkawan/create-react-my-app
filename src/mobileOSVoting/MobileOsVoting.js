/**
 * Created by bikramkawan on 7/17/17.
 */
import React, {Component} from 'react';
import {createStore} from 'redux';
import myApp from './reducers'
import App from './component/App'
import VotingResults from './component/VotingResults'
let store = createStore(myApp, {
    ios : 0,
    android: 0,
    windows: 0
}, window.devToolsExtension())


class MobileOsVoting extends Component {
    render() {
        return (
            <div className="container">
                <App store={store}/>
                <hr/>
                <VotingResults store={store}/>
            </div>

        )
    }
}

export default MobileOsVoting;