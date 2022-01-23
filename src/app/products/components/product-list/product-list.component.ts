import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { lastValueFrom } from 'rxjs';
import { PaginatedContainer } from 'src/app/core/models/paginated-container.model';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements AfterViewInit {
  displayedColumns: string[] = ["name", "stock", "purchasePrice", "sellPrice"]
  private _dataContainer: PaginatedContainer<Product> = new PaginatedContainer();
  dataSource = new MatTableDataSource<Product>(this._dataContainer.results);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getData(1);
  }

  constructor(private _productsService: ProductsService) { }

  async getData(page: number) {
    let rawData: any = await lastValueFrom(this._productsService.getAll())  
    this._dataContainer.fromData(rawData, Product);
    this.dataSource.data = this._dataContainer.results
  }
}
