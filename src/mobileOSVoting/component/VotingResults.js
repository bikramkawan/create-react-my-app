/**
 * Created by bikramkawan on 7/17/17.
 */
import React, {Component} from 'react';

class VotingResults extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.store = this.props.store;

    }

    render() {
        console.log(this.store.getState())
        return (
            <div>
                <span>IOS: {this.store.getState().ios}</span>
                <span>Android: {this.store.getState().android}</span>
                <span>Windows: {this.store.getState().windows}</span>
            </div>


        )

    }


}

export default VotingResults;