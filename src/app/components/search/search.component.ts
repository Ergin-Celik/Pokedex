import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <div id="search-container">
      <input type="text" placeholder="Find a pokémon..."/>
    </div>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
