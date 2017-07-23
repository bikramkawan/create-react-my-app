/**
 * Created by bikramkawan on 7/22/17.
 */
import React, {Component} from 'react';
import marked from 'marked';
import * as $ from 'jquery'

class MarkdownPreview extends Component {


    renderText = () => {

        const inputText = $('.inputText').val();
        const renderText = $('.markdownright');
        renderText.html(marked(inputText))

    }

    componentDidMount() {
        const renderText = $('.markdownright');
        const sampleText = $('.inputText').val();
        renderText.html(marked(sampleText));


    }

    render() {
        const sampleText = '# Start typing some markdown text here !\n' +
            'Heading\n=======\n\nSub-heading\n-----------\n \n' +
            '### Another deeper heading\n \nParagraphs are separated\nby a blank line.' +
            '\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\n' +
            'Text attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\n' +
            'Shopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  ' +
            '1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n ' +
            '*[Herman Fassett](https://freecodecamp.com/hermanfassett)*';
        return (

            <div className="markdown">
                <div className="markdownleft">
                    <textarea className="inputText" onChange={this.renderText}>
                        {sampleText}
                    </textarea>
                </div>
                <div className="markdownright"></div>

            </div>




        )


    }


}
export default MarkdownPreview;