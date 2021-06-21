import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import { Observable, observable, throwError } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }

  private handleError (error: HttpErrorResponse): any{
    if (error.error instanceof ErrorEvent){
      console.error ('Ocurrio un Error: ', error.error.message);
    }else{
      console.error(
        'Backend devolvio codigo ${error.status}, ' +
        'body was: ${error.error}');
      }
    return throwError(
      'Ocurrio algo malo, vuelva a intentar.');
  }

  private extractEpisodes(res: RickAndMortyResponse): Episode[]{
    return res.results
  }

  getEpisodes(): Observable<any>{
    return this.http.get<RickAndMortyResponse>(endPoint).pipe(
      map(this.extractEpisodes),
      catchError(this.handleError)
    );
    
  }
}

export interface Episode{
  id: number,
  name: string,
  air_date: string,
  episode: string
  characters: string[]

}
export interface RickAndMortyResponse{
  info: any,
  results: Episode[]
}

const endPoint = 'https://rickandmortyapi.com/api/episode';



