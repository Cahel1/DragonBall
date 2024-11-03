import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DragonBallCharacters } from '../interface/dragonball-interface';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  constructor(
    private http:HttpClient
  ) { }

  obtenerFranquicia(){
    return this.http.get<DragonBallCharacters>('https://dragonball-api.com/api/characters?limit=58');
  }
}
