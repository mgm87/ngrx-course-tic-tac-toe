import { GameAction, GameActionTypes } from './game.actions';

export enum Players {
  RED = 'Red',
  BLUE = 'Blue'
}

enum PossiblePlays {
  NONE = ''
}

type BoardStates = Players | PossiblePlays;

export interface GameState {
  board: BoardStates[];
  currentPlayer: Players;
}

export const initialState: GameState = {
  board: [
    PossiblePlays.NONE,
    PossiblePlays.NONE,
    PossiblePlays.NONE,
    PossiblePlays.NONE,
    PossiblePlays.NONE,
    PossiblePlays.NONE,
    PossiblePlays.NONE,
    PossiblePlays.NONE,
    PossiblePlays.NONE
  ],
  currentPlayer: Players.RED
};

export function gameReducer(
  state: GameState = initialState,
  action: GameAction
): GameState {
  switch (action.type) {
    case GameActionTypes.CellClicked: {
      const board = [...state.board];
      board[action.payload] = state.currentPlayer;
      state = {
        ...state,
        board: board,
        currentPlayer: state.currentPlayer === Players.RED ? Players.BLUE : Players.RED
      };
      break;
    }
  }
  return state;
}
