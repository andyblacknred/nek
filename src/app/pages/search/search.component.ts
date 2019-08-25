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

  // declare variables
  public pageName = 'Search result: ';

  // go to homepage when when response is undefined
  ngOnInit() {
    if (!this.searchService.response) {
      this.router.navigate(['/']);
    }
  }

}
