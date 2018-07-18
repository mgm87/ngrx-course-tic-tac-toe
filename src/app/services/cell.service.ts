import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CellService {

  private currentPlayer: string;

  constructor() { }

  getPlayer(): string {
    let retVal: string;
    if (this.currentPlayer === 'red') {
      this.currentPlayer = 'blue';
    } else {
      this.currentPlayer = 'red';
    }
    retVal = this.currentPlayer;

    return retVal;
  }

}
