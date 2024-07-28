import { useState } from "react";


const initialboard = ()=> Array(9).fill(null);

const useTictactoe = ()=>{
    const [board , setboard] = useState(initialboard());
    const [isXNext , setisXNext] = useState(true);

    const WINNING_PATTERN =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    const calculateWinner = (currentBoard)=>{
        for(let i=0;i < WINNING_PATTERN.length; i++){
            const [a,b,c]= WINNING_PATTERN[i];
            if(currentBoard[a] && 
                currentBoard[a]===currentBoard[b] && 
                currentBoard[a]===currentBoard[c]
            ) {
                return currentBoard[a];
            }
        }
        return null;
    };

    
    const handleClick = (index)=>{

        //check winner
        const winner = calculateWinner(board);
        console.log(winner)
        if(winner || board[index])  return

        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setboard(newBoard);
        setisXNext(!isXNext);
    };

    const getStatusMessage = ()=>{
        const winner = calculateWinner(board);
        if(winner) return `player ${winner} wins!`
        if(!board.includes(null))  return `Its a draw!`;
        return `Player ${isXNext ? "X" : "O"} turn `;
    };

    const resetGame = ()=>{
        setboard(initialboard());
        setisXNext(true);
    };

    return {board ,handleClick , calculateWinner, getStatusMessage, resetGame};
}

export default useTictactoe;