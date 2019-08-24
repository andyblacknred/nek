import { Component, OnInit } from '@angular/core';
import { RoomsGeneratorService } from "../../service/rooms-generator.service";
import {Router} from "@angular/router";
import {SearchService} from "../../service/search.service";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent implements OnInit {

  public pageName = "All Rooms";
  public list: any;

  constructor(public roomsGenerator: RoomsGeneratorService, public router: Router) { }

  ngOnInit() {
    this.list = this.roomsGenerator.rooms;
    if (!this.list.length) {
      this.router.navigate(['/']);
    }
  }

}
