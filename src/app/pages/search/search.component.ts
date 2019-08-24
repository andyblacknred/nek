import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../service/search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor(public searchService: SearchService, public router: Router) { }

  public list: any;
  public pageName: any;

  ngOnInit() {
    this.pageName = 'Search result: ' + this.searchService.request;
    this.list = this.searchService.response;
    if (!this.list) {
      this.router.navigate(['/']);
    }
  }

}
