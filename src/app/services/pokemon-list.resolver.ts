import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { PokemonList } from '../models/pokemon-list.model';
import { PokemonModel } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonListResolver implements Resolve<PokemonList> {

  constructor(private pokemonService: PokemonService){}
     resolve(): Observable<PokemonList> | PokemonList {
          let pokemonList = JSON.parse(localStorage.getItem("pokemonList")) as PokemonList;

          if(pokemonList === null){
            return this.pokemonService.getPokemons(0, 30);
          }
          else{
            console.log("loading local data");
            return pokemonList;
          }
     }
}
