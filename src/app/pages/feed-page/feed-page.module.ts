import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedPageComponent } from './feed-page.component';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonCardModule } from 'src/app/components/pokemon-card/pokemon-card.module';
import { SearchModule } from 'src/app/components/search/search.module';



@NgModule({
  declarations: [FeedPageComponent],
  imports: [
    CommonModule,
    PokemonCardModule,
    SearchModule
  ],
  providers: [PokemonService],
  exports: [FeedPageComponent]
})
export class FeedPageModule { }
