import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { AbstractRestService } from 'src/app/core/services/abstract-rest.service';
import { Product } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends AbstractRestService<Product> {
  async get(object: Product): Promise<Product> {
    let request = this._httpClient.get<Product>(`${this.endpoint}/${object.id}/`);
    let data = await lastValueFrom(request);
    return data;
  }

  async create(object: Product): Promise<Product> {
    const data = object.toJson();
    let request = this._httpClient.post<Product>(`${this.endpoint}/`, data);
    let response = await lastValueFrom(request);
    return response;
  }

  async update(object: Product): Promise<Product> {
    const data = object.toJson();
    let request = this._httpClient.put<Product>(`${this.endpoint}/${object.id}/`, data);
    let response = await lastValueFrom(request);
    return response;
  }

  async delete(object: Product): Promise<Product> {
    const data = object.toJson();
    let request = this._httpClient.delete<Product>(`${this.endpoint}/${object.id}/`, data);
    let response = await lastValueFrom(request);
    return response;
  }

  constructor(httpClient: HttpClient) {
    super(httpClient, "products");
  }
}
