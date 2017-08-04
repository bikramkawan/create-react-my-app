/**
 * Created by bikramkawan on 8/3/17.
 */
import React, {Component} from 'react';
import * as $ from 'jquery';

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

class TicTacToe extends Component {

    constructor() {
        super();
        this.state = {
            isPlayer1Move: false,
            isPlayer2Move: false,
            isGameOver: false,
            isSingleMode: false,
            symbol: {},
            isGameStarted: false

        }
    }

    getBoardValue() {

        const allDiv = Array.from($('.ticcol'));
        const textVal = allDiv.map((d)=>d.innerText);
        const xIndices = textVal.map((d, i)=> (d === 'X') ? i : -1).filter((e)=>e !== -1);
        const oIndices = textVal.map((d, i)=> (d === 'O') ? i : -1).filter((e)=>e !== -1);

        if (xIndices.length + oIndices.length === 9) {
            return {result: 'Draw', player: ''}
        }

        const xTruthValues = [];
        const oTruthValues = [];
        winCombos.forEach((d)=> {
            const tempX = d.every((e)=> xIndices.includes(e))
            xTruthValues.push(tempX)
            const tempO = d.every((e)=> oIndices.includes(e))
            oTruthValues.push(tempO)

        });
        const checkIfXWinner = xTruthValues.some((d)=>d === true);
        const checkIfOWinner = oTruthValues.some((d)=>d === true);
        if (checkIfXWinner) {
            return {result: 'Win', player: 'X'}

        } else if (checkIfOWinner) {
            return {result: 'Win', player: 'O'}

        }
    }

    prepareResult(getResult) {
        if (getResult.result === 'Win') {
            $('.selectMode').text(`Player ${getResult.player} is Winner`)
        }
        if (getResult.result === 'Draw') {
            $('.selectMode').text(`Draw`)
        }
        $('.board').addClass('isGameOver')

    }


    onClickBoard = ({target:{dataset:{id}}}) => {

        const innerTextVal = $(`div[data-id=${id}]`).text();
        if (innerTextVal.length === 0 && this.state.isPlayer1Move) {
            $(`div[data-id=${id}]`).text(this.state.symbol.player1);
            this.setState({isPlayer1Move: false});
            this.setState({isPlayer2Move: true});
            $('.selectMode').text('Player 2 Turn')
        }
        if (!this.state.isSingleMode) {
            if (innerTextVal.length === 0 && this.state.isPlayer2Move) {
                $(`div[data-id=${id}]`).text(this.state.symbol.player2)
                this.setState({isPlayer1Move: true});
                this.setState({isPlayer2Move: false});
                $('.selectMode').text('Player 1 Turn')
            }

        } else {
            const allDiv = Array.from($('.ticcol'));
            const textVal = allDiv.map((d)=>d.innerText);
            const xIndices = textVal.map((d, i)=> (d.length === 0) ? i : -1).filter((e)=>e !== -1);
            const random = xIndices[Math.floor(Math.random() * xIndices.length)];
            $(`div[data-id=${random}]`).text(this.state.symbol.player2)
            this.setState({isPlayer1Move: true});
            this.setState({isPlayer2Move: false});
            $('.selectMode').text('Player 1 Turn')

        }

        const getResult = this.getBoardValue();
        if (getResult !== undefined) {
            this.setState({isGameOver: true});
            this.prepareResult(getResult)
        }
    }


    resetBoard = () => {
        this.setState({
            isPlayer1Move: false,
            isPlayer2Move: false,
            isGameOver: false
        });
        $('.ticcol').text('');
        $('.dispResult').text('');
        $('.board').css('display', 'none');
        $('.selectMode').text('Select Mode :');
        $('.mode').show();


    }

    onClickMode = ({target:{className}}) => {
        if (className === 'single') {
            this.setState({isSingleMode: true})
        } else {
            this.setState({isSingleMode: false})
        }


        $('.mode').hide();
        $('.selectMode').text('Select Symbol');
        $('.symbolSelect').css('display', 'flex');
        $('.board').removeClass('isGameOver')

    }

    onClickSymbol = ({target:{innerText}}) => {

        if (innerText === 'X') {
            this.setState({symbol: {player1: 'X', player2: 'O'}, isPlayer1Move: true});

        }
        if (innerText === 'O') {
            this.setState({symbol: {player1: 'O', player2: 'X'}, isPlayer1Move: true});
        }

        $('.symbolSelect').css('display', 'none');
        $('.board').css('display', 'flex');

        $('.selectMode').text(`Player ${innerText} turn`);

    }


    render() {
        return (
            <div className="tictacContainer image-reset-gray-hi"><h1 className="title">Tic Tac Toe</h1>
                <div className="result">
                    <div className="dispResult"></div>
                    <div className="selectMode">
                        Select Mode:
                    </div>
                    <div className="mode">
                        <span className="single" onClick={this.onClickMode}>Single Player</span>
                        <span className="multi" onClick={this.onClickMode}>Multi Player</span>
                    </div>
                    <div className="symbolSelect">
                        <span className="single" onClick={this.onClickSymbol}>X</span>
                        <span className="multi" onClick={this.onClickSymbol}>O</span>
                    </div>
                    <span onClick={this.resetBoard}><i className="fa fa-refresh fa-3x" aria-hidden="true"></i></span>

                </div>


                <div className="board">

                    <div className="ticrow">
                        <div data-id='0' className="ticcol"
                             onClick={this.state.isGameOver ? null : this.onClickBoard}></div>
                        <div data-id='1' className="ticcol"
                             onClick={this.state.isGameOver ? null : this.onClickBoard}></div>
                        <div data-id='2' className="ticcol"
                             onClick={this.state.isGameOver ? null : this.onClickBoard}></div>
                    </div>

                    <div className="ticrow">
                        <div data-id='3' className="ticcol"
                             onClick={this.state.isGameOver ? null : this.onClickBoard}></div>
                        <div data-id='4' className="ticcol"
                             onClick={this.state.isGameOver ? null : this.onClickBoard}></div>
                        <div data-id='5' className="ticcol"
                             onClick={this.state.isGameOver ? null : this.onClickBoard}></div>
                    </div>
                    <div className="ticrow">
                        <div data-id='6' className="ticcol"
                             onClick={this.state.isGameOver ? null : this.onClickBoard}></div>
                        <div data-id='7' className="ticcol"
                             onClick={this.state.isGameOver ? null : this.onClickBoard}></div>
                        <div data-id='8' className="ticcol"
                             onClick={this.state.isGameOver ? null : this.onClickBoard}></div>
                    </div>


                </div>


            </div>

        )

    }


}

export default TicTacToe;