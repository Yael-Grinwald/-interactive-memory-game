import { Component, OnInit } from '@angular/core';
import { User } from '../Classes/user';
import { GameServiceService } from '../game-service.service';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  constructor(private service:GameServiceService) { }

  ngOnInit(): void {
  }

  saveData(name:string){
    
    this.service.currentUser.name=name;
  }
}
