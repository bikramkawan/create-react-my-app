/**
 * Created by bikramkawan on 7/17/17.
 */
import React, {Component} from 'react';
import {createStore} from 'redux';
import myApp from './reducers'
import App from './component/App'
import VotingResults from './component/VotingResults'
let store = createStore(myApp)


class MobileOsVoting extends Component {
    render() {
        console.log(store.getState().ios)
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