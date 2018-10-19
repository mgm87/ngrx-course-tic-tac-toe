import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ScoreService } from '../services';
import { CellClicked } from '../+state/game.actions';
import { GameState } from '../+state/game.reducer';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  winner: Observable<string>;

  constructor(private scoreService: ScoreService, private store: Store<GameState>) {}

  ngOnInit() {
    this.winner = this.scoreService.winningPlayer;
  }

  cellClicked(position: number) {
    this.store.dispatch(new CellClicked(position));
  }

}
