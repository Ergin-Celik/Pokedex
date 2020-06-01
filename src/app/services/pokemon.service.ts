import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonList } from '../models/pokemon-list.model';
import { PokemonModel } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl: string = "https://pokeapi.co/api/v2";

  constructor(private httpClient: HttpClient){}

  getPokemons(page: number, quantity: number){
    return this.httpClient.get<PokemonList>(`${this.apiUrl}/pokemon?offset=${page*quantity}&limit=${quantity}`);
  }

  getPokemon(url: string){
    return this.httpClient.get<PokemonModel.Pokemon>(url);
  }

  
}
