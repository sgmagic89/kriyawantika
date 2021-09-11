import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/services/app-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  domains: any[]= []
  constructor(private dataService: AppDataService) { }

  ngOnInit() {
    this.domains = this.dataService.getDomainData();
  }

}
