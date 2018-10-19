import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ScoreService } from '../services';
import { CellClicked } from '../+state/game.actions';
import { GameState, Players } from '../+state/game.reducer';
import { gameQuery } from '../+state/game.selectors';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  winner: Observable<string>;
  currentPlayer$: Observable<Players>;

  constructor(private scoreService: ScoreService, private store: Store<GameState>) {}

  ngOnInit() {
    this.currentPlayer$ = this.store.pipe(select(gameQuery.getCurrentPlayer));
    this.winner = this.scoreService.winningPlayer;
  }

  cellClicked(position: number) {
    this.store.dispatch(new CellClicked(position));
  }

}
