import { Injectable } from '@angular/core';
import { User } from './Classes/user';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  currentUser:User=new User();

  constructor() { }
}
