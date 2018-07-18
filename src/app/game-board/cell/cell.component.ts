import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit, OnDestroy {
  @ViewChild('cell') cell;
  display = '';

  private ngUnsubscribe = new Subject();

  constructor() { }

  ngOnInit() {
    fromEvent(this.cell.nativeElement, 'click')
      .pipe(
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe((click) => {
        this.display = 'clicked';
      });
  }

  ngOnDestroy() {
    // https://stackoverflow.com/questions/38008334/angular-rxjs-when-should-i-unsubscribe-from-subscription/41177163#41177163
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
