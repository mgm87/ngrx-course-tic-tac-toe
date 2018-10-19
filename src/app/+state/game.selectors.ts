import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from './game.reducer';

// Lookup the 'Game' feature state managed by NgRx
const getGameState = createFeatureSelector<GameState>('game');

const getCurrentPlayer = createSelector(
  getGameState,
  (state: GameState) => state.currentPlayer
);

export const gameQuery = {
  getCurrentPlayer
};
