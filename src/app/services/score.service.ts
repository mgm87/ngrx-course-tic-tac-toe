import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  gameBoard: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
  winningPlayer: Observable<string>;
  private winnerSubject: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {
    this.winningPlayer = this.winnerSubject.asObservable();
  }

  updateBoard(position: number, player: string) {
    this.gameBoard[position] = player;
    this.win(player);
  }

  win(player: string): boolean {
    if (
      (this.gameBoard[0] === player && this.gameBoard[1] === player && this.gameBoard[2] === player) ||
      (this.gameBoard[3] === player && this.gameBoard[4] === player && this.gameBoard[5] === player) ||
      (this.gameBoard[6] === player && this.gameBoard[7] === player && this.gameBoard[8] === player) ||
      (this.gameBoard[0] === player && this.gameBoard[3] === player && this.gameBoard[6] === player) ||
      (this.gameBoard[1] === player && this.gameBoard[4] === player && this.gameBoard[7] === player) ||
      (this.gameBoard[2] === player && this.gameBoard[5] === player && this.gameBoard[8] === player) ||
      (this.gameBoard[0] === player && this.gameBoard[4] === player && this.gameBoard[8] === player) ||
      (this.gameBoard[2] === player && this.gameBoard[4] === player && this.gameBoard[6] === player)
    ) {
      this.winnerSubject.next(player);
      return true;
    } else {
      return false;
    }
  }
}
