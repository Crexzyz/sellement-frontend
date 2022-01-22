import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestService } from '../interfaces/rest-service'

export abstract class AbstractRestService<T> implements RestService<T> {
  protected base_endpoint: string = "http://localhost:8000";
  protected custom_endpoint: string;
  protected endpoint: string;

  constructor(protected _httpClient: HttpClient, endpoint: string) {
    this.custom_endpoint = endpoint;
    this.endpoint = `${this.base_endpoint}/${this.custom_endpoint}`;
  }

  getAll(): Observable<T[]> {
    return this._httpClient.get<T[]>(this.endpoint);
  }

  abstract get(object: T): Promise<T>;
  abstract create(object: T): Promise<T>;
  abstract update(object: T): Promise<T>;
  abstract delete(object: T): Promise<T>;
}
