import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';

import { CellService, ScoreService } from '../../services';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() position: number;
  @ViewChild('cell') cell;
  display = '';
  blue = false;
  red = false;

  constructor(private cellService: CellService, private scoreService: ScoreService) { }

  ngOnInit() {
    fromEvent(this.cell.nativeElement, 'click')
      .pipe(
        take(1)
      )
      .subscribe((click) => {
        const turn = this.cellService.getPlayer();
        let player = '';
        if (turn === 'red') {
          this.red = true;
          player = 'Red';
        } else {
          this.blue = true;
          player = 'Blue';
        }
        this.display = 'clicked';
        this.scoreService.updateBoard(this.position, player);
      });
  }

}
