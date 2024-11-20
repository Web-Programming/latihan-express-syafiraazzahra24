import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  protected housingLocationList: HousingLocation[] = [

  ];

  constructor() { }

  getAllHousingLocation() : HousingLocation[]{
    return this.housingLocationList;
  }
}
