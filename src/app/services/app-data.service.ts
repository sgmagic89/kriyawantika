import { Injectable } from '@angular/core';
import { AppData } from '../../data/app.data';
@Injectable({
  providedIn: 'root'
})
export class AppDataService {

constructor() { }

getBannerData() {
  return AppData.mainBannerData;
}

getDomainsData() {
  return AppData.domains;
}

}
