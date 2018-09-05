import { Component, OnInit, Input } from '@angular/core';

// class
import { Beer } from '../../class';

@Component({
  selector: 'delivery-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
@Input() beer: Beer;

  constructor() { }

  ngOnInit() {
  }

}
