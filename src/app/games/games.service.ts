import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Game } from './models/games.models';

@Injectable({
    providedIn: 'root'
})
export class GamesService {

    constructor(private httpClient: HttpClient) { }

    getGames(): Observable<Game[]> {
        return this.httpClient.get<Game[]>('http://localhost:3000/games');
    }
}
