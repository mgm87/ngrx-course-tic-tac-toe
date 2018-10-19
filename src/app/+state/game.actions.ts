import { Action } from '@ngrx/store';

export enum GameActionTypes {
  CellClicked = '[Game] Cell Clicked'
}

export class CellClicked implements Action {
  readonly type = GameActionTypes.CellClicked;
  constructor(public payload: number) {}
}

export type GameAction = CellClicked;

export const fromGameActions = {
  CellClicked
};
