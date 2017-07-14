/**
 * Created by bikramkawan on 7/13/17.
 */
import React, {Component} from 'react';
import * as d3 from 'd3';
import axios from 'axios';

class LineChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
        }
    }


    componentDidMount() {
        var th = this;
        this.serverRequest =
            axios.get(this.props.source)
                .then(function (result) {
                    console.log(result)
                });


        console.log(this.state)

    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }


    render() {
        return (
            <div className="d3Container">
                <div>
                    <h1>{console.log(this.state)}</h1>

                </div>
            </div>
        );
    }
}

export
default
LineChart;
