import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PaginatedContainer } from 'src/app/core/models/paginated-container.model';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ["../../../../styles.scss"]
})
export class ProductListComponent implements OnInit {
  dataContainer: PaginatedContainer<Product> = new PaginatedContainer();
  loading: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.getData();
  }

  pageChanged(event: PageEvent) {
    this.dataContainer.currentPage = event.pageIndex;
    this.getData();
  }

  async getData() {
    this.loading = true;
    let rawData: any = await this._productsService.getAll(this.dataContainer.currentPage);
    this.dataContainer.fromData(rawData, Product);
    this.loading = false;
  }
}
