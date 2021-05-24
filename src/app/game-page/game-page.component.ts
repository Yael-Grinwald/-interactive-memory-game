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
    debugger
    this.btns = document.querySelectorAll<HTMLElement>('.btn');
    this.printCircles()
  }

  btnNumber = [0, 1, 2, 3, 4, 5];
  circlesPrinting: number = 0;
  showBtnsArray: HTMLElement[] = [];
  btnPrintClr: any[] = [];

  printCircles() {
    //random circle
    if(this.btnNumber.length!=1)
    {
          var random = Math.floor(Math.random() * this.btnNumber.length - 1);
    }
    else{
      random=0;
    }
    // add to the show circles array
    this.showBtnsArray.push(this.btns[this.btnNumber[random]]);
   let d= this.btnNumber.splice(random, 1);

    let tableBorder = document.getElementById("table");
    //print-hide circles
    //applay border 
    tableBorder.style.borderStyle = 'solid';
    tableBorder.style.borderColor = '#e29a2a';
    debugger

    this.showBtnsArray.forEach((el, i) => {
      setTimeout(() => {
        el.style.backgroundColor = this.colors[el.id];
        setTimeout(() => {
          el.style.backgroundColor = 'white';
        }, 500);

      }, i * 1000);
      tableBorder.style.borderColor = 'transparent';

    });


  }

  wait(ms) {
    var start = Date.now(),
      now = start;
    while (now - start < ms) {
      now = Date.now();
    }
  }

  check(btnId: number) {
    debugger
    console.log(this.showBtnsArray[this.circlesPrinting]);

    //wrong press
    if (+this.showBtnsArray[this.circlesPrinting].id != +btnId) {
      alert("wrong!");
    }
    else {
      this.score += 100;
      //finish current procces
      if (this.circlesPrinting == this.showBtnsArray.length-1) {
        this.circlesPrinting = 0;
        this.printCircles();
        return;
      }
      else {
        //finish game
        if (this.circlesPrinting == 5) {
          alert("WIN!!");
        }//continue
        else {
          this.circlesPrinting++;
        }

      }

    }

  }


  playAgain() {
    this.circlesPrinting = 0;
    this.btnNumber = [0, 1, 2, 3, 4, 5];
    this.showBtnsArray = [];
    this.showBtnsArray.forEach(element => {
      element.style.backgroundColor = 'white';
    });
    this.printCircles();
  }
  counter(i: number) {
    return new Array(i);
  }
}
