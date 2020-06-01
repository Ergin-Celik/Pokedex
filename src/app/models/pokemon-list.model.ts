import { PokemonModel } from './pokemon.model';

export interface PokemonList{
     count: number;
     next: string;
     previous: string;
     results: PokemonModel.Pokemon[]
}