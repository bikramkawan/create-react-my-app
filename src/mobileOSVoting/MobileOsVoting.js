/**
 * Created by bikramkawan on 7/17/17.
 */
import React, {Component} from 'react';
import {createStore} from 'redux';
import myApp from './reducers'
import App from './component/App'
import {connect} from 'react-redux'
import VotingResults from './component/VotingResults'
let store = createStore(myApp)


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


function render() {
    return <MobileOsVoting/>
}


store.subscribe(render)

export default MobileOsVoting;