import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GamesService } from '../games.service';
import { Game } from '../models/games.models';

@Component({
  selector: 'app-games-dashboard',
  templateUrl: './games-dashboard.component.html',
  styleUrls: ['./games-dashboard.component.scss']
})
export class GamesDashboardComponent implements OnInit {
    games$: Observable<Game[]> | undefined;

    constructor(private gamesService: GamesService) { }

    ngOnInit(): void {
        this.games$ = this.gamesService.getGames();
    }
}
