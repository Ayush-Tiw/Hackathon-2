import * as React from 'react';
import { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export function TicTacToe() {

    return (
        <div><h1>Fun Game</h1>
        <Board/>
       </div>
    );
}

function Board(){
    const[board,setBoard]=useState([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ])

    const[isXTurn,setIsXTurn]=useState(true)

const decideWinner = (board) => {
    const lines =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let i=0;i<lines.length;i++) {
        const [a,b,c]=lines[i];

        if(board[a]!=null && board[a]===board[b] && board[b]===board[c] ){
            console.log(lines[i],a,b,c);
            console.log(board)
            console.log("Winner",board[a]);
            return board[a];
        }
    }
    return null;
}

const winner=decideWinner(board)

    const handleClick = (index)=>{
console.log(index)
//allow updating unchanges boxex; null means untouched
//If there is no winner && if it is untouched - then update

if(winner===null && board[index]===null){
const boardCopy= [...board];
boardCopy[index]= isXTurn ? "X" :"O"
setBoard(boardCopy);
//changing turn
setIsXTurn(!isXTurn);
}
    }
    const restart = () =>{
        setBoard(
            [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
            ]
        )
        setIsXTurn(true)
    };
    const { width, height } = useWindowSize()
    return(
        <div>
            { winner ? <Confetti width={width} height={height} gravity={0.02}  /> : null}
        <div className="board">
            {board.map((val,index)=><GameBox val={val} onPlayerClick={()=>handleClick(index)} />)}
            {/* <GameBox/>
            <GameBox/>
            <GameBox/>
            <GameBox/>
            <GameBox/>
            <GameBox/>
            <GameBox/>
            <GameBox/>
            <GameBox/> */}
           
        </div>
        { winner ? <h2>Winner is :{winner}</h2> : null}
            <button onClick={restart}>Restart</button>
        </div>
    )
}

function GameBox({val,onPlayerClick}){
    // const[val,setVal]=useState("")
    const styles={
        color: val==="X"? "green":"red",
    }
    return(
        <div style={styles} 
        // onClick={()=>setVal(val==="X" ? "O" :"X")} 
        onClick={onPlayerClick}
        className="game-box">{val}</div>
    )
}