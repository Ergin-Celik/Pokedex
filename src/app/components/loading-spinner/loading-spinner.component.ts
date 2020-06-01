import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `
    <div id="loading-spinner-container">
      <img src='../../../assets/img/loading-spinner.gif' alt="Loading..."/>
      <p>...Loading pokédex...</p>
    </div>
  `,
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
