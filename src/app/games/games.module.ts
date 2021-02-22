import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from  '@angular/common/http';

import { GamesDashboardComponent } from './games-dashboard/games-dashboard.component';
import { GamesService } from './games.service';

@NgModule({
    declarations: [GamesDashboardComponent],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        GamesService
    ],
    exports: [
        GamesDashboardComponent
    ]
})
export class GamesModule { }
