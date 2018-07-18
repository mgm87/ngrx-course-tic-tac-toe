import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';

import { CellService } from '../../services/cell.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @ViewChild('cell') cell;
  display = '';
  blue = false;
  red = false;

  constructor(private cellService: CellService) { }

  ngOnInit() {
    fromEvent(this.cell.nativeElement, 'click')
      .pipe(
        take(1)
      )
      .subscribe((click) => {
        const turn = this.cellService.getPlayer();
        if (turn === 'red') {
          this.red = true;
        } else {
          this.blue = true;
        }
        this.display = 'clicked';
      });
  }

}
