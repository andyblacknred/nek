import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from "../../service/search.service";


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.sass']
})
export class PageHeaderComponent implements OnInit {

  constructor(public searchService: SearchService) { }

  // declare variables
  @Input() pageName: string;
  public inputVal: string = '';
  public form: any;

  // search form onSubmit
  onSubmit() {
    this.searchService.search(this.inputVal);
  }

  ngOnInit() {
  }

}
