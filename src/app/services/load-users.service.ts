import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { UserModel } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoadUsersService {

  constructor() { }

  loadUsers():Observable<any>{
    const data = [
      {
        id:1,
        firstname:"maicol",
        lastname:"arcila",
        email:"maicol90@gmail.com",
        activate:true
      },
      {
        id:2,
        firstname:"felipe",
        lastname:"arcila",
        email:"maicol90@gmail.com",
        activate:true
      },
      {
        id:3,
        firstname:"cossio",
        lastname:"arcila",
        email:"maicol90@gmail.com",
        activate:true
      },
      {
        id:4,
        firstname:"alejandro",
        lastname:"arcila",
        email:"maicol90@gmail.com",
        activate:true
      }
    ]
    return of(data).pipe(
      delay(1500)
    );
  }
}
