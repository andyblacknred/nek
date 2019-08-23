import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsGeneratorService {

  public rooms = [];

  constructor() { }

  // random integer generator
  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  // room generator
  createRoom(roomNumber, descriptionWordCount, square, isOffice, levels, isRepair, isFloor) {
    let room = <any>{};

    // random description
    let loremString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias harum odit possimus. Debitis exercitationem in magni nostrum quam, repellendus suscipit.'
    let loremArray = loremString.split(' ');
    let description = loremArray.slice(0, descriptionWordCount).join(' ');

    // floor = first digit of roomNumber
    let roomNumberString = roomNumber.toString();
    let startFloor = parseInt(roomNumberString[0]);
    if (roomNumberString.length < 3) {
      startFloor = 0;
    }

    // setting room`s parameters
    room.roomNumber = roomNumberString.padStart( 3, "0");
    room.description = description;
    room.square = square;
    room.isOffice = isOffice;
    if (levels > 1 && startFloor < 9) {
      room.levels = levels;
      if(isFloor) {
        room.floor = [];
        for (let i = 0; i < levels; i++) {
          room.floor.push(startFloor + i);
        }
        room.floor = room.floor[0] + ' - ' + room.floor[room.floor.length - 1];
      }
    } else if (levels == 1) {
      room.levels = 1;
      if(isFloor) {
        room.floor = startFloor;
      }
    }
    room.isRepair = isRepair;

    // return result of function
    return room;
  }

  // array generator
  createRoomsArray(roomsCount) {
    let roomsArray = [];

    // creating rooms
    for (let i = 0; i < roomsCount; i++) {

      // setting variables
      let roomNumber = this.randomInteger(1, 999);
      let descriptionWordCount = this.randomInteger(3, 20);
      let square = this.randomInteger(1, 100);
      let isOffice = this.randomInteger(0, 1);
      let levels = this.randomInteger(0, 2);
      let isRepair = this.randomInteger(0, 1);
      let isFloor =  this.randomInteger(0, 1);

      // add new room to roomsArray
      roomsArray.push(this.createRoom(roomNumber, descriptionWordCount, square, isOffice, levels, isRepair, isFloor));
    }

    // return result of function
    return roomsArray;
  }
}

