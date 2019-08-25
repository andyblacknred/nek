import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})

export class ListComponent implements OnInit {

  constructor() { }

  // declare variables
  @Input() list: any;

  ngOnInit() {

  }


}
