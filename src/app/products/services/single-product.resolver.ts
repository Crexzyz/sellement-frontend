import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, from, map, Observable, of } from 'rxjs';
import { ResolvedModel } from 'src/app/core/interfaces/resolved-model';
import { Product } from '../models/product.model';
import { ProductsService } from './products.service';

/**
 * Automatically gets a single data row for a model. To use it, add the resolver
 * to a route in the resolve field. Then, access the data through an `ActivatedRoute`:
 * 
 * ```
 * // In routes
 * {path: ..., component: ..., resolve: {data: SingleProductResolver}
 * // In component
 * rawData = route.snapshot.data["data"];
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class SingleProductResolver implements Resolve<ResolvedModel<Product>> {
  constructor(private service: ProductsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedModel<Product>> {
    const id = Number(route.paramMap.get('id'));

    if (isNaN(id)) {
      const message: string = `Invalid product id: ${id}`;
      return of({ model: null, error: message });
    }

    const product: Product = new Product(id);
    return from(this.service.get(product)).pipe(
      map((data) => ({ model: data, error: null })),
      catchError((error) => {
        const message: string = `Error fetching product: ${error.statusText}`;
        return of({ model: null, error: message });
      })
    );
  }
}
