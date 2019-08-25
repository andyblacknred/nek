import { Component, OnInit } from '@angular/core';
import { RoomsGeneratorService } from "../../service/rooms-generator.service";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  // declare variables
  public pageName = "Rooms";

  constructor(public roomsGenerator: RoomsGeneratorService) { }

  // generate rooms on first load
  ngOnInit() {
    if (this.roomsGenerator.rooms.length == 0) {
      let roomsCount = this.roomsGenerator.randomInteger(4, 10);
      this.roomsGenerator.rooms = this.roomsGenerator.createRoomsArray(roomsCount);
      this.roomsGenerator.fourRoomsTop = this.roomsGenerator.rooms.slice(0,4);
      this.roomsGenerator.fourRoomsBottom = this.roomsGenerator.rooms.slice(0,4);
      console.log(this.roomsGenerator.rooms);
    }
  }

  // drag-n-drop function
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.roomsGenerator.fourRoomsTop, event.previousIndex, event.currentIndex);
  }

}
