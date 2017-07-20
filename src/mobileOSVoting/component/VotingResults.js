/**
 * Created by bikramkawan on 7/17/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'


const mapStateToProps = state => {
    return { ...state }
}
class VotingResults extends Component {

    constructor(props) {
        super(props);

        this.store = this.props.store;

    }


    calcWidth(name) {
        return `${this.props[name]}%`
    }


    render() {
        return (
            <div className="results">
                <div className="list">
                    <div className="text">IOS</div>
                    <div className="bar" style={{width: this.calcWidth('ios')}}>{this.calcWidth('ios')}</div>
                </div>
                <div className="list">
                    <div className="text">Android</div>
                    <div className="bar"
                         style={{width: this.calcWidth('android')}}>{this.calcWidth('android')}</div>
                </div>
                <div className="list">
                    <div className="text">Windows</div>
                    <div className="bar"
                         style={{width: this.calcWidth('windows')}}>{this.calcWidth('windows')}
                    </div>
                </div>

            </div>


        )

    }


}
export default connect(mapStateToProps)(VotingResults);