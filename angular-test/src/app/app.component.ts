import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { products as data } from './data/products'
import { ProductService } from './services/products.service';
import { Observable, tap } from 'rxjs';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular app';
  loading = false
  products$: Observable<IProduct[]>
  term = ''

  constructor(
    private productsService: ProductService,
    public modalService: ModalService
  ) {

  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
  }

}
