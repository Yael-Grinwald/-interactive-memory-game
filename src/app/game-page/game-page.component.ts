import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { User } from '../Classes/user';
import { GameServiceService } from '../game-service.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  table: number[] = [1, 2, 3];
  start: number = 3;
  score: number = 0;
  currentUser: User;

  @ViewChild('btn') el: ElementRef;

  constructor(private service: GameServiceService, private elementRef: ElementRef) {
    this.currentUser = this.service.currentUser;
  }

  //game proccese:
  // 1. print circles, hide circles
  // 2. player press
  // 3 check player pressing
  // 4. if good then 1 level again
  // 5. if not good- game over
  ngOnInit() {

  }
  colors = [
    'pink',
    'orange',
    'green',
    'brown',
    'black',
    'blue'
  ]
  btns: any;
  ngAfterViewInit() {

    this.btns = document.querySelectorAll<HTMLElement>('.btn');
    this.printCircles()
  }

  btnNumber = [0, 1, 2, 3, 4, 5];
  circlesPrinting: number = 0;//count printing circles
  showBtnsArray: HTMLElement[] = [];
  btnPrintClr: any[] = [];

  printCircles() {
    //random circle
    var random = Math.floor(Math.random() * this.btnNumber.length - 1);
    this.btnNumber.slice(random, 1);
    // add to the show circles array
    this.showBtnsArray.push(this.btns[this.btnNumber[random]]);
    debugger
let tableBorder=document.getElementById("table");
    //print-hide circles
    //applay green border 
    tableBorder.style.borderStyle = 'solid';
    tableBorder.style.borderColor = '#e29a2a';
    this.showBtnsArray.forEach((el) => {
      setTimeout(() => {
        el.style.backgroundColor = this.colors[el.id];
      }, 1000);
    });

    debugger

    setTimeout(() => {
      this.showBtnsArray.forEach(element => {
        element.style.backgroundColor = 'white';
      });
      tableBorder.style.borderColor = 'transparent';

    }, 4000);


  }





  check(btnValue: any) {
    // btnValue.srcElement.id
    // debugger
    // if(this.length<7)
    // {this.gameProcess();

  }

  counter(i: number) {
    return new Array(i);
  }
}
