import React, { useReducer, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import "./App.css";

// Let's Start the game initial stage:

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
  winner: null,
  openDialog: false,
};

//reducer function to manage satae updates based on the dispatched CardActionArea

function reducer(state, action) {
  switch (action.type) {
    case "make_move":
      if (state.board[action.index] || state.winner) {
        //Prevents move if cell is alredy filled or game as awinner
        return state;
      }
      const boardCopy = [...state.board];
      boardCopy[action.index] = state.xIsNext ? "X" : "O";
      const winner = calculateWinner(boardCopy);
      const isBoardFull = boardCopy.every((cell) => cell !== null);

      return {
        ...state,
        board: boardCopy,
        xIsNext: !state.xIsNext,
        winner: winner,
        openDialog: !!winner || isBoardFull, // open the dialog is there is a winner or draw
      };

    case "rest":
      return { ...initialState, board: Array(9).fill(null) }; //reset the game itself

    case "close_dialog":
      return { ...state, openDialog: false }; //Close the dialog
    default:
      throw new Error("Unhandle action type");
  }
}
// It is helper function to determine the winner

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [7, 8, 9], // Rows

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], //coloums

    [0, 4, 8],
    [2, 4, 6], //Diagnosis
  ];

  for (let line of lines) {
    const [a, b, c] = line; // [0,1,2]==> a=0, b=1, c=2
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function TicTacToe() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="game">
        <Typography variant="h5" component="h2">
          Player 1: X
        </Typography>

        <Typography variant="h5" component="h2">
          Player 2: O
        </Typography>

        <Grid
          container
          spacing={2}
          justifyContent={"center"}
          style={{ maxWidth: 400 }}
        >
          {state.board.map((cell, index) => (
            <Grid item xs={4} key={index}>
              <Paper
                className="cell"
                elevation={3}
                onClick={() => dispatch({ type: "make_move", index })}
              >{cell}</Paper>
            </Grid>

          ))}
        </Grid>

        <Button
          variant="contained"
          onClick={() => dispatch({ type: "reset" })}
          style={{ marginTop: 20 }}
        >
          Reset Game
        </Button>

        <Dialog
          open={state.openDialog}
          onClose={() => dispatch({ type: "close_dialog" })}
        >
          <DialogTitle>
            {state.winner ? `${state.winner} wins!` : "Draw"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={() => dispatch({ type: "reset" })} color="primary">
              Restart
            </Button>
          </DialogActions>
        </Dialog>

      </div>
    </>
  );
}

export default TicTacToe;
