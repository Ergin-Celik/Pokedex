import { Component } from '@angular/core';
import {PokemonService} from './services/pokemon.service';
import { PokemonList } from './models/pokemon-list.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokedex';
  public pokemonList: PokemonList;

  constructor(){}

  ngOnInit(): void {
    
  }
}
