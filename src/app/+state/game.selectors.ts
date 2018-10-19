import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState, Players } from './game.reducer';

// Lookup the 'Game' feature state managed by NgRx
const getGameState = createFeatureSelector<GameState>('game');

const getCurrentPlayer = createSelector(
  getGameState,
  (state: GameState) => state.currentPlayer
);

const getWinner = createSelector(
  getGameState,
  (state: GameState) => {
    if (
      (state.board[0] === Players.RED && state.board[1] === Players.RED && state.board[2] === Players.RED) ||
      (state.board[3] === Players.RED && state.board[4] === Players.RED && state.board[5] === Players.RED) ||
      (state.board[6] === Players.RED && state.board[7] === Players.RED && state.board[8] === Players.RED) ||
      (state.board[0] === Players.RED && state.board[3] === Players.RED && state.board[6] === Players.RED) ||
      (state.board[1] === Players.RED && state.board[4] === Players.RED && state.board[7] === Players.RED) ||
      (state.board[2] === Players.RED && state.board[5] === Players.RED && state.board[8] === Players.RED) ||
      (state.board[0] === Players.RED && state.board[4] === Players.RED && state.board[8] === Players.RED) ||
      (state.board[2] === Players.RED && state.board[4] === Players.RED && state.board[6] === Players.RED)
    ) {
      return Players.RED;
    } else if (
      (state.board[0] === Players.BLUE && state.board[1] === Players.BLUE && state.board[2] === Players.BLUE) ||
      (state.board[3] === Players.BLUE && state.board[4] === Players.BLUE && state.board[5] === Players.BLUE) ||
      (state.board[6] === Players.BLUE && state.board[7] === Players.BLUE && state.board[8] === Players.BLUE) ||
      (state.board[0] === Players.BLUE && state.board[3] === Players.BLUE && state.board[6] === Players.BLUE) ||
      (state.board[1] === Players.BLUE && state.board[4] === Players.BLUE && state.board[7] === Players.BLUE) ||
      (state.board[2] === Players.BLUE && state.board[5] === Players.BLUE && state.board[8] === Players.BLUE) ||
      (state.board[0] === Players.BLUE && state.board[4] === Players.BLUE && state.board[8] === Players.BLUE) ||
      (state.board[2] === Players.BLUE && state.board[4] === Players.BLUE && state.board[6] === Players.BLUE)
    ) {
      return Players.BLUE;
    } else {
      return false;
    }
  }
);

export const gameQuery = {
  getCurrentPlayer,
  getWinner
};
