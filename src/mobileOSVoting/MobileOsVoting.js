/**
 * Created by bikramkawan on 7/17/17.
 */
import React, {Component} from 'react';

import myApp from './reducers'
import App from './component/App'
import VotingResults from './component/VotingResults'
import { createStore, compose } from 'redux';
const enhancer = compose(
    window.devToolsExtension ? window.devToolsExtension({
        name: 'MyApp', actionsBlacklist: ['REDUX_STORAGE_SAVE']
    }) : noop => noop
);
let store = createStore(myApp, enhancer)


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