import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { RestService } from '../interfaces/rest-service'

export abstract class AbstractRestService<T> implements RestService<T> {
  protected base_endpoint: string = "http://localhost:8000";
  protected custom_endpoint: string;
  protected endpoint: string;

  constructor(protected _httpClient: HttpClient, endpoint: string) {
    this.custom_endpoint = endpoint;
    this.endpoint = `${this.base_endpoint}/${this.custom_endpoint}`;
  }

  async getAll(page: number): Promise<any> {
    page += 1;
    const pageArgument = page > 1 ? `/?page=${page}` : '/';
    return await lastValueFrom(this._httpClient.get(`${this.endpoint}${pageArgument}`));
  }

  abstract get(object: T): Promise<T>;
  abstract create(object: T): Promise<T>;
  abstract update(object: T): Promise<T>;
  abstract delete(object: T): Promise<T>;
  abstract form(): Promise<any>;
}
