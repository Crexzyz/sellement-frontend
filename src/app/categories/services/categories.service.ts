import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { FormFieldFactory } from 'src/app/core/models/form-fields/form-field-factory';
import { BaseRestService } from 'src/app/core/services/base-rest.service';
import { Category } from '../models/category.model';

// TODO: This code is almost the same as in products service, template methods
// may be useful

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends BaseRestService<Category> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "categories");
  }

  async get(object: Category): Promise<Category> {
    let request = this._httpClient.get<Category>(`${this.endpoint}/${object.name}/`);
    let data = await lastValueFrom(request);
    return data;
  }

  async create(object: Category): Promise<Category> {
    const data = object.toJson();
    let request = this._httpClient.post<Category>(`${this.endpoint}/`, data);
    let response = await lastValueFrom(request);
    return response;
  }

  async update(object: Category): Promise<Category> {
    const data = object.toJson();
    let request = this._httpClient.put<Category>(`${this.endpoint}/${object.name}/`, data);
    let response = await lastValueFrom(request);
    return response;
  }

  async delete(object: Category): Promise<Category> {
    const data = object.toJson();
    let request = this._httpClient.delete<Category>(`${this.endpoint}/${object.name}/`, data);
    let response = await lastValueFrom(request);
    return response;
  }

  async form(category?: Category | undefined): Promise<any> {
    let request: Observable<any>;

    if(category === undefined) {
      request = this._httpClient.get<any>(`${this.endpoint}/form/`);
    } else {
      request = this._httpClient.get<any>(`${this.endpoint}/${category.name}/form/`);
    }

    let response = await lastValueFrom(request);
    return FormFieldFactory.createFields(response);
  }

}
