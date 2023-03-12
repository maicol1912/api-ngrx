import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from "rxjs"
import { productModel } from 'src/app/interfaces/product.interface';
import { LoadProductsService } from 'src/app/services/load-products.service';
import { loadedProducts, loadProducts } from 'src/app/state/actions/product.actions';
import { Appstate } from 'src/app/state/app.state';
import { selectListProducts, selectLoading } from 'src/app/state/selectors/product.selector';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{
  loading$:Observable<boolean> = new Observable()
  products$:Observable<any> = new Observable()

  constructor(private store:Store<Appstate>,private service:LoadProductsService){
  }
  ngOnInit(): void {
    this.products$ = this.store.select(selectListProducts)
    this.loading$ = this.store.select(selectLoading)
    this.store.dispatch(loadProducts())

    this.service.loadProducts().subscribe(
      ((response:productModel[])=>{
        this.store.dispatch(loadedProducts(
          {products:response}
        ))
      })
    )
  }


}
