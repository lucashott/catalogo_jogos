import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({ providedIn: 'root' })
export class GamesService {
  private http = inject(HttpClient);
private baseUrl = 'http://localhost:3011/games';

  list(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl);
  }
  get(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.baseUrl}/${id}`);
  }
  create(payload: Game): Observable<Game> {
    return this.http.post<Game>(this.baseUrl, payload);
  }
  update(id: number, payload: Game): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, payload);
  }
  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
