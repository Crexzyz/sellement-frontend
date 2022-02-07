import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResolvedModel } from 'src/app/core/interfaces/resolved-model';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss',  '../../../../styles.scss']
})
export class ProductDeleteComponent implements OnInit {
  product: Product = new Product();
  error: boolean = false;
  errorMessage: string = "";

  constructor(private service: ProductsService, private route: ActivatedRoute, private router: Router) {
    // TODO: Create SingleItemComponent general component
    // that handles the same model, error, and error message variables
    const data: ResolvedModel<Product> = this.route.snapshot.data['data'];
    this.error = data.error != null;
    if(this.error) {
      this.errorMessage = data.error;
      return;
    }

    this.product.fromJson(data.model);
  }

  ngOnInit(): void {
  }

  delete(): void {
    try {
      this.service.delete(this.product);
      // TODO: Add confirmation message?
      this.router.navigate(["/products"]);
    }
    catch (error: any) {
      // TODO: This error handling can also be added to the
      // general component
      let httpError = error as HttpErrorResponse;
      this.errorMessage = httpError.message;
      this.error = true;
    }
  }
}
