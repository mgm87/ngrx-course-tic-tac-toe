import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ScoreService } from '../services';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  winner: Observable<string>;

  constructor(private scoreService: ScoreService) {}

  ngOnInit() {
    this.winner = this.scoreService.winningPlayer;
  }

}
