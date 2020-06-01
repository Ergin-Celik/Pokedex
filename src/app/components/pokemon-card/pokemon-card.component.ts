import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonModel } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  template: `
    <div *ngIf="pokemon !== undefined" class="pokemon-card-container">
      <div class="pokemon-card-id">#{{this.pokemon.id}}</div>
      <div class="pokemon-card-sprite"><img src={{this.pokemon.sprites?.front_default}} alt=""/></div>
      <div class="pokemon-card-name">{{this.pokemon.name | titlecase}}</div>
    </div>
  `,
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: PokemonModel.Pokemon;
  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    this.pokemonService.getPokemon(this.pokemon.url)
    .subscribe(
      (data) => {this.pokemon = data;}, 
      (error) => console.log(error));
  }

}
