import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonList } from 'src/app/models/pokemon-list.model';

@Component({
  selector: 'app-feed-page',
  template: `
    <div *ngIf="pokemonList !== undefined">
        <app-search></app-search>
        <app-pokemon-card *ngFor="let p of pokemonList.results" [pokemon]=p></app-pokemon-card>
    </div>
  `,
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {

  public pokemonList: PokemonList;
  private page: number;
  private quantity: number;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(){
    this.pokemonService
    .getPokemons(this.page, this.quantity)
    .subscribe(
      (data) => this.pokemonList = data, 
      (error) => console.log(error));
  }

}
