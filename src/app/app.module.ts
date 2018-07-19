import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { CellComponent } from './game-board/cell/cell.component';
import { CellService, ScoreService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    CellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CellService, ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
