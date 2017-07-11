import React, {Component} from 'react';
import '../../App.css';
import img from './bg.jpg'


class Body extends Component {


    componentDidMount() {
        initializeTypingText(0); //Pick first word from array as default
    }

    render() {

        return (

            <div className="mainBody">
                <img src={img} alt={"logo"} className="img"/>
                <span className="typeWrite">
                </span>
                <span>
                    I'm Bikram & Developer.
                </span>

            </div>

        );
    }
}


function startTypingText(text, i, fnCallback) {

    if (i < (text.length)) {
        const selector = document.querySelector(".typeWrite");
        if (selector === null || selector === undefined) return;
        selector.innerHTML = text.substring(0, i + 1) +
            '<span aria-hidden="true"></span>';
        setTimeout(function () {
            startTypingText(text, i + 1, fnCallback)
        }, 150);
    }
    else if (typeof fnCallback === 'function') {
        setTimeout(fnCallback, 700);
    }
}


function initializeTypingText(i) {
    const textScrolls = ["Developer", "Nepali", "&#127932; Opeth "];
    if (textScrolls[i] === undefined) return initializeTypingText(0);

    if (i < textScrolls[i].length) {

        startTypingText(textScrolls[i], 0, function () {

            initializeTypingText(i + 1);
        });
    }
}


export default Body;
