import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { LoadProductsService } from 'src/app/services/load-products.service';

@Injectable()
export class ProductsEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Product List] Loading products'),
    exhaustMap(() => this.productService.loadProducts()
      .pipe(
        map(products => ({ type: '[Product List] Loaded products succed',products })),
        catchError(() => EMPTY)
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private productService: LoadProductsService
    ) { }
}
