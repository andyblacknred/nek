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

  // declare variables
  public pageName = "All Rooms";

  constructor(public roomsGenerator: RoomsGeneratorService, public router: Router) { }

  // go to homepage when rooms-list is empty (homepage will generate new rooms-list)
  ngOnInit() {
    if (!this.roomsGenerator.rooms.length) {
      this.router.navigate(['/']);
    }
  }

}
