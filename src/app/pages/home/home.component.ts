import { Component, OnInit } from '@angular/core';
import { RoomsGeneratorService } from "../../service/rooms-generator.service";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public fourRooms = [];
  public fourRoomsBottom = [];
  public pageName = "Rooms";

  constructor(public roomsGenerator: RoomsGeneratorService) { }

  ngOnInit() {
    if( this.roomsGenerator.rooms.length == 0 ) {
      let roomsCount = this.roomsGenerator.randomInteger(4, 10);
      this.roomsGenerator.rooms = this.roomsGenerator.createRoomsArray(roomsCount);
      this.fourRooms = this.roomsGenerator.rooms.slice(0,4);
      this.fourRoomsBottom = this.roomsGenerator.rooms.slice(0,4);
      console.log(this.roomsGenerator.rooms);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fourRooms, event.previousIndex, event.currentIndex);
  }

}
