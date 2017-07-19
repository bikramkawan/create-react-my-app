/**
 * Created by bikramkawan on 7/17/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'


const mapStateToProps = state => {
    return {
        votingResults: state
    }
}
class VotingResults extends Component {

    constructor(props) {
        super(props);

        this.store = this.props.store;

    }


    render() {
        console.log(this.props.votingResults)
        return (
            <div>
                <span>IOS: {this.props.votingResults.ios}</span>
                <span>Android: {this.props.votingResults.android}</span>
                <span>Windows: {this.props.votingResults.windows}</span>
            </div>


        )

    }


}

export default connect(mapStateToProps)(VotingResults);