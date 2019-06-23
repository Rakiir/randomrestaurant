import { Component, OnInit } from '@angular/core';
import { UDFood, BeavercreekFood } from '../restaurants';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  UDRestaurants;
  BvckRestaurants;
  result;
  lastUDRandom;
  lastBvRandom;
  locName1;
  locName2;

  constructor() {  }
  ngOnInit() {
    this.result = "Random Restaurants";
    this.UDRestaurants = UDFood;
    this.BvckRestaurants = BeavercreekFood;
    this.locName1 = "UD";
    this.locName2 = "Beavercreek";
  }

  rollUD() {
    var random = Math.floor((Math.random() * this.UDRestaurants.length));
    if (this.lastUDRandom == random) {
      this.rollUD();
    } else {
      this.lastUDRandom = random;
      this.result = (this.UDRestaurants[random]);
    }
  }
  rollBvck() {
    var random = Math.floor((Math.random() * this.BvckRestaurants.length));
    if (this.lastBvRandom == random) {
      this.rollBvck();
    } else {
      this.lastBvRandom = random;
      this.result = (this.BvckRestaurants[random]);
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
