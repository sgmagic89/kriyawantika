import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit {
  domainData: any;
  constructor(private route: ActivatedRoute, private dataService: AppDataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.domainData = this.dataService.getDomainData(<string>params.get('name'));
    });
  }

}
