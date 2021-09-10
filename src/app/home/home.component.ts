import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerData: any;
  domainData: any[] = [];
  constructor(private router: Router, private appDataService: AppDataService) { }

  ngOnInit() {
    this.bannerData = this.appDataService.getBannerData();
    this.domainData = this.appDataService.getDomainData();
  }

}
