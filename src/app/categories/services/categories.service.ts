import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRestService } from 'src/app/core/services/base-rest.service';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends BaseRestService<Category> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "categories");
  }

  get(object: Category): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  create(object: Category): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  update(object: Category): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  delete(object: Category): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  form(object?: Category | undefined): Promise<any> {
    throw new Error('Method not implemented.');
  }

}
