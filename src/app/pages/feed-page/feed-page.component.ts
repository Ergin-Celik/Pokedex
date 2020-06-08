import { Component, OnInit, Input } from '@angular/core';
import { PokemonList } from 'src/app/models/pokemon-list.model';
import { PokemonModel } from 'src/app/models/pokemon.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed-page',
  template: `
        <app-search></app-search>
        <app-pokemon-card *ngFor="let p of pokemonsToDisplay" [pokemon]=p></app-pokemon-card>
        `,
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {

  //@Input() public pokemonList: PokemonList;
  public pokemonsToDisplay: PokemonModel.Pokemon[];
  private page: number;
  private quantity: number;

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      (d) => {
        if(d !== null){
          let pokemonList: PokemonList = d.data;
          this.pokemonsToDisplay = pokemonList.results;
          localStorage.setItem("pokemonList", JSON.stringify(pokemonList));
        }
      }
    );
  }
}
