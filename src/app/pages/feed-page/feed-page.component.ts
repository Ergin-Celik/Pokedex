import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonList } from 'src/app/models/pokemon-list.model';
import { PokemonModel } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-feed-page',
  template: `
    <div *ngIf="pokemonList !== undefined">
        <app-search></app-search>
        <app-pokemon-card *ngFor="let p of pokemonsToDisplay" [pokemon]=p></app-pokemon-card>
    </div>
  `,
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {

  @Input() public pokemonList: PokemonList;
  public pokemonsToDisplay: PokemonModel.Pokemon[];
  private page: number;
  private quantity: number;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    //this.pokemonsToDisplay = this.pokemonList.results.map(pokemon => pokemon).splice()
  }
}
