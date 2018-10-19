import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';

import { Players } from '../../+state/game.reducer';
import { ScoreService } from '../../services';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() position: number;
  @Input() player: Players;
  @Output() cellClicked = new EventEmitter<number>();
  @ViewChild('cell') cell;
  display = '';
  blue = false;
  red = false;

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    fromEvent(this.cell.nativeElement, 'click')
      .pipe(
        take(1)
      )
      .subscribe((click) => {
        this.cellClicked.emit(this.position);
        if (this.player === Players.RED) {
          this.red = true;
        } else {
          this.blue = true;
        }
        this.display = 'clicked';
        this.scoreService.updateBoard(this.position, this.player);
      });
  }

}
