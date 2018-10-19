import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { CellComponent } from './game-board/cell/cell.component';
import {
  initialState as gameInitialState,
  gameReducer
 } from './+state/game.reducer';
 import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      { game: gameReducer },
      {
        initialState: {game: gameInitialState},
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
