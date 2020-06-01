import { Component } from '@angular/core';
import {PokemonService} from './services/pokemon.service';
import { PokemonList } from './models/pokemon-list.model';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <div>
      <app-loading-spinner *ngIf="pokemonList !== undefined;else feedPage"></app-loading-spinner>
      <app-feed-page #feedPage></app-feed-page>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokedex';
  public pokemonList: PokemonList;

  constructor(private pokemonService: PokemonService){
    this.loadPokemons();
  }
  
  loadPokemons(){
    this.pokemonService.getPokemons(0, 1000).subscribe(
      data => {
        this.pokemonList = data;
        let pokemons = [];
        
        data.results.forEach((value,index,array) => {
          this.pokemonService.getPokemon(value.url).subscribe(
            data => {
              let index = this.pokemonList.results.findIndex(x => x.url === value.url);
              this.pokemonList.results[index] = data;
              /*
              if(index === array.length-1) {
                sessionStorage.setItem("pokemonList", JSON.stringify(this.pokemonList));
              }*/
            }, 
            error => console.log(error));
          });
          
      },
      error => console.log(error)
    );
  }
}
