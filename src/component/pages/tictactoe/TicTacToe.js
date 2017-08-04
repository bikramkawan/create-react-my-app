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
            isGameOver: false

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
            $('.dispResult').text(`Player ${getResult.player} is Winner`)
        }
        if (getResult.result === 'Draw') {
            $('.dispResult').text(`Draw`)
        }
        $('.board').addClass('isGameOver')

    }


    onClickBoard = ({target:{dataset:{id}}}) => {

        if (!this.state.isPlayer1Move && !this.state.isPlayer2Move) {
            this.setState({isPlayer1Move: true});
        }

        const innerTextVal = $(`div[data-id=${id}]`).text();
        if (innerTextVal.length === 0 && this.state.isPlayer1Move) {
            $(`div[data-id=${id}]`).text('X');
            this.setState({isPlayer1Move: false});
            this.setState({isPlayer2Move: true});
        }
        if (innerTextVal.length === 0 && this.state.isPlayer2Move) {
            $(`div[data-id=${id}]`).text('O')
            this.setState({isPlayer1Move: true});
            this.setState({isPlayer2Move: false});

        }

        const getResult = this.getBoardValue();

        if (getResult !== undefined) {
            this.setState({isGameOver: true})
            console.log(getResult)
            this.prepareResult(getResult)
        }


    }

    resetBoard = () => {

        this.setState({
            isPlayer1Move: false,
            isPlayer2Move: false,
            isGameOver: false
        })
        $('.ticcol').text('');
        $('.dispResult').text('');
        $('.board').removeClass('isGameOver');

    }

    render() {

        return (
            <div className="tictacContainer image-reset-gray-hi"><h1>Tic Tac Toe</h1>
                <div className="result"><div className="dispResult"></div>
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