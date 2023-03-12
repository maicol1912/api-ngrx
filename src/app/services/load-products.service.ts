import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoadProductsService {

  constructor() { }

  loadProducts():Observable<any>{
    const data = [
      {
        id:1,
        reference:'good products',
        price:1000,
        code:1882
      },
      {
        id:3,
        reference:'good products',
        price:1000,
        code:1882
      },
      {
        id:33,
        reference:'good products',
        price:1000,
        code:1882
      },
      {
        id:19,
        reference:'good products',
        price:1000,
        code:1882
      }
    ]
    return of(data).pipe(
      delay(1500)
    );
  }
}
