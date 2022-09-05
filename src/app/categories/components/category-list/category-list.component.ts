import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PaginatedContainer } from 'src/app/core/models/paginated-container.model';
import { Category } from '../../models/category.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["../../../../styles.scss"]
})
export class CategoryListComponent implements OnInit {
  dataContainer: PaginatedContainer<Category> = new PaginatedContainer();

  loading: boolean = true;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  constructor(private _categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getData();
  }

  pageChanged(event: PageEvent) {
    this.dataContainer.currentPage = event.pageIndex;
    this.getData();
  }

  async getData() {
    this.loading = true;
    let rawData: any = await this._categoriesService.getAll(this.dataContainer.currentPage);
    this.dataContainer.fromData(rawData, Category);
    this.loading = false;
  }

}
