import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PokemonListResolver } from './services/pokemon-list.resolver';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FeedPageComponent,
    resolve: {
      data: PokemonListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
