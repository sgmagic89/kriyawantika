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

getDomainData(domainName?: string): any{
  if(domainName) {
    return AppData.domainData.find( domain => domain.name === domainName);
  }
  return AppData.domainData;
}



}
