import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import { Observable, observable, throwError } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor( private http: HttpClient) { }

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

  private extractPersonajes(res: RickAndMortyResponsePersonajes): Personaje[]{
    console.log(res)
    return res.results
   
  }
 

  getPersonajes(): Observable<any>{
    return this.http.get<RickAndMortyResponsePersonajes>(endPoint).pipe(
      map(this.extractPersonajes),
      catchError(this.handleError)
    )
  }

  getPersonaje(id: number): Observable<Personaje>{
    return this.http.get<Personaje>(endPoint +'/'+ id)    
  }

}

export interface Personaje{
  id: number,
  name: string,
  species: string,
  gender: string,
  image: string
}

export interface RickAndMortyResponsePersonajes{
  info: any,
  results: Personaje[]
}

const endPoint = 'https://rickandmortyapi.com/api/character'